import React from 'react'
import styles from './page.module.sass'
import BackButton from '@/components/shared/BackButton'
import Checkout from './Checkout'

const Page = () => {
  return (
    <>
      <style>
        {`
        html {
          background-color: var(--gray-bg)
        }
        `}
      </style>
      <main className={styles.main}>
        <BackButton />
        <div className={styles.responsiveDivider}>
          <Checkout />
          {/* <Summary /> */}
        </div>
      </main>
    </>
  )
}

export default Page
