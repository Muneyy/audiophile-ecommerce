'use client'

import React from 'react'
import styles from './RedirectButton.module.sass'

import { useRouter } from 'next/navigation'
import RightArrow from '@/svgs/RightArrow'

const RedirectButton = ({
  link,
  text,
  ariaLabel,
  forCategory,
  handleCartClick,
}: {
  link: string
  text: string
  ariaLabel: string
  forCategory?: boolean
  handleCartClick?: () => void
}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(link)
    if (handleCartClick) {
      handleCartClick()
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
