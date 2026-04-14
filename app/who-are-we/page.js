import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Om oss | Johan Skeie",
  description:
    "Om Johan Skeie: historie, dagens drift, adresse og kontaktinformasjon.",
};

export default function WhoAreWePage() {
  return (
    <main className="landing flex flex-1 flex-col">
      <header className="hero-wrap colored-header px-6 pt-10 pb-12 sm:px-10 sm:pt-12 sm:pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <div className="site-header-row">
            <Link href="/" className="site-brand" aria-label="Johan Skeie">
              <Image
                src="/logo.png"
                alt="Johan Skeie logo"
                width={100}
                height={100}
                priority
              />
            </Link>
            <nav className="site-nav-links">
              <Link href="/">Hjem</Link>
              <Link href="/#tjenester">Tjenester</Link>
              <Link href="/who-are-we">Om oss</Link>
              <Link href="/ansatte">Ansatte</Link>
              <Link href="/#kontakt">Kontakt</Link>
            </nav>
          </div>
          <div className="mt-16 mb-8 sm:mt-20 sm:mb-10">
            <p className="service-kicker mb-3">Est. 2007</p>
            <h1 className="text-heading max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Hvem er vi?
            </h1>
            <p className="text-muted mt-5 max-w-xl text-lg leading-relaxed">
              Johan Skeie er et lokalt entreprenørfirma i Kvam som leverer
              graving, grusing, transport og praktiske tjenester for
              uteområder.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto mt-14 grid w-full max-w-6xl gap-8 px-6 sm:px-10 md:grid-cols-2">
        <article className="service-item">
          <p className="service-kicker">Historie</p>
          <h2>Fra oppstart til etablert aktør</h2>
          <p>
            Selskapet ble etablert i 2007 av Johan Skeie. Siden oppstarten har
            vi bistått hytteeiere, privatkunder og lokale entreprenører med
            pålitelig gjennomføring og tydelig kommunikasjon.
          </p>
        </article>

        <article className="service-item">
          <p className="service-kicker">Status i dag</p>
          <h2>Moderne drift og fleksibel kapasitet</h2>
          <p>
            I dag leverer vi tjenester med moderne utstyr, bred erfaring og
            fokus på kvalitet. Vi tar oppdrag i ulike størrelser og tilpasser
            leveransen etter prosjektets behov.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-14 mb-20 w-full max-w-6xl border-t px-6 pt-12 sm:px-10">
        <p className="service-kicker mb-3">Adresse og kontakt</p>
        <h2 className="mb-5">Kontaktinformasjon</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-muted text-sm font-semibold uppercase tracking-widest mb-1">Adresse</p>
            <p>Kvam kommune, Vestland</p>
          </div>
          <div>
            <p className="text-muted text-sm font-semibold uppercase tracking-widest mb-1">Telefon</p>
            <a href="tel:+4791545745">915 45 745</a>
          </div>
          <div>
            <p className="text-muted text-sm font-semibold uppercase tracking-widest mb-1">E-post</p>
            <a href="mailto:johan@johanskeie.no">johan@johanskeie.no</a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t px-6 py-8 sm:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-2">
          <div className="text-muted text-sm">
            <p className="font-semibold">Johan Skeie</p>
            <p>Kvam kommune, Vestland</p>
            <p>
              T: <a href="tel:+4791545745">915 45 745</a>
            </p>
            <p>
              E-post: <a href="mailto:johan@johanskeie.no">johan@johanskeie.no</a>
            </p>
          </div>
          <p className="text-muted text-sm md:text-right">
            Utviklet av{" "}
            <a href="https://digvalley.com" target="_blank" rel="noopener noreferrer">
              Digvalley AS
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
