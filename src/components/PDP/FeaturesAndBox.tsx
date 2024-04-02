import React from 'react'
import styles from './FeaturesAndBox.module.sass'

interface TypeFeaturesAndBox {
  features: string
  includedItems: {
    box: {
      name: string
      quantity: number
    }[]
  }
}

const FeaturesAndBox = ({ features, includedItems }: TypeFeaturesAndBox) => {
  return (
    <section className={styles.featuresAndBox}>
      <div className={styles.features}>
        <h2>FEATURES</h2>
        <p>{features}</p>
      </div>
      <div className={styles.box}>
        <h2>IN THE BOX</h2>
        {includedItems.box.map((item) => (
          <p className={styles.boxItem} key={item.name}>
            <span className={styles.itemQuantity}>{item.quantity}x</span>
            <span>{item.name}</span>
          </p>
        ))}
      </div>
    </section>
  )
}

export default FeaturesAndBox
