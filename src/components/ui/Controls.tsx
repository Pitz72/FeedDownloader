import React, { forwardRef, useId, useRef } from 'react';
import { Check, Minus, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

/* ───────────────────────────── Switch ───────────────────────────── */

export interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    /** Etichetta visibile accanto all'interruttore */
    label?: React.ReactNode;
    /** Nome accessibile quando l'etichetta visibile non c'è (es. in una riga di elenco) */
    ariaLabel?: string;
    description?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

/**
 * Interruttore `role="switch"`: Spazio e Invio lo commutano, lo stato è annunciato
 * («attivato/disattivato») e si vede anche senza colore, dalla posizione del pomello.
 */
export function Switch({ checked, onChange, label, ariaLabel, description, disabled, className }: SwitchProps) {
    const id = useId();
    const control = (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-label={label ? undefined : ariaLabel}
            aria-labelledby={label ? `${id}-label` : undefined}
            aria-describedby={description ? `${id}-desc` : undefined}
            disabled={disabled}
            onClick={() => onChange(!checked)}
            className={cn(
                'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-50',
                checked ? 'border-primary bg-primary' : 'border-line-strong bg-surface-3',
            )}
        >
            <span
                aria-hidden="true"
                className={cn(
                    'inline-block h-4 w-4 rounded-full shadow transition-transform',
                    checked ? 'translate-x-[22px] bg-on-primary' : 'translate-x-[3px] bg-fg-3',
                )}
            />
        </button>
    );

    if (!label) return <span className={className}>{control}</span>;

    return (
        <div className={cn('flex items-start justify-between gap-4', className)}>
            <div className="min-w-0">
                <span id={`${id}-label`} className="block text-base font-medium text-fg" onClick={() => !disabled && onChange(!checked)}>
                    {label}
                </span>
                {description && <span id={`${id}-desc`} className="mt-0.5 block text-sm text-fg-3">{description}</span>}
            </div>
            {control}
        </div>
    );
}

/* ───────────────────────────── Casella di spunta ───────────────────────────── */

/**
 * Casella `role="checkbox"` con lo stato «misto» (selezione parziale) annunciato
 * come tale. 24×24 px di bersaglio anche se il quadrato visibile è più piccolo.
 */
export function Checkbox({ checked, indeterminate = false, onChange, label, className, disabled }: {
    checked: boolean;
    indeterminate?: boolean;
    onChange: (checked: boolean, e: React.MouseEvent | React.KeyboardEvent) => void;
    label: string;
    className?: string;
    disabled?: boolean;
}) {
    const state = indeterminate ? 'mixed' : checked;
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={state}
            aria-label={label}
            title={label}
            disabled={disabled}
            onClick={(e) => { e.stopPropagation(); onChange(!checked, e); }}
            onKeyDown={(e) => { if (e.key === ' ') { e.preventDefault(); e.stopPropagation(); onChange(!checked, e); } }}
            className={cn('group inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md disabled:opacity-50', className)}
        >
            <span
                aria-hidden="true"
                className={cn(
                    'flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border-2 transition-colors',
                    checked || indeterminate ? 'border-primary bg-primary text-on-primary' : 'border-line-strong bg-surface-2 group-hover:border-fg-3',
                )}
            >
                {indeterminate ? <Minus size={12} strokeWidth={3} /> : checked ? <Check size={12} strokeWidth={3} /> : null}
            </span>
        </button>
    );
}

/* ───────────────────────────── Campi ───────────────────────────── */

// eslint-disable-next-line react-refresh/only-export-components
export const INPUT_CLASS = cn(
    'w-full rounded-md border border-line-strong bg-surface-2 px-3 text-base text-fg transition-colors',
    'placeholder:text-fg-3 hover:border-fg-3 disabled:cursor-not-allowed disabled:opacity-60',
    'aria-[invalid=true]:border-danger',
);

interface FieldShellProps {
    id: string;
    label: React.ReactNode;
    hint?: React.ReactNode;
    error?: React.ReactNode;
    required?: boolean;
    className?: string;
    /** Etichetta solo per i lettori di schermo (es. la casella di ricerca con la lente) */
    hideLabel?: boolean;
    children: React.ReactNode;
}

