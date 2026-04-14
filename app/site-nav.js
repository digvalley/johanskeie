import Image from 'next/image'
import Link from 'next/link'

export default function SiteNav() {
  return (
    <nav className='site-nav'>
      <div className='nav-inner'>
        <Link href='/' className='site-brand' aria-label='Johan Skeie'>
          <Image
            src='/logo.png'
            alt='Johan Skeie logo'
            width={130}
            height={130}
            priority
          />
        </Link>
        <div className='nav-links'>
          <Link href='/'>Hjem</Link>
          <span className='nav-divider' aria-hidden='true' />
          <Link href='/#tjenester'>Tjenester</Link>
          <span className='nav-divider' aria-hidden='true' />
          <Link href='/who-are-we'>Om oss</Link>
            <span className='nav-divider' aria-hidden='true' />
            <Link href='/ansatte'>Ansatte</Link>
            <span className='nav-divider' aria-hidden='true' />
            <Link href='/maskinpark'>Maskinpark</Link>
          <a href='/#kontakt' className='nav-cta'>Kontakt</a>
        </div>
      </div>
    </nav>
  )
}
