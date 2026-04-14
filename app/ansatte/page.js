import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Ansatte | Johan Skeie',
  description:
    'Møt teamet bak Johan Skeie – erfarne fagfolk innen graving, transport og maskinarbeid i Kvam.',
}

const staff = [
  {
    initials: 'JS',
    name: 'Johan Skeie',
    role: 'Daglig leder · Maskinfører',
    bio: 'Grunnlegger og daglig leder av Johan Skeie AS. Over 20 års erfaring med graving, planering og maskinarbeid i Kvam og Hardanger.',
    placeholder: false,
  },
  {
    initials: '–',
    name: 'Navn Navnesen',
    role: 'Maskinfører',
    bio: 'Erfaren maskinfører med bred kompetanse innen graving, drenering og tomteklargjøring for private og næringskunder.',
    placeholder: true,
  },
  {
    initials: '–',
    name: 'Navn Navnesen',
    role: 'Sjåfør · Transport',
    bio: 'Ansvarlig for transport og logistikk. Kjører masser, materialer og utstyr til hytter, byggeplasser og private eiendommer.',
    placeholder: true,
  },
]

export default function AnsattePage() {
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
              <Link href='/#tjenester'>Tjenester</Link>
              <Link href='/who-are-we'>Om oss</Link>
              <Link href='/ansatte'>Ansatte</Link>
              <Link href='/#kontakt'>Kontakt</Link>
            </nav>
          </div>
          <div className='mt-16 mb-8 sm:mt-20 sm:mb-10'>
            <p className='service-kicker mb-3'>Teamet</p>
            <h1 className='text-heading max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl'>
              Menneskene bak Johan Skeie
            </h1>
            <p className='text-muted mt-5 max-w-xl text-lg leading-relaxed'>
              Vi er et lite, dedikert team med lang erfaring innen graving,
              transport og maskinarbeid. Vi kjenner terrenget og vet hva som
              kreves for å levere godt arbeid i Kvam og omegn.
            </p>
          </div>
        </div>
      </header>

      <section className='mx-auto mt-14 w-full max-w-6xl px-6 sm:px-10'>
        <div className='staff-grid'>
          {staff.map((person) => (
            <article
              key={person.name + person.role}
              className={`staff-card${person.placeholder ? ' staff-placeholder' : ''}`}
            >
              <div className='staff-avatar'>{person.initials}</div>
              <div>
                <p className='staff-name'>{person.name}</p>
                <p className='staff-role'>{person.role}</p>
              </div>
              <p className='staff-bio'>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='mx-auto mt-16 mb-20 w-full max-w-6xl border-t px-6 pt-10 sm:px-10'>
        <p className='service-kicker mb-3'>Bli en del av oss</p>
        <h2 className='mb-4'>Ser vi etter deg?</h2>
        <p className='text-muted max-w-xl text-base leading-relaxed'>
          Vi er alltid interesserte i å høre fra flinke folk med erfaring innen
          maskin, transport eller anlegg. Ta gjerne kontakt direkte.
        </p>
        <div className='mt-6 flex flex-wrap gap-4'>
          <a className='button-primary' href='mailto:johan@johanskeie.no'>
            Send en åpen søknad
          </a>
          <a className='button-secondary' href='tel:+4791545745'>
            Ring oss
          </a>
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
