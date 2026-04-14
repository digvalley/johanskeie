import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Maskinpark | Johan Skeie',
  description:
    'Oversikt over maskinparken til Johan Skeie – moderne utstyr for graving, transport og grunnarbeid i Kvam.',
}

const categories = [
  {
    label: 'Graving og maskinarbeid',
    machines: [
      {
        name: 'Gravemaskin',
        model: 'Komatsu PC138',
        image: '/graving_140.png',
        desc: 'Allsidig mellomtung gravemaskin godt egnet for grunnarbeid, grøfting og drenering i vestlandsterreng.',
        specs: [
          { label: 'Vekt', value: 'ca. 14 tonn' },
          { label: 'Rekkevidde', value: '8,5 m' },
          { label: 'Egnet for', value: 'Grøfter · Drenering · Tomtearbeid' },
        ],
      },
      {
        name: 'Minigraver',
        model: 'Kubota KX057',
        image: '/graving_140.png',
        desc: 'Kompakt og manøvrerbar – ideell for trange arealer, hyttetomter og hagearbeid der større maskiner ikke kommer til.',
        specs: [
          { label: 'Vekt', value: 'ca. 5,5 tonn' },
          { label: 'Rekkevidde', value: '5,5 m' },
          { label: 'Egnet for', value: 'Trange arealer · Hage · Hytte' },
        ],
      },
    ],
  },
  {
    label: 'Transport og frakt',
    machines: [
      {
        name: 'Dumper',
        model: 'Volvo A25',
        image: null,
        desc: 'Artikulert dumper med fremragende terrengegenskaper – håndterer krevende adkomster og store massevolumer effektivt.',
        specs: [
          { label: 'Kapasitet', value: '24 tonn' },
          { label: 'Drivlinje', value: '6×6 terrengkjøring' },
          { label: 'Egnet for', value: 'Massekjøring · Fyllmasse' },
        ],
      },
      {
        name: 'Lastebil med kran',
        model: 'Scania med Hiab-kran',
        image: '/transport_sn320.jpg',
        desc: 'Lastebil utstyrt med kran for effektiv levering og lossing av materialer direkte på ønsket sted.',
        specs: [
          { label: 'Kranrekkevidde', value: '12 m' },
          { label: 'Løftekapasitet', value: '5 tonn ved 4 m' },
          { label: 'Egnet for', value: 'Levering · Lossing · Byggematerial' },
        ],
      },
    ],
  },
  {
    label: 'Utstyr og redskap',
    machines: [
      {
        name: 'Vibrasjonsplate',
        model: 'Wacker Neuson',
        image: null,
        desc: 'Brukes til komprimering av gruslag og subbuslag for å sikre stabile og holdbare overflater over tid.',
        specs: [
          { label: 'Bredde', value: '60 cm' },
          { label: 'Egnet for', value: 'Grus · Subbus · Asfaltunderlag' },
        ],
      },
      {
        name: 'Tilhengere og redskap',
        model: 'Diverse',
        image: null,
        desc: 'Bredt sortiment av skuffer, griperedskap og tilhengere tilpasset ulike maskintyper og oppdragstyper.',
        specs: [
          { label: 'Skuffer', value: 'Ulike bredder og typer' },
          { label: 'Tilhengere', value: 'Lavloader og maskintransport' },
        ],
      },
    ],
  },
]

export default function MaskinparkPage() {
  return (
    <main>
      {/* ── Page header ──────────────────────────── */}
      <header className='inner-page-header'>
        <div className='page-container'>
          <p className='section-eyebrow' style={{ marginBottom: '1rem' }}>
            Utstyr og kapasitet
          </p>
          <h1 className='inner-page-h1'>Maskinpark</h1>
          <p className='inner-page-lead'>
            Vi investerer løpende i moderne maskiner og godt vedlikeholdt
            utstyr – det gir oss kapasitet og fleksibilitet til å ta oppdrag
            av alle størrelser, raskt og presist.
          </p>
        </div>
      </header>

      {/* ── Categories ───────────────────────────── */}
      {categories.map((cat) => (
        <section key={cat.label} className='mpark-category'>
          <div className='page-container'>
            <h2 className='mpark-cat-heading'>{cat.label}</h2>
            <div className='mpark-list'>
              {cat.machines.map((m) => (
                <article key={m.name} className='mpark-card'>
                  <div className='mpark-image'>
                    {m.image ? (
                      <div className='mpark-photo-wrap'>
                        <Image
                          src={m.image}
                          alt={m.name}
                          width={260}
                          height={180}
                          className='mpark-photo'
                        />
                      </div>
                    ) : (
                      <span className='mpark-placeholder-label'>
                        {m.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className='mpark-info'>
                    <div className='mpark-info-top'>
                      <h3 className='mpark-name'>{m.name}</h3>
                      <p className='mpark-model'>{m.model}</p>
                      <p className='mpark-desc'>{m.desc}</p>
                    </div>
                    <dl className='mpark-specs'>
                      {m.specs.map((s) => (
                        <div key={s.label} className='mpark-spec-row'>
                          <dt>{s.label}</dt>
                          <dd>{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────── */}
      <section
        className='page-section'
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '3.5rem',
          paddingBottom: '4rem',
        }}
      >
        <div className='page-container'>
          <p className='section-eyebrow'>Lurer du på noe?</p>
          <h2 className='section-heading'>Ta kontakt</h2>
          <p className='section-lead'>
            Usikker på om vi har riktig maskin for jobben? Ring oss direkte,
            så finner vi ut av det sammen.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a className='button-primary' href='tel:+4791545745'>Ring oss</a>
            <Link className='button-secondary' href='/#kontakt'>Send melding</Link>
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
