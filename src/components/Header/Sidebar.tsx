import React from 'react'
import styles from './Sidebar.module.sass'
import CloseIcon from '@/svgs/CloseIcon'
import Link from 'next/link'

const NAV_LINKS = ['Home', 'Headphones', 'Speakers', 'Earphones']

const Sidebar = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleCloseClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <aside className={styles.sidebar}>
      <button
        type="button"
        aria-label="close sidebar menu"
        onClick={handleCloseClick}
      >
        <CloseIcon />
      </button>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
