/**
 * v1.5.0 — "What's new" decision (Titan `consume-whats-new` pattern).
 *
 * The old renderer-side localStorage check could not tell a fresh install from
 * a user upgrading across the feature's introduction (1.3.x → 1.4.x): both had
 * no stored version, so neither saw the changelog. The decision now lives in
 * the main process, where the library can vouch for an existing user.
 *
 * @param previous  version stored at the last successful "consume" (null = never stored)
 * @param current   the running app version
 * @param libraryEmpty  true when the DB holds no feeds/archive/history at all
 * @returns true when the in-app changelog should auto-open once
 */
export function evaluateWhatsNew(previous: string | null, current: string, libraryEmpty: boolean): boolean {
    // A user is "existing" if we ever stored a version for them, or — for
    // installs that predate the stored version — if their library has data.
    const existingUser = previous !== null || !libraryEmpty;
    return existingUser && previous !== current;
}
