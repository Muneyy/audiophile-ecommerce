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
}: {
  link: string
  text: string
  ariaLabel: string
  forCategory?: boolean
}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(link)
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
