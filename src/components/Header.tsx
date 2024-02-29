import React from 'react'
import styles from './Header.module.sass'
import Link from 'next/link'
import CartIcon from '@/svgs/CartIcon'
import MenuIcon from '@/svgs/MenuIcon'

const NAV_LINKS = ['Home', 'Headphones', 'Speakers', 'Earphones']

const Header = () => {
  return (
    <header className={styles.header}>
      <button
        type="submit"
        aria-label="display navigation links"
        className={styles.menuButton}
      >
        <MenuIcon />
      </button>
      <Link href="/">
        <span className={styles.logo}>audiophile</span>
      </Link>
      <nav className={styles.desktopNavLinks}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <Link href={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" aria-label="open cart display">
        <CartIcon />
      </button>
    </header>
  )
}

export default Header
