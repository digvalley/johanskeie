import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Om oss | Johan Skeie',
  description:
    'Historien om Johan Skeie – et lokalt entreprenørfirma i Kvam med over 20 års erfaring innen graving, grusing og transport.',
}

export default function WhoAreWePage() {
  return (
    <main>
      {/* ── Page header ──────────────────────────── */}
      <header className='inner-page-header'>
        <div className='page-container'>
          <p className='section-eyebrow' style={{ marginBottom: '1rem' }}>
            Est. 2007 · Kvam kommune
          </p>
          <h1 className='inner-page-h1'>Historien vår</h1>
          <p className='inner-page-lead'>
            Johan Skeie er et lokalt entreprenørfirma bygd på lokal kunnskap,
            ærlig håndverk og lang erfaring i krevende vestlandsterreng.
          </p>
        </div>
      </header>

      {/* ── Timeline ─────────────────────────────── */}
      <section className='page-section'>
        <div className='page-container' style={{ maxWidth: '52rem' }}>
          <div className='timeline'>

            <div className='timeline-item'>
              <p className='timeline-year'>2007</p>
              <div className='timeline-content'>
                <h2>Oppstarten</h2>
                <p>
                  Johan Skeie startet selskapet i 2007 med én gravemaskin og
                  et klart mål: å levere solid grunnarbeid til folk i Kvam på
                  en ærlig og forutsigbar måte. Kvam er et krevende terreng –
                  bratt, variert og til tider uforutsigbart – og det krever
                  lokal kunnskap som bare kommer med år i felten.
                </p>
                <p>
                  De første oppdragene kom fra naboer og bekjente. Hytteeiere
                  trengte hjelp med drenering og atkomstveger. Bønder hadde
                  behov for planeringsarbeid. Sakte men sikkert bygde Johan
                  seg et rykte for å møte opp, gjøre jobben riktig og rydde
                  etter seg.
                </p>
              </div>
            </div>

            <div className='timeline-item'>
              <p className='timeline-year'>2010–2018</p>
              <div className='timeline-content'>
                <h2>Vekst og bredere kapasitet</h2>
                <p>
                  Gjennom 2010-tallet vokste oppdragsmengden jevnt og trutt.
                  Maskinparken ble utvidet og tjenestespekteret bredere.
                  Transport ble en naturlig del av tilbudet – det var stor
                  etterspørsel etter pålitelig levering av masser og
                  materialer, særlig til byggeplasser og hyttefelt som lå
                  vanskelig til.
                </p>
                <p>
                  Samarbeidet med lokale entreprenører og håndverkere ble
                  tettere. Johan Skeie ble en del av det lokale fagmiljøet –
                  en aktør man ringte når prosjektet krevde noen som visste
                  hva de holdt på med, og som møtte opp uten å trenge
                  påminnelse.
                </p>
              </div>
            </div>

            <div className='timeline-item'>
              <p className='timeline-year'>2019–2022</p>
              <div className='timeline-content'>
                <h2>Investering i utstyr og kompetanse</h2>
                <p>
                  Kravene fra markedet ble mer krevende. Prosjektene ble
                  større, og kundene forventet presisjon og profesjonell
                  gjennomføring. Vi investerte i nyere maskiner, forbedret
                  logistikken og styrket teamet med folk som delte samme
                  holdning til arbeidet.
                </p>
                <p>
                  I denne perioden tok vi på oss flere større
                  tomteklargjøringsprosjekter og utvidet til regionale
                  oppdrag. Ryktet for nøyaktighet og ryddig kommunikasjon
                  fulgte oss, og det kom stadig flere forespørsler fra kunder
                  utenfor nærområdet.
                </p>
              </div>
            </div>

            <div className='timeline-item'>
              <p className='timeline-year'>I dag</p>
              <div className='timeline-content'>
                <h2>Solid drift med lokale røtter</h2>
                <p>
                  I dag er Johan Skeie AS et veletablert selskap med moderne
                  maskinpark, erfarne folk og god kapasitet. Vi tar oppdrag av
                  alle størrelser – fra enkle massekjøringer til større
                  grunnarbeidsprosjekter som krever planlegging og
                  koordinering.
                </p>
                <p>
                  Det som ikke har endret seg er holdningen: vi er grundige,
                  vi kommuniserer tydelig, og vi leverer det vi lover. Kvam er
                  hjemstedet vårt, og det merkes i hvordan vi jobber – i
                  terrenget vi kjenner, i naboene vi hjelper og i prosjektene
                  vi er stolte av å ha levert.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact info ─────────────────────────── */}
      <section
        className='page-section'
        style={{ borderTop: '1px solid var(--border)', paddingTop: '3.5rem', paddingBottom: '4rem' }}
      >
        <div className='page-container'>
          <p className='section-eyebrow'>Ta kontakt</p>
          <h2 className='section-heading'>Kontaktinformasjon</h2>
          <div className='contact-detail-grid'>
            <div>
              <p className='contact-detail-label'>Adresse</p>
              <p className='contact-detail-value'>Kvam kommune, Vestland</p>
            </div>
            <div>
              <p className='contact-detail-label'>Telefon</p>
              <p className='contact-detail-value'>
                <a href='tel:+4791545745'>915 45 745</a>
              </p>
            </div>
            <div>
              <p className='contact-detail-label'>E-post</p>
              <p className='contact-detail-value'>
                <a href='mailto:johan@johanskeie.no'>johan@johanskeie.no</a>
              </p>
            </div>
          </div>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a className='button-primary' href='tel:+4791545745'>Ring oss</a>
            <a className='button-secondary' href='/#kontakt'>Send melding</a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer className='site-footer'>
        <div className='page-container'>
          <div className='footer-inner'>
            <div>
              <p className='footer-name'>Johan Skeie</p>
              <p className='footer-detail'>
                Kvam kommune, Vestland<br />
                T: <a href='tel:+4791545745'>915 45 745</a><br />
                E: <a href='mailto:johan@johanskeie.no'>johan@johanskeie.no</a>
              </p>
            </div>
            <p className='footer-credit'>
              Utviklet av{' '}
              <a
                href='https://digvalley.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Digvalley AS
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
