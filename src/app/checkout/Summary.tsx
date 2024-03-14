'use client'

import React, { useContext } from 'react'
import styles from './Summary.module.sass'

import commafy from '@/utils/commafy'
import CartItem from '@/components/shared/CartItem'
import { CartContext } from '@/context/CartContext'

const Summary = ({ FORM_ID }: { FORM_ID: string }) => {
  const { cart, deleteFromCart } = useContext(CartContext)

  const RAW_COST = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const VAT = RAW_COST * 0.2
  const GRAND_TOTAL = RAW_COST + 50 + VAT

  const handleClearClick = () => {
    cart.forEach((item) => deleteFromCart(item.title))
  }

  const renderCartItems = () => {
    if (cart.length === 0) {
      return <p className={styles.emptyText}>Your cart is empty.</p>
    }
    return cart.map((item) => <CartItem key={item.title} item={item} />)
  }

  return (
    <section className={styles.summaryContainer}>
      <div className={styles.header}>
        <h2>SUMMARY</h2>
        {cart.length > 0 && (
          <button
            type="button"
            aria-label="clear all contents of cart"
            onClick={handleClearClick}
          >
            <p>Clear cart</p>
          </button>
        )}
      </div>
      {renderCartItems()}
      <>
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
          form={FORM_ID}
          aria-label={`Continue to payment page with a grand total of ${GRAND_TOTAL}`}
          disabled={cart.length === 0}
        >
          CONTINUE & PAY
        </button>
      </>
    </section>
  )
}

export default Summary