function FieldShell({ id, label, hint, error, required, className, hideLabel, children }: FieldShellProps) {
    return (
        <div className={cn('flex flex-col gap-1.5', className)}>
            <label htmlFor={id} className={cn('text-sm font-medium text-fg-2', hideLabel && 'sr-only')}>
                {label}
                {required && <span className="text-danger" aria-hidden="true"> *</span>}
            </label>
            {children}
            {hint && !error && <p id={`${id}-hint`} className="text-sm text-fg-3">{hint}</p>}
            {error && <p id={`${id}-error`} role="alert" className="text-sm font-medium text-danger">{error}</p>}
        </div>
    );
}

function describedBy(id: string, hint?: React.ReactNode, error?: React.ReactNode) {
    return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
    label: React.ReactNode;
    hint?: React.ReactNode;
    error?: React.ReactNode;
    hideLabel?: boolean;
    containerClassName?: string;
    /** Elemento dentro il campo, a destra (es. pulsante «cancella») */
    trailing?: React.ReactNode;
    leadingIcon?: LucideIcon;
    /** id esplicito (scorciatoie da tastiera che devono trovare il campo) */
    inputId?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
    { label, hint, error, hideLabel, containerClassName, className, trailing, leadingIcon: Leading, required, inputId, ...rest },
    ref,
) {
    const autoId = useId();
    const id = inputId ?? autoId;
    return (
        <FieldShell id={id} label={label} hint={hint} error={error} required={required} hideLabel={hideLabel} className={containerClassName}>
            <div className="relative">
                {Leading && <Leading size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-3" />}
                <input
                    ref={ref}
                    id={id}
                    required={required}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={describedBy(id, hint, error)}
                    className={cn(INPUT_CLASS, 'h-9', Leading && 'pl-9', trailing && 'pr-10', className)}
                    {...rest}
                />
                {trailing && <div className="absolute right-0.5 top-1/2 -translate-y-1/2">{trailing}</div>}
            </div>
        </FieldShell>
    );
});

export interface SelectFieldProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
    label: React.ReactNode;
    hint?: React.ReactNode;
    error?: React.ReactNode;
    hideLabel?: boolean;
    containerClassName?: string;
}

export function SelectField({ label, hint, error, hideLabel, containerClassName, className, children, ...rest }: SelectFieldProps) {
    const id = useId();
    return (
        <FieldShell id={id} label={label} hint={hint} error={error} hideLabel={hideLabel} className={containerClassName}>
            <select
                id={id}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy(id, hint, error)}
                className={cn(INPUT_CLASS, 'h-9 pr-8', className)}
                {...rest}
            >
                {children}
            </select>
        </FieldShell>
    );
}

/* ───────────────────────────── Schede ───────────────────────────── */

export interface TabItem<T extends string> {
    id: T;
    label: string;
    icon?: LucideIcon;
    /** Numero accanto all'etichetta (es. elementi in coda) */
    count?: number;
}

/**
 * Schede WAI-ARIA: `tablist`/`tab`/`tabpanel`, Home e Fine, e le frecce
 * dell'orientamento — sinistra/destra in orizzontale, su/giù in verticale
 * (`aria-orientation`; la colonna di schede delle Impostazioni).
 * Solo la scheda attiva è raggiungibile con Tab (roving tabindex).
 */
