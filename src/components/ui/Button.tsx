import React, { forwardRef } from 'react';
import { Loader2, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'danger-ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANTS: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-on-primary shadow-raised hover:bg-primary-hover active:bg-primary-pressed',
    secondary: 'bg-surface-3 text-fg border border-line hover:bg-surface-4 hover:border-line-strong',
    ghost: 'text-fg-2 hover:bg-surface-3 hover:text-fg',
    danger: 'bg-danger-fill text-on-danger shadow-raised hover:bg-danger-fill-hover',
    'danger-ghost': 'text-danger hover:bg-danger-soft',
};

// Altezze minime: 32px per i controlli compatti, ben oltre i 24px di WCAG 2.5.8.
const SIZES: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-sm gap-1.5',
    md: 'h-9 px-4 text-base gap-2',
    lg: 'h-11 px-5 text-md gap-2',
};

const ICON_SIZES: Record<ButtonSize, number> = { sm: 14, md: 16, lg: 18 };

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: LucideIcon;
    iconRight?: LucideIcon;
    /** Mostra un indicatore di attività e disabilita il pulsante */
    loading?: boolean;
}

/** Pulsante del design system (stesso impianto di Titan). */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { variant = 'secondary', size = 'md', icon: Icon, iconRight: IconRight, loading = false, className, children, type = 'button', disabled, ...rest },
    ref,
) {
    const iconSize = ICON_SIZES[size];
    return (
        <button
            ref={ref}
            type={type}
            disabled={disabled || loading}
            aria-busy={loading || undefined}
            className={cn(
                'inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors',
                'disabled:cursor-not-allowed disabled:opacity-50',
                VARIANTS[variant],
                SIZES[size],
                className,
            )}
            {...rest}
        >
            {loading
                ? <Loader2 size={iconSize} className="animate-spin" aria-hidden="true" />
                : Icon && <Icon size={iconSize} aria-hidden="true" />}
            {children}
            {IconRight && !loading && <IconRight size={iconSize} aria-hidden="true" />}
        </button>
    );
});

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    icon: LucideIcon;
    /** Nome accessibile e suggerimento al passaggio: obbligatorio, il pulsante non ha testo */
    label: string;
    variant?: 'ghost' | 'secondary' | 'danger-ghost' | 'accent';
    size?: 'sm' | 'md';
    /** Icona animata (es. un'attività in corso) */
    spin?: boolean;
}

/** Pulsante con sola icona. L'etichetta diventa `aria-label` e `title`. */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
    { icon: Icon, label, variant = 'ghost', size = 'md', spin = false, className, type = 'button', ...rest },
    ref,
) {
    return (
        <button
            ref={ref}
            type={type}
            aria-label={label}
            title={label}
            className={cn(
                'inline-flex shrink-0 items-center justify-center rounded-md transition-colors disabled:cursor-not-allowed disabled:opacity-50',
                size === 'sm' ? 'h-8 w-8' : 'h-9 w-9',
                variant === 'ghost' && 'text-fg-3 hover:bg-surface-3 hover:text-fg',
                variant === 'secondary' && 'border border-line bg-surface-3 text-fg-2 hover:bg-surface-4 hover:text-fg',
                variant === 'danger-ghost' && 'text-fg-3 hover:bg-danger-soft hover:text-danger',
                variant === 'accent' && 'text-accent hover:bg-surface-4 hover:text-accent-strong',
                className,
            )}
            {...rest}
        >
            <Icon size={size === 'sm' ? 15 : 17} aria-hidden="true" className={spin ? 'animate-spin' : undefined} />
        </button>
    );
});
