import React from 'react'
import styles from './page.module.sass'

const notFound = async () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.notFound}>
        404 Not Found | The product does not exist or it might belong in a
        different category.
      </h1>
    </main>
  )
}

export default notFound
