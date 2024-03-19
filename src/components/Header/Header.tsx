'use client'

import React, { useRef, useState } from 'react'
import styles from './Header.module.sass'
import Link from 'next/link'
import CartIcon from '@/svgs/CartIcon'
import MenuIcon from '@/svgs/MenuIcon'
import Sidebar from './subcomponents/Sidebar'
import NavLinks from '../NavLinks'
import Cart from './subcomponents/Cart'
import useClickOutsideHandler from '@/hooks/useClickOutside'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartButtonRef = useRef<HTMLButtonElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleCartClick = () => {
    setIsCartOpen((prev) => !prev)
  }

  useClickOutsideHandler({
    modalRef: cartRef,
    buttonRef: cartButtonRef,
    setIsModalOpen: setIsCartOpen,
  })

  return (
    <header className={styles.header}>
      {isMenuOpen && <Sidebar setIsMenuOpen={setIsMenuOpen} />}
      <div className={styles.wrapper}>
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
        {isCartOpen && (
          <Cart handleCartClick={handleCartClick} cartRef={cartRef} />
        )}
      </div>
    </header>
  )
}

export default Header
