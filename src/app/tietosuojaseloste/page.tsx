'use client';

import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

export default function Tietosuojaseloste() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-2">{t('legal.privacyTitle')}</h1>
          <div className="w-24 h-1 bg-[#A64845] mb-8" />

          <p className="text-sm text-gray-500 mb-8">{t('legal.updated')}: {new Date().toLocaleDateString('fi-FI')}</p>

          <div className="space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-light mb-2">1. Rekisterinpitäjä</h2>
              <p>
                Cafe Nöösi, Satakunnankatu 7 B 22, 33100 Tampere, Suomi.<br />
                Y-tunnus: 3548416-4
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">2. Mitä tietoja keräämme</h2>
              <p>Keräämme henkilötietoja ainoastaan yhteydenottolomakkeen kautta:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Nimi</li>
                <li>Sähköpostiosoite</li>
                <li>Viestin sisältö</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Sivusto ei käytä analytiikkaa eikä tarpeettomia evästeitä. Kieli valitaan selaimesi kieliasetusten perusteella ilman evästeitä.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">3. Käsittelyn tarkoitus ja oikeusperuste</h2>
              <p>
                Tietoja käytetään yhteydenottoihin vastaamiseen ja asiakasviestintään. Oikeusperusteena on oikeutettu etumme
                (asiakasviestintä) tai suostumus, jonka annat viestin lähettämällä.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">4. Tietojen säilytys</h2>
              <p>
                Säilytämme yhteydenottolomakkeen kautta saapuneita viestejä enintään 12 kuukautta tai niin kauan kuin asian käsittely sitä edellyttää.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">5. Säännönmukaiset tietolähteet</h2>
              <p>
                Tiedot saadaan suoraan sinulta yhteydenottolomakkeen kautta.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">6. Tietojen luovutukset ja siirrot</h2>
              <p>
                Viestit välitetään sähköpostitse palveluntarjoajan Resend kautta. Resend toimii käsittelijänä ja huolehtii viestien välityksestä. Emme
                myy tai luovuta tietoja kolmansille osapuolille markkinointitarkoituksiin.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">7. Tietoturva</h2>
              <p>
                Käytämme asianmukaisia teknisiä ja organisatorisia keinoja tietojesi suojaamiseksi. Viestit toimitetaan suojatusti palvelimelta
                sähköpostiin.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">8. Rekisteröidyn oikeudet</h2>
              <p>Sinulla on oikeus:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>saada pääsy tietoihisi ja pyytää niistä kopio</li>
                <li>pyytää virheellisten tietojen oikaisua tai poistamista</li>
                <li>vastustaa käsittelyä ja rajoittaa käsittelyä tietyissä tilanteissa</li>
                <li>peruuttaa suostumuksesi siltä osin kuin käsittely perustuu suostumukseen</li>
              </ul>
              <p className="mt-2">Pyynnöt voi lähettää sivuston yhteydenottolomakkeen kautta.</p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">9. Evästeet</h2>
              <p>
                Sivusto ei käytä seurantaevästeitä. Ainoastaan sivuston toiminnallisuuden kannalta välttämättömiä tekniikoita voidaan käyttää
                (esim. kielen valinta ilman evästeitä).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-light mb-2">10. Yhteydenotot</h2>
              <p>
                Kaikki tietosuojaan liittyvät pyynnöt ja kysymykset: sivuston yhteydenottolomakkeen kautta.
              </p>
            </section>

            <div className="pt-8">
              <Link href="/" className="text-sm underline hover:text-[#A64845]">{t('legal.back')}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


