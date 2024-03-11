'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.sass'
import Link from 'next/link'
import CartIcon from '@/svgs/CartIcon'
import MenuIcon from '@/svgs/MenuIcon'
import Sidebar from './subcomponents/Sidebar'
import NavLinks from '../NavLinks'
import Cart from './subcomponents/Cart'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const cartButtonRef = useRef<HTMLButtonElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)

  const handleCartClick = () => {
    setIsCartOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const cartButtonClicked =
        cartButtonRef.current &&
        cartButtonRef.current.contains(e.target as Node)

      const outsideClicked =
        cartRef.current && !cartRef.current.contains(e.target as Node)

      if (!cartButtonClicked && outsideClicked) {
        setIsCartOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
        <NavLinks />
      </nav>
      <button
        onClick={handleCartClick}
        type="button"
        aria-label="open cart display"
        ref={cartButtonRef}
      >
        <CartIcon />
      </button>
      {isCartOpen && <Cart cartRef={cartRef} />}
    </header>
  )
}

export default Header
