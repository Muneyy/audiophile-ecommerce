'use client'

import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import styles from './NavLinks.module.sass'
import { CartContext } from '@/context/CartContext'

interface TypeNavLinks {
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLinks = ({ setIsMenuOpen }: TypeNavLinks) => {
  const { navLinks } = useContext(CartContext)
  const [isNavLinksAvailable, setIsNavLinksAvailable] = useState(false)

  useEffect(() => {
    if (navLinks && navLinks.length > 0) {
      setIsNavLinksAvailable(true)
    }
  }, [navLinks])

  if (!isNavLinksAvailable) {
    return null
  }

  const closeSidebarOnClick = () => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const linksWithHome = ['Home', ...navLinks]

  return (
    <ul>
      {linksWithHome.map((link) => (
        <li key={link} className={styles.link}>
          <Link
            onClick={closeSidebarOnClick}
            href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
