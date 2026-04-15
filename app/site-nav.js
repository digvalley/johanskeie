import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Hjem' },
  { href: '/#tjenester', label: 'Tjenester' },
  { href: '/who-are-we', label: 'Om oss' },
  { href: '/ansatte', label: 'Ansatte' },
  { href: '/maskinpark', label: 'Maskinpark' },
  { href: '/#kontakt', label: 'Kontakt', cta: true },
]

const navLinkClass =
  'px-2.5 py-1.5 text-[0.88rem] font-semibold text-[var(--muted)] no-underline decoration-transparent hover:decoration-transparent transition-colors hover:text-[var(--heading)] max-sm:px-2 max-sm:py-1.5 max-sm:text-xs'

const ctaClass =
  'ml-2 inline-flex items-center justify-center rounded-full bg-[var(--button-primary-bg)] px-4 py-[0.42rem] text-[0.88rem] font-semibold !text-white visited:!text-white hover:!text-white no-underline decoration-transparent shadow-md transition-all hover:-translate-y-px hover:bg-[var(--button-primary-hover)] hover:shadow-lg active:translate-y-0'

export default function SiteNav() {
  return (
    <nav className='site-nav sticky top-0 z-50 border-b border-[color:color-mix(in_srgb,var(--border)_55%,transparent)] bg-[color:color-mix(in_srgb,var(--background)_78%,transparent)] backdrop-blur-md supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--background)_65%,transparent)]'>
      <div className='mx-auto flex h-[5.5rem] w-full max-w-6xl items-center justify-between gap-6 px-6 sm:px-10'>
        <Link
          href='/'
          className='inline-flex shrink-0 items-center no-underline'
          aria-label='Johan Skeie'
        >
          <Image
            src='/logo.png'
            alt='Johan Skeie logo'
            width={150}
            height={150}
            priority
          />
        </Link>
        <div className='flex flex-wrap items-center justify-end gap-[0.15rem] max-sm:gap-[0.05rem]'>
          {NAV_LINKS.map((link, index) => (
            <div key={link.href} className='contents'>
              <Link
                href={link.href}
                className={link.cta ? ctaClass : navLinkClass}
              >
                {link.label}
              </Link>
              {index < NAV_LINKS.length - 2 && (
                <span
                  className='mx-[0.15rem] block h-4 w-px shrink-0 self-center bg-[var(--border)] max-sm:hidden'
                  aria-hidden='true'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
