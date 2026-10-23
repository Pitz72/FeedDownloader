import { useState, type ReactNode } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { cn } from '../../lib/cn';

/**
 * Elenco lungo con lo scorrimento suo (un pannello tra pannelli affiancati, non
 * la pagina): il contenitore che scorre è anche il `role="list"`, Virtuoso
 * disegna solo le righe visibili. Le righe portano `role="listitem"`.
 */
export function VirtualList<T>({ data, label, itemKey, renderItem, className }: {
    data: T[];
    label: string;
    itemKey: (item: T, index: number) => string | number;
    renderItem: (item: T, index: number) => ReactNode;
    className?: string;
}) {
    const [el, setEl] = useState<HTMLDivElement | null>(null);
    return (
        <div ref={setEl} role="list" aria-label={label} className={cn('min-h-0 flex-1 overflow-y-auto', className)}>
            {el && <Virtuoso customScrollParent={el} data={data} computeItemKey={(i, item) => itemKey(item, i)} itemContent={(i, item) => renderItem(item, i)} />}
        </div>
    );
}
