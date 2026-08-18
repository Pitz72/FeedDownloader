import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import { useStore, AppState } from '../store/useStore';

/**
 * N1 — persistent in-app update indicator.
 *
 * Before v1.4.0 the only place an update surfaced was Settings → Updates, so
 * users never noticed one was ready. This lives in the topbar and is always
 * visible while an update is available / downloading / ready, with a direct
 * "restart & install" action — no dependency on the (unreliable at boot) OS
 * notification.
 */
export const UpdateBanner: React.FC = () => {
    const { t } = useTranslation();
    const updateStatus = useStore((s: AppState) => s.updateStatus);
    const dismissed = useStore((s: AppState) => s.updateBannerDismissed);
    const setDismissed = useStore((s: AppState) => s.setUpdateBannerDismissed);

    const type = updateStatus.type;
    const actionable = type === 'available' || type === 'downloading' || type === 'ready';
    if (!actionable || dismissed) return null;

    const ready = type === 'ready';

    const label =
        type === 'available' ? t('banner.update_available', 'Aggiornamento disponibile')
        : type === 'downloading' ? t('banner.update_downloading', 'Scaricamento aggiornamento… {{percent}}%', { percent: updateStatus.percent })
        : t('banner.update_ready', 'Aggiornamento pronto');

    return (
        <div
            className="update-indicator"
            role="status"
            aria-live="polite"
            style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-pill, 999px)',
                background: ready ? 'rgba(75,142,255,0.16)' : 'var(--surf-2, rgba(255,255,255,0.05))',
                border: `1px solid ${ready ? 'rgba(75,142,255,0.4)' : 'rgba(65,71,85,0.3)'}`,
                fontSize: '0.75rem', fontFamily: 'var(--font-label)',
                color: ready ? 'var(--azure, #4b8eff)' : 'var(--fg-2, inherit)',
                whiteSpace: 'nowrap',
            }}
        >
            <Icon
                name={ready ? 'download_done' : type === 'downloading' ? 'downloading' : 'new_releases'}
                size={15}
                className={type === 'downloading' ? 'animate-pulse' : ''}
                style={{ color: 'var(--azure, #4b8eff)' }}
            />
            <span>{label}</span>
            {type === 'available' && (
                <button
                    type="button"
                    onClick={() => window.api.downloadUpdate()}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                        padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-pill, 999px)',
                        background: 'var(--azure, #4b8eff)', color: '#fff',
                        fontFamily: 'var(--font-label)', fontSize: '0.72rem', fontWeight: 600,
                        border: 'none', cursor: 'pointer',
                    }}
                >
                    <Icon name="download" size={14} />
                    {t('banner.update_download', 'Scarica')}
                </button>
            )}
            {ready && (
                <button
                    type="button"
                    onClick={() => window.api.installUpdate()}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                        padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-pill, 999px)',
                        background: 'var(--azure, #4b8eff)', color: '#fff',
                        fontFamily: 'var(--font-label)', fontSize: '0.72rem', fontWeight: 600,
                        border: 'none', cursor: 'pointer',
                    }}
                >
                    <Icon name="restart_alt" size={14} />
                    {t('banner.update_install', 'Riavvia e installa')}
                </button>
            )}
            <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label={t('common.close', 'Chiudi')}
                title={t('common.close', 'Chiudi')}
                style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 18, height: 18, borderRadius: '50%', border: 'none',
                    background: 'transparent', color: 'inherit', cursor: 'pointer', opacity: 0.6,
                }}
            >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    );
};
