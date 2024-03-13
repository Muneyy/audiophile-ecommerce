'use client'

import React from 'react'
import styles from './BackButton.module.sass'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  return (
    <button
      type="button"
      aria-label="Go back to previous page"
      className={styles.backButton}
      onClick={() => router.back()}
    >
      Go back
    </button>
  )
}

export default BackButton
