'use client'

import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './NavLinks.module.sass'
import { CartAndLinksContext } from '@/context/CartAndLinksContext'

const NavLinks = () => {
  const { navLinks } = useContext(CartAndLinksContext)
  const linksWithHome = ['Home', ...navLinks]

  return (
    <ul>
      {linksWithHome.map((link) => (
        <li key={link} className={styles.link}>
          <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
