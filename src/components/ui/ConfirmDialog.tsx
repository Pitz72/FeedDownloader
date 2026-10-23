import React, { useRef } from 'react';
import { AlertTriangle, HelpCircle, Trash2, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Dialog } from './Dialog';
import { Button } from './Button';

export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    /** danger: azione distruttiva (pulsante rosso, focus su «Annulla») */
    tone?: 'danger' | 'warning' | 'info';
    icon?: LucideIcon;
    busy?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    /** Azione alternativa a sinistra della conferma (es. «Solo i nuovi») */
    secondaryAction?: { label: string; onClick: () => void };
}

/**
 * Conferma (standard Titan). Nelle azioni distruttive il focus parte da
 * «Annulla», così un Invio di troppo non cancella niente.
 */
export function ConfirmDialog({ open, title, message, confirmLabel, cancelLabel, tone = 'warning', icon, busy, onConfirm, onCancel, secondaryAction }: ConfirmDialogProps) {
    const { t } = useTranslation();
    const cancelRef = useRef<HTMLButtonElement>(null);
    const confirmRef = useRef<HTMLButtonElement>(null);
    const Icon = icon ?? (tone === 'danger' ? Trash2 : tone === 'warning' ? AlertTriangle : HelpCircle);
    return (
        <Dialog
            open={open}
            onClose={onCancel}
            title={title}
            icon={Icon}
            tone={tone === 'danger' ? 'danger' : tone === 'warning' ? 'warning' : 'accent'}
            size="sm"
            role="alertdialog"
            dismissible={!busy}
            initialFocusRef={tone === 'danger' ? cancelRef : confirmRef}
            footer={
                <>
                    <Button ref={cancelRef} variant="ghost" onClick={onCancel} disabled={busy}>{cancelLabel ?? t('common.cancel')}</Button>
                    {secondaryAction && <Button variant="secondary" onClick={secondaryAction.onClick} disabled={busy}>{secondaryAction.label}</Button>}
                    <Button ref={confirmRef} variant={tone === 'danger' ? 'danger' : 'primary'} onClick={onConfirm} loading={busy}>
                        {confirmLabel ?? t('common.confirm')}
                    </Button>
                </>
            }
        >
            <div className="text-base text-fg-2 [overflow-wrap:anywhere]">{message}</div>
        </Dialog>
    );
}
