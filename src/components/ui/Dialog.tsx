import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/cn';
import { IconButton } from './Button';

/**
 * Finestra di dialogo modale, accessibile per costruzione (impianto Titan):
 * - `role="dialog"` (o `alertdialog`), `aria-modal`, titolo e descrizione collegati;
 * - il focus entra nella finestra, ci resta (Tab e Maiusc+Tab girano all'interno) e,
 *   alla chiusura, torna all'elemento che l'aveva aperta;
 * - Esc chiude, se la finestra lo consente — ovunque si trovi il focus;
 * - tutto ciò che sta sotto diventa `inert`: l'app e, se le finestre sono due (una
 *   conferma sopra le impostazioni), anche quella di sotto.
 *
 * `placement="right"` la mostra come pannello laterale a tutta altezza (dettaglio
 * di un episodio) con la stessa semantica.
 */

const FOCUSABLE = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])', 'textarea:not([disabled])', '[tabindex]:not([tabindex="-1"])',
].join(',');

interface StackEntry { id: string; el: () => HTMLElement | null; }
const stack: StackEntry[] = [];

/** Solo la finestra in cima resta interattiva; sotto, tutto inerte. */
function syncInert() {
    const root = document.getElementById('root');
    if (root) {
        if (stack.length > 0) root.setAttribute('inert', '');
        else root.removeAttribute('inert');
    }
    stack.forEach((entry, i) => {
        const el = entry.el();
        if (!el) return;
        if (i < stack.length - 1) el.setAttribute('inert', '');
        else el.removeAttribute('inert');
    });
}

const isTop = (id: string) => stack[stack.length - 1]?.id === id;

/** True while any dialog is open — global shortcuts stand down. */
// eslint-disable-next-line react-refresh/only-export-components
export const isAnyDialogOpen = (): boolean => stack.length > 0;

function focusables(panel: HTMLElement): HTMLElement[] {
    return Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(el => el.offsetParent !== null || el === document.activeElement);
}

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl';

const SIZES: Record<DialogSize, string> = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
};

export interface DialogProps {
    open: boolean;
    onClose: () => void;
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: LucideIcon;
    /** Tono dell'icona nel titolo */
    tone?: 'accent' | 'danger' | 'success' | 'warning';
    size?: DialogSize;
    placement?: 'center' | 'right';
    footer?: React.ReactNode;
    children?: React.ReactNode;
    role?: 'dialog' | 'alertdialog';
    /** false: niente Esc, niente clic fuori, niente ✕ (es. operazione in corso) */
    dismissible?: boolean;
    /** Elemento che riceve il focus all'apertura; altrimenti il primo campo o pulsante */
    initialFocusRef?: React.RefObject<HTMLElement | null>;
    /** Classi aggiuntive per il corpo scorrevole */
    bodyClassName?: string;
    /** Contenuto sopra il corpo, fuori dallo scorrimento (es. le schede) */
    header?: React.ReactNode;
    /** Colonna a sinistra del corpo, con scorrimento suo (es. le schede verticali delle Impostazioni) */
    sidebar?: React.ReactNode;
    /** Classi aggiuntive per il pannello (es. un'altezza fissa, che non cambia da una scheda all'altra) */
    panelClassName?: string;
    /** Solo il contenuto, senza intestazione visibile (la command palette): il titolo resta per i lettori di schermo */
    bare?: boolean;
}

