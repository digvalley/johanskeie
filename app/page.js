import Link from 'next/link'
import { sendContact } from './actions/send-contact'

export const dynamic = 'force-static'

const services = [
  {
    title: 'Graving',
    desc: 'Grøfter, drenering, fundamenter og tomtearbeid – med moderne maskiner og lokal terrengkjennskap.',
    tags: ['Tomt', 'Drenering', 'Fundament'],
  },
  {
    title: 'Grusing',
    desc: 'Levering og legging av grus for vei, gårdsplass og oppkjørsel med riktig massevalg.',
    tags: ['Vei', 'Oppkjørsel', 'Hyttetomt'],
  },
  {
    title: 'Transport',
    desc: 'Masser, materialer og utstyr – til hytter, byggeplasser og eiendommer i hele Kvam.',
    tags: ['Privat', 'Næring', 'Byggeplass'],
  },
  {
    title: 'Planering',
    desc: 'Klargjøring og avretting av tomter for bygg, anlegg og uteområder.',
    tags: ['Planering', 'Avretting', 'Tomtearbeid'],
  },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────── */}
      <header className='hero-section'>
        <div className='page-container'>
          <h1 className='hero-headline gradient-hero-text'>
            Vi skaper uteområder
            <br />
            som blir lagt merke til
          </h1>
          <p className='hero-sub'>
            Graving, grusing og transport med lokal kompetanse, moderne utstyr
            og rask levering i Kvam og omegn.
          </p>
          <div className='hero-actions'>
            <a className='button-primary' href='tel:+4791545745'>
              Få tilbud i dag
            </a>
            <a className='button-secondary' href='#kontakt'>
              Send forespørsel
            </a>
          </div>
        </div>
      </header>

      {/* ── Stats ────────────────────────────────── */}
      <div className='page-container'>
        <div className='stats-strip'>
          <div className='stat-cell'>
            <p className='stat-number'>2007</p>
            <p className='stat-label'>Etablert</p>
          </div>
          <div className='stat-cell'>
            <p className='stat-number'>20+</p>
            <p className='stat-label'>Års erfaring</p>
          </div>
          <div className='stat-cell'>
            <p className='stat-number'>4</p>
            <p className='stat-label'>Maskiner</p>
          </div>
          <div className='stat-cell'>
            <p className='stat-number'>27</p>
            <p className='stat-label'>Ansatte</p>
          </div>
        </div>
      </div>

      {/* ── How we work ──────────────────────────── */}
      <section className='process-section page-section'>
        <div className='page-container'>
          <div className='section-header'>
            <p className='section-eyebrow'>Enkelt og tydelig</p>
            <h2 className='section-heading'>Slik jobber vi</h2>
          </div>
          <div className='process-steps'>
            <div className='process-step'>
              <p className='process-num'>01</p>
              <h3>Ta kontakt</h3>
              <p>
                Ring oss, send e-post eller fyll ut skjemaet under. Vi svarer
                raskt med en innledende vurdering og neste steg.
              </p>
            </div>
            <div className='process-step'>
              <p className='process-num'>02</p>
              <h3>Vi vurderer prosjektet</h3>
              <p>
                Vi møter deg på eiendommen, ser på omfanget og gir et tydelig og
                ærlig pristilbud uten skjulte kostnader.
              </p>
            </div>
            <div className='process-step'>
              <p className='process-num'>03</p>
              <h3>Vi leverer</h3>
              <p>
                Vi setter i gang, holder deg oppdatert underveis og gjennomfører
                arbeidet med god håndverkskvalitet og ryddig avslutt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────── */}
      <section className='page-section' id='tjenester'>
        <div className='page-container'>
          <div className='section-header'>
            <p className='section-eyebrow'>Hva vi gjør</p>
            <h2 className='section-heading'>Tjenester</h2>
            <p className='section-lead'>
              Vi tilpasser leveransen etter behov, fremdrift og budsjett – enten
              prosjektet er lite eller stort.
            </p>
          </div>
          <div className='service-grid'>
            {services.map((s) => (
              <article key={s.title} className='service-item'>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className='service-tags'>
                  {s.tags.map((t) => (
                    <span key={t} className='service-tag'>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────── */}
      <section className='contact-section' id='kontakt'>
        <div className='contact-container'>
          <div className='section-header'>
            <p className='section-eyebrow'>Ta kontakt</p>
            <h2 className='section-heading'>Send en forespørsel</h2>
            <p className='section-lead'>
              Fortell kort om prosjektet ditt, så tar vi kontakt med en
              vurdering og forslag til videre fremdrift.
            </p>
          </div>
          <form action={sendContact} className='contact-form'>
            <div className='form-grid'>
              <label className='form-field'>
                <span>Navn</span>
                <input
                  name='name'
                  type='text'
                  required
                  placeholder='Ditt navn'
                />
              </label>
              <label className='form-field'>
                <span>E-post</span>
                <input
                  name='email'
                  type='email'
                  required
                  placeholder='navn@epost.no'
                />
              </label>
              <label className='form-field'>
                <span>Telefon</span>
                <input name='phone' type='tel' placeholder='Frivillig' />
              </label>
            </div>
            <label className='form-field mt-4'>
              <span>Melding</span>
              <textarea
                name='message'
                rows='5'
                required
                placeholder='Beskriv prosjektet ditt kort...'
              />
            </label>
            <button className='button-primary mt-6' type='submit'>
              Send melding
            </button>
          </form>
        </div>
      </section>

      {/* ── Bli kjent med oss ───────────────────── */}
      <section className='dark-strip'>
        <div className='page-container dark-strip-inner'>
          <div>
            <p className='section-eyebrow dark-eyebrow'>
              Johan Skeie · Kvam · Est. 2007
            </p>
            <h2 className='dark-section-heading'>Bli kjent med oss</h2>
            <p className='dark-section-lead'>
              Vi er mer enn bare maskiner og masser – vi er et lokalt selskap
              med sterk forankring i Kvam og fokus på godt håndverk.
            </p>
          </div>
          <div className='dark-promo-cards'>
            <Link href='/who-are-we' className='dark-promo-card'>
              <p className='service-kicker'>Om bedriften</p>
              <h3>Hvem er vi?</h3>
              <p>
                Lokal kompetanse og bred erfaring siden 2007. Les om historien,
                driften og hva som driver oss fremover.
              </p>
              <span className='dark-promo-cta'>Les mer &rarr;</span>
            </Link>
            <Link href='/ansatte' className='dark-promo-card'>
              <p className='service-kicker'>Teamet</p>
              <h3>Møt ansatte</h3>
              <p>
                Vi er et dedikert team med lang erfaring innen graving,
                transport og maskinarbeid i Kvam og omegn.
              </p>
              <span className='dark-promo-cta'>Se ansatte &rarr;</span>
            </Link>
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
                Kvam kommune, Vestland
                <br />
                T: <a href='tel:+4791545745'>915 45 745</a>
                <br />
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
