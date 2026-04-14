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
    phone: '+4791545745',
    phoneDisplay: '915 45 745',
    email: 'johan@johanskeie.no',
    placeholder: false,
  },
  {
    initials: '–',
    name: 'Navn Navnesen',
    role: 'Maskinfører',
    phone: null,
    phoneDisplay: null,
    email: null,
    placeholder: true,
  },
  {
    initials: '–',
    name: 'Navn Navnesen',
    role: 'Sjåfør · Transport',
    phone: null,
    phoneDisplay: null,
    email: null,
    placeholder: true,
  },
]

export default function AnsattePage() {
  return (
    <main>
      {/* ── Page header ──────────────────────────── */}
      <header className='inner-page-header'>
        <div className='page-container'>
          <p className='section-eyebrow' style={{ marginBottom: '1rem' }}>Teamet</p>
          <h1 className='inner-page-h1'>Menneskene bak Johan Skeie</h1>
          <p className='inner-page-lead'>
            Vi er et lite, dedikert team med lang erfaring innen graving,
            transport og maskinarbeid. Vi kjenner terrenget og vet hva som
            kreves for å levere godt arbeid i Kvam og omegn.
          </p>
        </div>
      </header>

      {/* ── Staff grid ───────────────────────────── */}
      <section className='page-section'>
        <div className='page-container'>
          <div className='staff-grid'>
            {staff.map((person) => (
              <article
                key={person.name + person.role}
                className={`staff-card${person.placeholder ? ' staff-placeholder' : ''}`}
              >
                <div className='staff-avatar'>{person.initials}</div>
                <div className='staff-info'>
                  <p className='staff-name'>{person.name}</p>
                  <p className='staff-role'>{person.role}</p>
                </div>
                {(person.phone || person.email) && (
                  <div className='staff-contacts'>
                    {person.phone && (
                      <a href={`tel:${person.phone}`} className='staff-contact-link'>
                        {person.phoneDisplay}
                      </a>
                    )}
                    {person.email && (
                      <a href={`mailto:${person.email}`} className='staff-contact-link'>
                        {person.email}
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open application ─────────────────────── */}
      <section
        className='page-section'
        style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}
      >
        <div className='page-container'>
          <p className='section-eyebrow'>Bli en del av oss</p>
          <h2 className='section-heading'>Ser vi etter deg?</h2>
          <p className='section-lead'>
            Vi er alltid interesserte i å høre fra flinke folk med erfaring
            innen maskin, transport eller anlegg. Ta gjerne kontakt direkte.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a className='button-primary' href='mailto:johan@johanskeie.no'>
              Send åpen søknad
            </a>
            <a className='button-secondary' href='tel:+4791545745'>
              Ring oss
            </a>
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
              <a href='https://digvalley.com' target='_blank' rel='noopener noreferrer'>
                Digvalley AS
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
