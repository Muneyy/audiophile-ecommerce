'use client'

import React, { useState } from 'react'
import styles from './Header.module.sass'
import Link from 'next/link'
import CartIcon from '@/svgs/CartIcon'
import MenuIcon from '@/svgs/MenuIcon'
import Sidebar from './Sidebar'

const NAV_LINKS = ['Home', 'Headphones', 'Speakers', 'Earphones']

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      {isMenuOpen && <Sidebar setIsMenuOpen={setIsMenuOpen} />}
      <button
        type="button"
        aria-label="display navigation links"
        className={styles.menuButton}
        onClick={handleMenuClick}
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
              <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                {link}
              </Link>
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