export function Dialog({
    open, onClose, title, description, icon: Icon, tone = 'accent', size = 'md', placement = 'center', footer, children,
    role = 'dialog', dismissible = true, initialFocusRef, bodyClassName, header, sidebar, panelClassName, bare = false,
}: DialogProps) {
    const { t } = useTranslation();
    const id = useId();
    const titleId = `${id}-title`;
    const descId = `${id}-desc`;
    const containerRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const returnFocusRef = useRef<HTMLElement | null>(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;
    const dismissibleRef = useRef(dismissible);
    dismissibleRef.current = dismissible;
    const bodyRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    // Un corpo che scorre ma non contiene nulla di focalizzabile (la guida, il
    // changelog) da tastiera non si potrebbe far scorrere: quando scorre,
    // diventa raggiungibile con Tab.
    const [scrollable, setScrollable] = useState(false);

    useEffect(() => {
        if (!open) return;
        const body = bodyRef.current;
        const content = contentRef.current;
        if (!body || !content) return;
        const check = () => setScrollable(body.scrollHeight > body.clientHeight + 1);
        check();
        const observer = new ResizeObserver(check);
        observer.observe(body);
        observer.observe(content);
        return () => observer.disconnect();
    }, [open]);

    // Apertura: la finestra va in cima alla pila e tutto il resto diventa inerte.
    useLayoutEffect(() => {
        if (!open) return;
        returnFocusRef.current = document.activeElement as HTMLElement | null;
        stack.push({ id, el: () => containerRef.current });
        syncInert();
        return () => {
            const i = stack.findIndex(e => e.id === id);
            if (i >= 0) stack.splice(i, 1);
            syncInert();
            const back = returnFocusRef.current;
            setTimeout(() => { if (back && document.contains(back)) back.focus(); }, 0);
        };
    }, [open, id]);

    // Focus iniziale, a pannello montato. Un timer e non requestAnimationFrame:
    // una finestra in secondo piano rallenta i frame e il focus arrivava tardi.
    useEffect(() => {
        if (!open) return;
        const timer = setTimeout(() => {
            const panel = panelRef.current;
            if (!panel) return;
            const target = initialFocusRef?.current
                ?? panel.querySelector<HTMLElement>('[data-autofocus]')
                ?? panel.querySelector<HTMLElement>(FOCUSABLE.split(',').map(s => `[data-dialog-body] ${s}`).join(','))
                ?? panel.querySelector<HTMLElement>(FOCUSABLE)
                ?? panel;
            target.focus();
        }, 30);
        return () => clearTimeout(timer);
    }, [open, initialFocusRef]);

    // Tastiera a livello di documento: Esc e Tab funzionano anche se il focus è
    // finito fuori dal pannello (un clic su un'area vuota lo riporta al body).
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (!isTop(id)) return;
            if (e.key === 'Escape') {
                if (!dismissibleRef.current) return;
                e.preventDefault();
                e.stopPropagation();
                onCloseRef.current();
                return;
            }
            if (e.key !== 'Tab') return;
            const panel = panelRef.current;
            if (!panel) return;
            const items = focusables(panel);
            if (items.length === 0) { e.preventDefault(); panel.focus(); return; }
            const first = items[0];
            const last = items[items.length - 1];
            const active = document.activeElement as HTMLElement | null;
            if (!active || !panel.contains(active)) {
                e.preventDefault();
                (e.shiftKey ? last : first).focus();
            } else if (e.shiftKey && active === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown, true);
        return () => document.removeEventListener('keydown', onKeyDown, true);
    }, [open, id]);

    const toneClass = tone === 'danger' ? 'bg-danger-soft text-danger'
        : tone === 'success' ? 'bg-success-soft text-success'
        : tone === 'warning' ? 'bg-warning-soft text-warning'
        : 'bg-surface-4 text-accent';

    const right = placement === 'right';

    return createPortal(
        <AnimatePresence>
            {open && (
                <div ref={containerRef} className={cn('fixed inset-0 z-50 flex', right ? 'justify-end' : bare ? 'items-start justify-center p-4 pt-[12vh]' : 'items-center justify-center p-4')}>
                    <motion.div
                        aria-hidden="true"
                        className={cn('absolute inset-0', right ? 'bg-canvas/60' : 'bg-canvas/80 backdrop-blur-sm')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onMouseDown={() => { if (dismissibleRef.current && isTop(id)) onCloseRef.current(); }}
                    />
                    <motion.div
                        ref={panelRef}
                        role={role}
                        aria-modal="true"
                        aria-labelledby={titleId}
                        aria-describedby={description ? descId : undefined}
                        tabIndex={-1}
                        className={cn(
                            'relative flex w-full flex-col overflow-hidden border border-line bg-surface-1 shadow-overlay focus:outline-none',
                            right ? 'h-full max-w-[520px] border-y-0 border-r-0' : cn('max-h-[calc(100vh-2rem)] rounded-xl', SIZES[size]),
                            panelClassName,
                        )}
                        initial={right ? { x: 40, opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                        animate={right ? { x: 0, opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                        exit={right ? { x: 40, opacity: 0, transition: { duration: 0.12 } } : { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        {bare && <h2 id={titleId} className="sr-only">{title}</h2>}
                        {bare && children}
                        {/* div e non header/footer: dentro una finestra di dialogo non servono
                            landmark, e con due finestre aperte risulterebbero duplicati. */}
                        {!bare && <div className="flex shrink-0 items-start gap-3 border-b border-line px-6 pb-4 pt-5">
                            {Icon && (
                                <span className={cn('mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md', toneClass)} aria-hidden="true">
                                    <Icon size={18} />
                                </span>
                            )}
                            <div className="min-w-0 flex-1">
                                <h2 id={titleId} className="text-lg font-semibold text-fg [overflow-wrap:anywhere]">{title}</h2>
                                {description && <p id={descId} className="mt-0.5 text-sm text-fg-3">{description}</p>}
                            </div>
                            {dismissible && (
                                <IconButton icon={X} label={t('common.close')} onClick={() => onCloseRef.current()} className="-mr-2 -mt-1" />
                            )}
                        </div>}

                        {!bare && header}

                        {!bare && (
                            <div className={cn('flex min-h-0 flex-1', !sidebar && 'flex-col')}>
                                {sidebar && <div className="w-56 shrink-0 overflow-y-auto border-r border-line bg-surface-2 p-3">{sidebar}</div>}
                                <div
                                    ref={bodyRef}
                                    data-dialog-body
                                    tabIndex={scrollable ? 0 : undefined}
                                    role={scrollable ? 'region' : undefined}
                                    aria-labelledby={scrollable ? titleId : undefined}
                                    className={cn('min-h-0 min-w-0 flex-1 overflow-y-auto px-6 py-5 focus-visible:outline-offset-[-2px]', bodyClassName)}
                                >
                                    <div ref={contentRef}>{children}</div>
                                </div>
                            </div>
                        )}

                        {!bare && footer && (
                            <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-line bg-surface-2 px-6 py-3.5">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
