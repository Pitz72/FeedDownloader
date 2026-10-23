import { useTranslation } from 'react-i18next';
import GB from 'country-flag-icons/react/3x2/GB';
import IT from 'country-flag-icons/react/3x2/IT';
import { cn } from '../lib/cn';

const LANGUAGES = [
    { id: 'it', label: 'Italiano', Flag: IT },
    { id: 'en', label: 'English', Flag: GB },
] as const;

/** Lingua dell'interfaccia: due schede con bandiera (SVG, mai emoji: Windows mostra le sigle). */
export function LanguageChoice({ name }: { name: string }) {
    const { t, i18n } = useTranslation();
    const current = (i18n.language || 'en').split('-')[0];
    return (
        <fieldset>
            <legend className="sr-only">{t('settings.language')}</legend>
            <div className="grid grid-cols-2 gap-3">
                {LANGUAGES.map(({ id, label, Flag }) => {
                    const checked = current === id;
                    return (
                        <label
                            key={id}
                            className={cn(
                                'flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors',
                                'has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus',
                                checked ? 'border-accent bg-surface-4' : 'border-line bg-surface-2 hover:border-line-strong',
                            )}
                        >
                            <input type="radio" name={name} value={id} checked={checked} onChange={() => void i18n.changeLanguage(id)} className="sr-only" />
                            <span className="h-5 w-7 shrink-0 overflow-hidden rounded-sm" aria-hidden="true"><Flag style={{ width: '100%', height: '100%', display: 'block' }} /></span>
                            <span className={cn('text-base font-medium', checked ? 'text-fg' : 'text-fg-2')} lang={id}>{label}</span>
                            <span aria-hidden="true" className={cn('ml-auto flex h-4 w-4 items-center justify-center rounded-full border-2', checked ? 'border-accent' : 'border-line-strong')}>
                                {checked && <span className="h-2 w-2 rounded-full bg-accent" />}
                            </span>
                        </label>
                    );
                })}
            </div>
        </fieldset>
    );
}