export function Tabs<T extends string>({ items, value, onChange, label, idBase, className, orientation = 'horizontal', autoFocus = false }: {
    items: TabItem<T>[];
    value: T;
    onChange: (id: T) => void;
    label: string;
    idBase: string;
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    /** Dentro una finestra di dialogo: la scheda attiva riceve il focus all'apertura */
    autoFocus?: boolean;
}) {
    const refs = useRef<Record<string, HTMLButtonElement | null>>({});
    const vertical = orientation === 'vertical';
    const [prevKey, nextKey] = vertical ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];

    const move = (delta: number | 'first' | 'last') => {
        const index = items.findIndex(i => i.id === value);
        const next = delta === 'first' ? 0 : delta === 'last' ? items.length - 1 : (index + delta + items.length) % items.length;
        onChange(items[next].id);
        refs.current[items[next].id]?.focus();
    };

    return (
        <div
            role="tablist"
            aria-label={label}
            aria-orientation={orientation}
            className={cn(vertical ? 'flex flex-col gap-0.5' : 'flex gap-1 border-b border-line', className)}
            onKeyDown={(e) => {
                if (e.key === nextKey) { e.preventDefault(); move(1); }
                else if (e.key === prevKey) { e.preventDefault(); move(-1); }
                else if (e.key === 'Home') { e.preventDefault(); move('first'); }
                else if (e.key === 'End') { e.preventDefault(); move('last'); }
            }}
        >
            {items.map(({ id, label: itemLabel, icon: Icon, count }) => {
                const selected = id === value;
                return (
                    <button
                        key={id}
                        ref={el => { refs.current[id] = el; }}
                        type="button"
                        role="tab"
                        id={`${idBase}-tab-${id}`}
                        aria-selected={selected}
                        aria-controls={`${idBase}-panel-${id}`}
                        tabIndex={selected ? 0 : -1}
                        data-autofocus={autoFocus && selected ? true : undefined}
                        onClick={() => onChange(id)}
                        className={cn(
                            'items-center gap-2 text-base font-medium transition-colors',
                            vertical
                                ? cn('relative flex h-10 w-full rounded-md px-3 text-left', selected ? 'bg-surface-4 text-fg' : 'text-fg-2 hover:bg-surface-3 hover:text-fg')
                                : cn('-mb-px inline-flex h-10 border-b-2 px-3', selected ? 'border-accent text-fg' : 'border-transparent text-fg-3 hover:text-fg'),
                        )}
                    >
                        {vertical && selected && <span aria-hidden="true" className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent" />}
                        {Icon && <Icon size={16} aria-hidden="true" className={vertical && selected ? 'text-accent' : undefined} />}
                        <span className={vertical ? 'min-w-0 flex-1 truncate' : undefined}>{itemLabel}</span>
                        {count !== undefined && (
                            <span className={cn('tabular rounded-full px-1.5 text-xs', selected ? 'bg-surface-4 text-accent-strong' : 'bg-surface-3 text-fg-3')}>{count}</span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}

export function TabPanel({ idBase, id, children, className }: { idBase: string; id: string; children: React.ReactNode; className?: string }) {
    return (
        <div role="tabpanel" id={`${idBase}-panel-${id}`} aria-labelledby={`${idBase}-tab-${id}`} tabIndex={0} className={cn('focus-visible:outline-offset-4', className)}>
            {children}
        </div>
    );
}

/* ─────────────────────── Gruppo di pulsanti alternativi ─────────────────────── */

/**
 * Due o tre viste alternative (Tutti / Da scaricare / Archiviati). Pulsanti con
 * `aria-pressed` dentro un gruppo con nome: semplice per la tastiera e per i lettori.
 */
export function Segmented<T extends string>({ options, value, onChange, label, size = 'sm' }: {
    options: Array<{ value: T; label: string; count?: number; disabled?: boolean }>;
    value: T;
    onChange: (value: T) => void;
    label: string;
    size?: 'sm' | 'md';
}) {
    return (
        <div role="group" aria-label={label} className="inline-flex shrink-0 rounded-md border border-line bg-surface-2 p-0.5">
            {options.map(opt => {
                const active = opt.value === value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        aria-pressed={active}
                        disabled={opt.disabled}
                        onClick={() => onChange(opt.value)}
                        className={cn(
                            'inline-flex items-center gap-1.5 rounded-sm px-2.5 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50',
                            size === 'sm' ? 'h-7 text-sm' : 'h-8 text-base',
                            active ? 'bg-surface-4 text-accent-strong shadow-raised' : 'text-fg-3 hover:text-fg',
                        )}
                    >
                        {opt.label}
                        {opt.count !== undefined && <span className="tabular text-xs opacity-90">{opt.count}</span>}
                    </button>
                );
            })}
        </div>
    );
}

/* ───────────────────────────── Distintivi ───────────────────────────── */

export type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

const BADGE_TONES: Record<BadgeTone, string> = {
    neutral: 'text-fg-2',
    accent: 'text-accent',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-danger',
};

export function Badge({ tone = 'neutral', icon: Icon, children, className, title }: {
    tone?: BadgeTone;
    icon?: LucideIcon;
    children: React.ReactNode;
    className?: string;
    title?: string;
}) {
    return (
        <span title={title} className={cn('inline-flex h-6 shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-line bg-surface-3 px-2 text-xs font-medium', BADGE_TONES[tone], className)}>
            {Icon && <Icon size={12} aria-hidden="true" />}
            {children}
        </span>
    );
}

/** Pallino di stato: decorativo. Lo stato va sempre detto anche a parole accanto. */
export function StatusDot({ tone, pulse = false, className }: { tone: 'success' | 'danger' | 'neutral' | 'warning' | 'accent'; pulse?: boolean; className?: string }) {
    const color = tone === 'success' ? 'bg-success' : tone === 'danger' ? 'bg-danger' : tone === 'warning' ? 'bg-warning' : tone === 'accent' ? 'bg-accent' : 'bg-fg-3';
    return <span aria-hidden="true" className={cn('inline-block h-2 w-2 shrink-0 rounded-full', color, pulse && 'animate-pulse-dot', className)} />;
}

/* ───────────────────────────── Avanzamento ───────────────────────────── */

/**
 * Barra di avanzamento `role="progressbar"`. `value` null = indeterminata
 * (il server non dichiara la dimensione): una striscia che scorre, con il
 * testo che dice quanto è arrivato.
 */
export function ProgressBar({ value, label, tone = 'primary', className, size = 'md' }: {
    value: number | null;
    label: string;
    tone?: 'primary' | 'success' | 'warning';
    className?: string;
    size?: 'sm' | 'md';
}) {
    const fill = tone === 'success' ? 'bg-success' : tone === 'warning' ? 'bg-warning' : 'bg-accent';
    return (
        <div
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value === null ? undefined : Math.round(value)}
            className={cn('relative w-full overflow-hidden rounded-full bg-surface-4', size === 'sm' ? 'h-1.5' : 'h-2', className)}
        >
            {value === null
                ? <span className={cn('absolute inset-y-0 left-0 w-2/5 rounded-full animate-indeterminate', fill)} />
                : <span className={cn('absolute inset-y-0 left-0 rounded-full transition-[width] duration-300', fill)} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />}
        </div>
    );
}

/* ───────────────────────────── Cifre ───────────────────────────── */

/** Riquadro numerico delle intestazioni (dentro un <dl>). Sotto i 1280 px è più basso: l'intestazione resta compatta. */
export function Stat({ label, value, hint, tone }: { label: string; value: React.ReactNode; hint?: string; tone?: 'accent' | 'success' | 'warning' | 'danger' }) {
    const color = tone === 'accent' ? 'text-accent' : tone === 'success' ? 'text-success' : tone === 'warning' ? 'text-warning' : tone === 'danger' ? 'text-danger' : 'text-fg';
    return (
        <div className="min-w-[104px] rounded-md border border-line bg-surface-2 px-4 py-2.5 max-xl:min-w-[80px] max-xl:px-3 max-xl:py-1.5" title={hint}>
            <dt className="text-xs font-medium text-fg-3">{label}</dt>
            <dd className={cn('tabular text-2xl font-semibold leading-8 max-xl:text-lg max-xl:leading-6', color)}>{value}</dd>
        </div>
    );
}

/* ───────────────────────────── Sezioni e stati vuoti ───────────────────────────── */

/** Riquadro di una sezione (impostazioni, verifiche): titolo con icona, testo, contenuto. */
export function Section({ icon: Icon, title, text, children, className, tone = 'accent' }: {
    icon: LucideIcon;
    title: string;
    text?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    tone?: 'accent' | 'danger' | 'warning';
}) {
    const iconColor = tone === 'danger' ? 'text-danger' : tone === 'warning' ? 'text-warning' : 'text-accent';
    return (
        <section className={cn('rounded-lg border border-line bg-surface-2 p-4', className)}>
            <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
                <Icon size={16} className={iconColor} aria-hidden="true" />
                {title}
            </h3>
            {text && <p className="mt-1 text-sm text-fg-3">{text}</p>}
            {children && <div className="mt-4">{children}</div>}
        </section>
    );
}

export function EmptyState({ icon: Icon, title, text, children }: { icon: LucideIcon; title: string; text?: React.ReactNode; children?: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-3 text-accent" aria-hidden="true">
                <Icon size={26} />
            </span>
            <h2 className="text-xl font-semibold text-fg">{title}</h2>
            {text && <p className="mt-2 max-w-md text-base text-fg-3">{text}</p>}
            {children && <div className="mt-6 flex flex-wrap items-center justify-center gap-2">{children}</div>}
        </div>
    );
}

/** Tasto da tastiera visualizzato (scorciatoie). */
export function Kbd({ children }: { children: React.ReactNode }) {
    return <kbd className="rounded border border-line bg-surface-3 px-1.5 py-px font-mono text-xs text-fg-2">{children}</kbd>;
}
