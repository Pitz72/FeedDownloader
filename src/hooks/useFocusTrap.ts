import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR = [
    'a[href]',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
].join(',');

/**
 * Accessible modal focus management (v1.4.1): while `active`, Tab/Shift+Tab cycle
 * only within the returned container, and when the modal closes focus returns to
 * whatever element opened it. Attach the returned ref to the dialog container.
 *
 * v1.3.14 shipped only the minimum (ESC to close, aria-modal, autofocus); this
 * completes the pattern with a real focus trap and focus restoration.
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>(active: boolean) {
    const containerRef = useRef<T>(null);

    useEffect(() => {
        if (!active) return;
        const container = containerRef.current;
        if (!container) return;

        const previouslyFocused = document.activeElement as HTMLElement | null;

        const getFocusable = (): HTMLElement[] =>
            Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
                // visible only — getClientRects() is empty for display:none/detached nodes
                .filter((el) => el.getClientRects().length > 0);

        // Move focus into the dialog: an explicitly [autofocus] control, else the
        // first focusable, else the container itself (needs tabIndex={-1}).
        const focusable = getFocusable();
        const initial = focusable.find((el) => el.hasAttribute('autofocus')) ?? focusable[0];
        if (initial) initial.focus();
        else container.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;
            const items = getFocusable();
            if (items.length === 0) { e.preventDefault(); return; }
            const first = items[0];
            const last = items[items.length - 1];
            const activeEl = document.activeElement as HTMLElement | null;

            if (e.shiftKey) {
                if (activeEl === first || !container.contains(activeEl)) {
                    e.preventDefault();
                    last.focus();
                }
            } else if (activeEl === last || !container.contains(activeEl)) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown, true);

        return () => {
            document.removeEventListener('keydown', onKeyDown, true);
            // Return focus to the invoker if it's still in the document.
            if (previouslyFocused && typeof previouslyFocused.focus === 'function' && document.contains(previouslyFocused)) {
                previouslyFocused.focus();
            }
        };
    }, [active]);

    return containerRef;
}
