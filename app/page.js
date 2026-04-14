import Image from 'next/image'
import Link from 'next/link'
import { sendContact } from './actions/send-contact'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <main className='landing flex flex-1 flex-col'>
      <header className='hero-wrap colored-header px-6 pt-10 pb-12 sm:px-10 sm:pt-12 sm:pb-14'>
        <div className='mx-auto w-full max-w-6xl'>
          <div className='site-header-row'>
            <Link href='/' className='site-brand' aria-label='Johan Skeie'>
              <Image
                src='/logo.png'
                alt='Johan Skeie logo'
                width={100}
                height={100}
                priority
              />
            </Link>
            <nav className='site-nav-links'>
              <Link href='/'>Hjem</Link>
              <a href='#tjenester'>Tjenester</a>
              <Link href='/who-are-we'>Om oss</Link>
              <Link href='/ansatte'>Ansatte</Link>
              <a href='#kontakt'>Kontakt</a>
            </nav>
          </div>
          <div className='mt-16 mb-8 sm:mt-24 sm:mb-12'>
            <h1 className='text-heading gradient-hero-text max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl'>
              Vi skaper uteområder som blir lagt merke til
            </h1>
            <p className='text-muted mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl'>
              Graving, grusing og transport med lokal kompetanse, moderne utstyr
              og rask levering i Kvam kommune.
            </p>
            <div className='mt-10 flex flex-wrap gap-4'>
              <a className='button-primary' href='tel:+4791545745'>
                Få tilbud i dag
              </a>
              <a className='button-secondary button-modern' href='#kontakt'>
                Kontakt oss her
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        className='mx-auto mt-14 w-full max-w-6xl px-6 sm:px-10'
        id='tjenester'
      >
        <div className='section-intro'>
          <h2 className='text-3xl'>Tjenester</h2>
          <p className='service-lead max-w-3xl'>
            Vi leverer helhetlige tjenester for uteområder, eiendom og
            byggeplass. Enten prosjektet er lite eller stort, tilpasser vi
            leveransen etter behov, fremdrift og budsjett.
          </p>
        </div>
        <div className='service-grid'>
          <article className='service-item'>
            <p className='service-kicker'>Grunnarbeid</p>
            <h3>Graving</h3>
            <p>
              Vi utfører alt innen graving, fra tomtearbeid og drenering til
              grøfter, fundamenter og klargjøring av uteområder.
            </p>
            <p className='service-meta'>Tomt • Drenering • Fundament</p>
          </article>
          <article className='service-item'>
            <p className='service-kicker'>Masser og finish</p>
            <h3>Grusing</h3>
            <p>
              Vi leverer grusing for vei, gårdsplass, oppkjørsel og andre
              uteflater, med riktig massevalg og presis utføring.
            </p>
            <p className='service-meta'>Vei • Oppkjørsel • Uteflate</p>
          </article>
          <article className='service-item'>
            <p className='service-kicker'>Logistikk</p>
            <h3>Transport</h3>
            <p>
              Vi tilbyr transport av alle typer varer, materialer og utstyr for
              private og bedrifter, inkludert leveranser til hytter og
              byggeplasser.
            </p>
            <p className='service-meta'>Alle typer • Hytte • Byggeplass</p>
          </article>
          <article className='service-item'>
            <p className='service-kicker'>Sikring av grunn</p>
            <h3>Drenering</h3>
            <p>
              Vi utfører dreneringsarbeid rundt bolig, hytte og næringsbygg for
              å lede vann trygt bort fra konstruksjon og terreng.
            </p>
            <p className='service-meta'>Bolig • Hytte • Næring</p>
          </article>
          <article className='service-item'>
            <p className='service-kicker'>Oppstart av prosjekt</p>
            <h3>Tomteklargjøring</h3>
            <p>
              Vi klargjør tomter for bygg og anlegg med avretting,
              massehåndtering og praktisk tilrettelegging før videre arbeid.
            </p>
            <p className='service-meta'>Avretting • Masser • Tilrettelegging</p>
          </article>
          <article className='service-item'>
            <p className='service-kicker'>Sesong og drift</p>
            <h3>Vedlikehold</h3>
            <p>
              Vi tilbyr løpende vedlikehold av uteområder, adkomst og grusflater
              for privatkunder, hytteeiere og bedrifter.
            </p>
            <p className='service-meta'>Uteområde • Adkomst • Drift</p>
          </article>
          <article className='service-item'>
            <p className='service-kicker'>Terreng og form</p>
            <h3>Planering</h3>
            <p>
              Vi planerer og former terreng for funksjonelle og estetiske
              uteområder tilpasset bruk, avrenning og helhetlig uttrykk.
            </p>
            <p className='service-meta'>Terreng • Avrenning • Uteområde</p>
          </article>
          <article className='service-item'>
            <p className='service-kicker'>Levering og logistikk</p>
            <h3>Materialhåndtering</h3>
            <p>
              Vi håndterer inn- og uttransport av masser, stein og materialer
              slik at prosjektet holder fremdrift fra start til slutt.
            </p>
            <p className='service-meta'>Masser • Stein • Fremdrift</p>
          </article>
        </div>
      </section>

      <section className='promo-strip mt-16 py-14'>
        <div className='mx-auto w-full max-w-6xl px-6 sm:px-10'>
          <p className='service-kicker mb-5'>Johan Skeie · Kvam · Est. 2007</p>
          <div className='promo-cards'>
            <Link href='/who-are-we' className='promo-card'>
              <p className='service-kicker'>Om bedriften</p>
              <h3>Hvem er vi?</h3>
              <p>
                Lokal kompetanse og bred erfaring siden 2007. Les om historien,
                driften og hva som driver oss fremover.
              </p>
              <span className='promo-cta'>Les mer &rarr;</span>
            </Link>
            <Link href='/ansatte' className='promo-card'>
              <p className='service-kicker'>Teamet</p>
              <h3>Møt ansatte</h3>
              <p>
                Vi er et dedikert team med lang erfaring innen graving,
                transport og maskinarbeid i Kvam og omegn.
              </p>
              <span className='promo-cta'>Se ansatte &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className='mx-auto mb-20 w-full max-w-4xl border-t px-6 pt-16 sm:px-10'
        id='kontakt'
      >
        <div className='contact-form-wrap'>
          <h2 className='text-3xl'>Send en forespørsel</h2>
          <p className='text-muted mt-3 max-w-2xl'>
            Fortell kort om prosjektet ditt, så tar vi kontakt med en vurdering
            og forslag til videre fremdrift.
          </p>
          <form action={sendContact} className='contact-form mt-8'>
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
            <label className='form-field mt-5'>
              <span>Melding</span>
              <textarea
                name='message'
                rows='6'
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

      <footer className='w-full border-t px-6 py-8 sm:px-10'>
        <div className='mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-2'>
          <div className='text-muted text-sm'>
            <p className='font-semibold'>Johan Skeie</p>
            <p>Kvam kommune, Vestland</p>
            <p>
              T: <a href='tel:+4791545745'>915 45 745</a>
            </p>
            <p>
              E-post:{' '}
              <a href='mailto:johan@johanskeie.no'>johan@johanskeie.no</a>
            </p>
          </div>
          <p className='text-muted text-sm md:text-right'>
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
      </footer>
    </main>
  )
}
