'use client'

import React, { useContext } from 'react'
import styles from './Summary.module.sass'

import commafy from '@/utils/commafy'
import CartItem from '@/components/shared/CartItem'
import { CartContext } from '@/context/CartContext'

const Summary = () => {
  const { cart } = useContext(CartContext)

  const RAW_COST = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const VAT = RAW_COST * 0.2
  const GRAND_TOTAL = RAW_COST + 50 + VAT

  return (
    <section className={styles.summaryContainer}>
      <h2>SUMMARY</h2>
      {cart.map((item) => (
        <CartItem key={item.title} item={item} />
      ))}
      <div className={styles.divider}>
        <div className={styles.calcGroup}>
          <p>TOTAL</p>
          <span>${commafy(RAW_COST)}</span>
        </div>
        <div className={styles.calcGroup}>
          <p>SHIPPING</p>
          <span>${50}</span>
        </div>
        <div className={styles.calcGroup}>
          <p>VAT (INCLUDED)</p>
          <span>${commafy(VAT)}</span>
        </div>
      </div>
      <div className={`${styles.calcGroup} ${styles.grandTotal}`}>
        <p>GRAND TOTAL</p>
        <span>${commafy(GRAND_TOTAL)}</span>
      </div>
      <button
        type="submit"
        aria-label={`Continue to payment page with a grand total of ${GRAND_TOTAL}`}
      >
        CONTINUE & PAY
      </button>
    </section>
  )
}

export default Summary
