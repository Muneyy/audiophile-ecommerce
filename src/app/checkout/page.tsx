import React from 'react'
import styles from './page.module.sass'
import BackButton from '@/components/shared/BackButton'
import Checkout from './Checkout'

const Page = () => {
  return (
    <main className={styles.main}>
      <BackButton />
      <Checkout />
    </main>
  )
}

export default Page
