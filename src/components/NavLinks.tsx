import Link from 'next/link'
import React from 'react'
import styles from './NavLinks.module.sass'

const NAV_LINKS = ['Home', 'Headphones', 'Speakers', 'Earphones']

const NavLinks = () => {
  return (
    <ul>
      {NAV_LINKS.map((link) => (
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
