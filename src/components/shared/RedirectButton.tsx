'use client'

import React, { useEffect, useState } from 'react'
import styles from './RedirectButton.module.sass'
import { useRouter } from 'next/navigation'
import RightArrow from '@/svgs/RightArrow'

interface TypeRedirectButton {
  link: string
  text: string
  ariaLabel: string
  forCategory?: boolean
  handleCartClick?: () => void
}

const RedirectButton = ({
  link,
  text,
  ariaLabel,
  forCategory,
  handleCartClick,
}: TypeRedirectButton) => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    if (mounted && router) {
      router.push(link)
      if (handleCartClick) {
        handleCartClick()
      }
    }
  }
  return (
    <button
      className={styles.redirectButton}
      type="button"
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {text}
      {forCategory && <RightArrow />}
    </button>
  )
}

export default RedirectButton
