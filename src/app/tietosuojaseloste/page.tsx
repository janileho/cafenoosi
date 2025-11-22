'use client';

import Link from 'next/link';
import { useTranslation } from '@/contexts/TranslationContext';

const sectionsFi = [
  {
    title: '1. Rekisterinpitäjä',
    paragraphs: [
      'Cafe Nöösi, Satakunnankatu 7 B 22, 33100 Tampere, Suomi.',
      'Y-tunnus: 3548416-4',
    ],
  },
  {
    title: '2. Mitä tietoja keräämme',
    paragraphs: [
      'Keräämme henkilötietoja ainoastaan yhteydenottolomakkeen kautta:',
    ],
    list: ['Nimi', 'Sähköpostiosoite', 'Viestin sisältö'],
    footnote:
      'Sivusto ei käytä analytiikkaa eikä tarpeettomia evästeitä. Kieli valitaan selaimesi kieliasetusten perusteella ilman evästeitä.',
  },
  {
    title: '3. Käsittelyn tarkoitus ja oikeusperuste',
    paragraphs: [
      'Tietoja käytetään yhteydenottoihin vastaamiseen ja asiakasviestintään. Oikeusperusteena on oikeutettu etumme (asiakasviestintä) tai suostumus, jonka annat viestin lähettämällä.',
    ],
  },
  {
    title: '4. Tietojen säilytys',
    paragraphs: [
      'Säilytämme yhteydenottolomakkeen kautta saapuneita viestejä enintään 12 kuukautta tai niin kauan kuin asian käsittely sitä edellyttää.',
    ],
  },
  {
    title: '5. Säännönmukaiset tietolähteet',
    paragraphs: ['Tiedot saadaan suoraan sinulta yhteydenottolomakkeen kautta.'],
  },
  {
    title: '6. Tietojen luovutukset ja siirrot',
    paragraphs: [
      'Viestit välitetään sähköpostitse palveluntarjoajan Resend kautta. Resend toimii käsittelijänä ja huolehtii viestien välityksestä. Emme myy tai luovuta tietoja kolmansille osapuolille markkinointitarkoituksiin.',
    ],
  },
  {
    title: '7. Tietoturva',
    paragraphs: [
      'Käytämme asianmukaisia teknisiä ja organisatorisia keinoja tietojesi suojaamiseksi. Viestit toimitetaan suojatusti palvelimelta sähköpostiin.',
    ],
  },
  {
    title: '8. Rekisteröidyn oikeudet',
    paragraphs: ['Sinulla on oikeus:'],
    list: [
      'saada pääsy tietoihisi ja pyytää niistä kopio',
      'pyytää virheellisten tietojen oikaisua tai poistamista',
      'vastustaa käsittelyä ja rajoittaa käsittelyä tietyissä tilanteissa',
      'peruuttaa suostumuksesi siltä osin kuin käsittely perustuu suostumukseen',
    ],
    footnote: 'Pyynnöt voi lähettää sivuston yhteydenottolomakkeen kautta.',
  },
  {
    title: '9. Evästeet',
    paragraphs: [
      'Sivusto ei käytä seurantaevästeitä. Ainoastaan sivuston toiminnallisuuden kannalta välttämättömiä tekniikoita voidaan käyttää (esim. kielen valinta ilman evästeitä).',
    ],
  },
  {
    title: '10. Yhteydenotot',
    paragraphs: [
      'Kaikki tietosuojaan liittyvät pyynnöt ja kysymykset: sivuston yhteydenottolomakkeen kautta.',
    ],
  },
];

const sectionsEn = [
  {
    title: '1. Data Controller',
    paragraphs: [
      'Cafe Nöösi, Satakunnankatu 7 B 22, 33100 Tampere, Finland.',
      'Business ID: 3548416-4',
    ],
  },
  {
    title: '2. Personal Data We Collect',
    paragraphs: ['We only collect personal data submitted via the contact form:'],
    list: ['Name', 'Email address', 'Message content'],
    footnote:
      'This site does not use analytics or unnecessary cookies. The language selection follows your browser settings without using cookies.',
  },
  {
    title: '3. Purpose and Legal Basis',
    paragraphs: [
      'We use the information to respond to enquiries and customer communication. The legal basis is our legitimate interest (customer communication) or consent provided when you send the message.',
    ],
  },
  {
    title: '4. Data Retention',
    paragraphs: [
      'Messages submitted through the contact form are retained for up to 12 months or as long as required to handle the matter.',
    ],
  },
  {
    title: '5. Regular Sources of Data',
    paragraphs: ['The information is provided directly by you through the contact form.'],
  },
  {
    title: '6. Data Transfers and Disclosures',
    paragraphs: [
      'Messages are relayed via the email service Resend. Resend acts as the processor and ensures the secure delivery of messages. We do not sell or disclose data to third parties for marketing purposes.',
    ],
  },
  {
    title: '7. Data Security',
    paragraphs: [
      'We apply appropriate technical and organisational measures to protect your information. Messages are transmitted securely from the site to email.',
    ],
  },
  {
    title: '8. Your Rights',
    paragraphs: ['You have the right to:'],
    list: [
      'access your data and request a copy',
      'request rectification or erasure of inaccurate data',
      'object to processing and request restriction in certain situations',
      'withdraw your consent where processing is based on consent',
    ],
    footnote: 'You can send requests via the site’s contact form.',
  },
  {
    title: '9. Cookies',
    paragraphs: [
      'This site does not use tracking cookies. Only technologies necessary for site functionality may be used (e.g. language selection without cookies).',
    ],
  },
  {
    title: '10. Contact',
    paragraphs: [
      'All privacy-related enquiries and requests can be sent via the site’s contact form.',
    ],
  },
];

export default function Tietosuojaseloste() {
  const { t, language } = useTranslation();
  const isEnglish = language === 'en';

  const sections = isEnglish ? sectionsEn : sectionsFi;
  const updatedDate = new Date().toLocaleDateString(isEnglish ? 'en-GB' : 'fi-FI');

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-2">{t('legal.privacyTitle')}</h1>
          <div className="w-24 h-1 bg-[#A64845] mb-8" />

          <p className="text-sm text-gray-500 mb-8">
            {t('legal.updated')}: {updatedDate}
          </p>

          <div className="space-y-6 leading-relaxed">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-light mb-2">{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-2' : undefined}>
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.footnote && (
                  <p className="mt-3 text-sm text-gray-600">{section.footnote}</p>
                )}
              </section>
            ))}

            <div className="pt-8">
              <Link href="/" className="text-sm underline hover:text-[#A64845]">
                {t('legal.back')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}