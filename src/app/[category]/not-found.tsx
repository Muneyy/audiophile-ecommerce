import React from 'react'
import styles from './page.module.sass'

const notFound = async () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.notFound}>
        404 Not Found | Category does not exist. Did you mean something else?
      </h1>
    </main>
  )
}

export default notFound
