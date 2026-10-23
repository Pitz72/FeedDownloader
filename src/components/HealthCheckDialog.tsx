import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, FileQuestion, FileWarning, Search, ShieldCheck, Square, Stamp, Wrench, RotateCcw } from 'lucide-react';
import type { HealthCheckFile, HealthCheckMode, HealthCheckResult } from '../../shared/types';
import { Dialog } from './ui/Dialog';
import { Button } from './ui/Button';
import { ProgressBar, Segmented, Stat } from './ui/Controls';
import { ConfirmDialog } from './ui/ConfirmDialog';
import { useToast } from './ui/Toast';
import { formatBytes } from '../utils/format';
import { useOnOpen } from '../hooks/useOnOpen';

const LIST_LIMIT = 50;

function FileList({ files, label }: { files: HealthCheckFile[]; label: string }) {
    const { t } = useTranslation();
    return (
        <div>
            <ul aria-label={label} className="max-h-48 space-y-1 overflow-y-auto rounded-md border border-line bg-surface-1 p-2">
                {files.slice(0, LIST_LIMIT).map((f, i) => (
                    <li key={`${f.feedUrl ?? ''}|${f.guid}|${i}`} className="truncate text-sm text-fg-2" title={`${f.podcast} › ${f.filename}`}>
                        <span className="text-fg-3">{f.podcast} › </span>{f.title}
                    </li>
                ))}
            </ul>
            {files.length > LIST_LIMIT && <p className="mt-1 text-xs text-fg-3">{t('health.and_more', { count: files.length - LIST_LIMIT })}</p>}
        </div>
    );
}

/**
 * Verifica dell'archivio. «Rapida» controlla presenza e dimensione (secondi
 * anche su archivi grandi); «Completa» ricalcola lo SHA-256 di ogni file
 * (ore su un NAS pieno: per questo mostra l'avanzamento e si può fermare).
 */
