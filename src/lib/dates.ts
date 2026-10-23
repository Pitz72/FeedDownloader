/** Epoch ms of an episode/archive date string, or NaN when unparsable. */
export function timeOf(value?: string): number {
    if (!value) return NaN;
    return new Date(value).getTime();
}

/**
 * M20: unparsable dates would render literally "Invalid Date" — show "—" instead.
 * Empty input → ''.
 */
export function formatDate(value: string | undefined, locale: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }): string {
    if (!value) return '';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString(locale, options);
}

/**
 * L22: parse a date-input value ("YYYY-MM-DD") as a LOCAL date —
 * new Date('YYYY-MM-DD') is midnight UTC, which shifts the day in non-UTC
 * timezones (off-by-one).
 */
export function parseLocalDate(value: string, endOfDay = false): number {
    const [y = 0, m = 1, d = 1] = value.split('-').map(Number);
    return endOfDay
        ? new Date(y, m - 1, d, 23, 59, 59, 999).getTime()
        : new Date(y, m - 1, d).getTime();
}

/** "YYYY-MM-DD" for a local Date (value of an <input type="date">). */
export function toDateInput(d: Date): string {
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export type PeriodPreset = 'all' | '30d' | '90d' | '12m' | 'thisYear' | 'lastYear' | 'custom';

/** v1.6.0 — the from/to inputs a period preset stands for (empty = open-ended). */
export function presetRange(preset: PeriodPreset, now = new Date()): { from: string; to: string } {
    const daysAgo = (n: number) => { const d = new Date(now); d.setDate(d.getDate() - n); return toDateInput(d); };
    switch (preset) {
        case '30d': return { from: daysAgo(30), to: '' };
        case '90d': return { from: daysAgo(90), to: '' };
        case '12m': { const d = new Date(now); d.setFullYear(d.getFullYear() - 1); return { from: toDateInput(d), to: '' }; }
        case 'thisYear': return { from: `${now.getFullYear()}-01-01`, to: '' };
        case 'lastYear': return { from: `${now.getFullYear() - 1}-01-01`, to: `${now.getFullYear() - 1}-12-31` };
        default: return { from: '', to: '' };
    }
}

/** True when `value` falls inside the from/to date inputs (inclusive, local days). */
export function inRange(value: string | undefined, from: string, to: string): boolean {
    if (!from && !to) return true;
    const t = timeOf(value);
    if (Number.isNaN(t)) return false;
    if (from && t < parseLocalDate(from)) return false;
    if (to && t > parseLocalDate(to, true)) return false;
    return true;
}

export function formatEta(seconds: number): string {
    if (seconds >= 3600) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return `${h}h ${m}m`;
    }
    if (seconds >= 60) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}m ${s}s`;
    }
    return `${seconds}s`;
}
