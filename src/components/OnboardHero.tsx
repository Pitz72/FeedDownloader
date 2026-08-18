import { Trans, useTranslation } from 'react-i18next';

const isMac = window.api?.platform === 'darwin';

export function OnboardHero() {
  const { t } = useTranslation();
  const modKey = isMac ? '⌘' : 'Ctrl';

  return (
    <section className="onboard-hero" role="region" aria-label={t('onboarding.title', 'Benvenuto')}>
      <div className="onboard-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1.6" fill="currentColor" />
        </svg>
      </div>
      <p className="kicker">{t('onboarding.kicker', 'Benvenuto in FeedDownloader Pro')}</p>
      <h1>{t('onboarding.title', 'Aggiungi il tuo primo feed per iniziare')}</h1>
      <p>
        {t(
          'onboarding.subtitle',
          "Incolla l'URL di un feed RSS qui sopra, trascinalo dal browser, o importa un file OPML. FeedDownloader scaricherà, organizzerà e catalogerà ogni episodio."
        )}
      </p>

      <div className="onboard-steps">
        <div className="onboard-step">
          <span className="num">1</span>
          <h4>{t('onboarding.step1_title', 'Incolla un URL RSS')}</h4>
          <p>
            {/* L36: single key with embedded <kbd> so word order is free per language */}
            <Trans
              i18nKey="onboarding.step1_body_full"
              defaults="Premi <kbd>{{shortcut}}</kbd> nel campo qui sopra o trascina un link dal browser."
              values={{ shortcut: `${modKey}V` }}
              components={{ kbd: <kbd /> }}
            />
          </p>
        </div>
        <div className="onboard-step">
          <span className="num">2</span>
          <h4>{t('onboarding.step2_title', 'Scegli la cartella')}</h4>
          <p>{t('onboarding.step2_body', 'Imposta la destinazione — anche un NAS o un volume SMB.')}</p>
        </div>
        <div className="onboard-step">
          <span className="num">3</span>
          <h4>{t('onboarding.step3_title', 'Scarica e archivia')}</h4>
          <p>
            {/* L36: single key with embedded <kbd> so word order is free per language */}
            <Trans
              i18nKey="onboarding.step3_body_full"
              defaults="Seleziona gli episodi con <kbd>{{shortcut}}</kbd>+click e scarica in batch."
              values={{ shortcut: 'Shift' }}
              components={{ kbd: <kbd /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