export function HealthCheckDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const [mode, setMode] = useState<HealthCheckMode>('quick');
    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
    const [result, setResult] = useState<HealthCheckResult | null>(null);
    const [busy, setBusy] = useState<string | null>(null);
    const [confirmMark, setConfirmMark] = useState(false);

    useEffect(() => window.api.onHealthCheckProgress(setProgress), []);
    // Azzera solo all'apertura: a fine verifica il risultato deve restare.
    useOnOpen(open, () => { setResult(null); setProgress(null); });

    const run = async (m: HealthCheckMode = mode) => {
        setRunning(true);
        setResult(null);
        setProgress({ done: 0, total: 0 });
        try {
            setResult(await window.api.runHealthCheck(m));
        } catch {
            toast.error(t('health.failed'));
        } finally {
            setRunning(false);
        }
    };

    const repair = async () => {
        setBusy('repair');
        try {
            const res = await window.api.repairArchive();
            toast.show(t('health.repair_result', { repaired: res.repaired, unmatched: res.unmatched + res.unrepairable }), res.repaired > 0 ? 'success' : 'info');
            await run(result?.mode ?? mode);
        } finally { setBusy(null); }
    };

    const markMissing = async () => {
        if (!result) return;
        setBusy('mark');
        setConfirmMark(false);
        try {
            await window.api.markMissingNotDownloaded(result.missingFiles.map(f => ({ guid: f.guid, feedUrl: f.feedUrl })));
            toast.success(t('health.mark_done', { count: result.missingFiles.length }));
            setResult({ ...result, missing: 0, missingFiles: [], total: result.total - result.missingFiles.length });
        } finally { setBusy(null); }
    };

    const rebaseline = async () => {
        if (!result) return;
        setBusy('rebaseline');
        try {
            const n = await window.api.rebaselineArchive(result.corruptedFiles.map(f => ({ guid: f.guid, feedUrl: f.feedUrl })));
            toast.success(t('health.rebaseline_done', { count: n }));
            setResult({ ...result, corrupted: 0, corruptedFiles: [] });
        } finally { setBusy(null); }
    };

    const percent = progress && progress.total > 0 ? (progress.done / progress.total) * 100 : null;

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                dismissible={!running}
                icon={ShieldCheck}
                title={t('health.title')}
                description={t('health.subtitle')}
                size="lg"
                footer={running
                    ? <Button variant="danger-ghost" icon={Square} onClick={() => void window.api.cancelHealthCheck()}>{t('health.stop')}</Button>
                    : (
                        <>
                            <Button variant="ghost" onClick={onClose}>{t('common.close')}</Button>
                            <Button variant="primary" icon={result ? RotateCcw : Search} onClick={() => void run()}>{result ? t('health.run_again') : t('health.run')}</Button>
                        </>
                    )}
            >
                <div className="space-y-5">
                    <div className="space-y-2">
                        <Segmented
                            label={t('health.mode')}
                            value={mode}
                            onChange={setMode}
                            size="md"
                            options={[
                                { value: 'quick', label: t('health.mode_quick'), disabled: running },
                                { value: 'full', label: t('health.mode_full'), disabled: running },
                            ]}
                        />
                        <p className="text-sm text-fg-3">{mode === 'quick' ? t('health.mode_quick_desc') : t('health.mode_full_desc')}</p>
                    </div>

                    {running && (
                        <div className="space-y-2" aria-live="polite">
                            <div className="flex justify-between text-sm">
                                <span className="text-fg-2">{t('health.running')}</span>
                                <span className="tabular text-fg">{progress ? `${progress.done.toLocaleString(i18n.language)} / ${progress.total.toLocaleString(i18n.language)}` : ''}</span>
                            </div>
                            <ProgressBar value={percent} label={t('health.running')} />
                        </div>
                    )}

                    {result && (
                        <div className="space-y-5">
                            {result.cancelled && <p className="text-sm font-medium text-warning">{t('health.cancelled', { count: result.total })}</p>}
                            <dl className="flex flex-wrap gap-2">
                                <Stat label={t('health.checked')} value={result.total.toLocaleString(i18n.language)} />
                                <Stat label={t('health.present')} value={result.present.toLocaleString(i18n.language)} tone="success" />
                                <Stat label={t('health.missing')} value={result.missing.toLocaleString(i18n.language)} tone={result.missing > 0 ? 'danger' : undefined} />
                                <Stat label={result.mode === 'quick' ? t('health.size_differs') : t('health.corrupted')} value={result.corrupted.toLocaleString(i18n.language)} tone={result.corrupted > 0 ? 'warning' : undefined} />
                                <Stat label={t('health.on_disk')} value={formatBytes(result.totalSizeBytes, i18n.language)} />
                            </dl>

                            {result.missing === 0 && result.corrupted === 0 && !result.cancelled && (
                                <p className="flex items-center gap-2 text-base font-medium text-success"><CheckCircle2 size={18} aria-hidden="true" />{t('health.all_ok')}</p>
                            )}

                            {result.missing > 0 && (
                                <section aria-labelledby="hc-missing" className="space-y-3 rounded-lg border border-line bg-surface-2 p-4">
                                    <h3 id="hc-missing" className="flex items-center gap-2 text-base font-semibold text-fg"><FileQuestion size={16} className="text-danger" aria-hidden="true" />{t('health.missing_title', { count: result.missing })}</h3>
                                    <p className="text-sm text-fg-3">{t('health.missing_desc')}</p>
                                    <FileList files={result.missingFiles} label={t('health.missing_title', { count: result.missing })} />
                                    <div className="flex flex-wrap gap-2">
                                        <Button size="sm" icon={Wrench} loading={busy === 'repair'} disabled={!!busy} onClick={() => void repair()}>{t('health.repair')}</Button>
                                        <Button size="sm" variant="danger-ghost" disabled={!!busy} onClick={() => setConfirmMark(true)}>{t('health.mark_missing')}</Button>
                                    </div>
                                </section>
                            )}

                            {result.corrupted > 0 && (
                                <section aria-labelledby="hc-corrupted" className="space-y-3 rounded-lg border border-line bg-surface-2 p-4">
                                    <h3 id="hc-corrupted" className="flex items-center gap-2 text-base font-semibold text-fg"><FileWarning size={16} className="text-warning" aria-hidden="true" />{result.mode === 'quick' ? t('health.size_title', { count: result.corrupted }) : t('health.corrupted_title', { count: result.corrupted })}</h3>
                                    <p className="text-sm text-fg-3">{t('health.corrupted_desc')}</p>
                                    <FileList files={result.corruptedFiles} label={t('health.corrupted_title', { count: result.corrupted })} />
                                    <Button size="sm" icon={Stamp} loading={busy === 'rebaseline'} disabled={!!busy} onClick={() => void rebaseline()}>{t('health.rebaseline')}</Button>
                                </section>
                            )}
                        </div>
                    )}
                </div>
            </Dialog>

            <ConfirmDialog
                open={confirmMark}
                title={t('health.mark_title')}
                message={t('health.mark_body', { count: result?.missing ?? 0 })}
                confirmLabel={t('health.mark_go')}
                tone="danger"
                onConfirm={() => void markMissing()}
                onCancel={() => setConfirmMark(false)}
            />
        </>
    );
}
