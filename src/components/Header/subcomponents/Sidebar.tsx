import React, { useEffect, useRef } from 'react'
import styles from './Sidebar.module.sass'
import CloseIcon from '@/svgs/CloseIcon'
import NavLinks from '../../NavLinks'

const Sidebar = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleCloseClick = () => {
    setIsMenuOpen(false)
  }

  const sidebarRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      e.stopPropagation()
      const overlayClicked = overlayRef.current!.contains(e.target as Node)
      const sidebarClicked = sidebarRef.current!.contains(e.target as Node)

      if (overlayClicked && !sidebarClicked) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div ref={overlayRef} className={styles.overlay} />
      <aside ref={sidebarRef} className={styles.sidebar}>
        <button
          type="button"
          aria-label="close sidebar menu"
          onClick={handleCloseClick}
        >
          <CloseIcon />
        </button>
        <NavLinks setIsMenuOpen={setIsMenuOpen} />
      </aside>
    </>
  )
}

export default Sidebar
