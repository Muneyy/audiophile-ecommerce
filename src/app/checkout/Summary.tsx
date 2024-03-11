import React from 'react'
import styles from './Summary.module.sass'

import xx99mkii from '@/assets/cart/image-xx99-mark-two-headphones.jpg'
import xx59 from '@/assets/cart/image-xx59-headphones.jpg'
import yx1 from '@/assets/cart/image-yx1-earphones.jpg'
import Image from 'next/image'
import commafy from '@/utils/commafy'

const cartData = {
  cart: [
    {
      title: 'XX99 MK II',
      quantity: 1,
      price: 2999,
      imageSrc: xx99mkii,
    },
    {
      title: 'XX59',
      quantity: 2,
      price: 899,
      imageSrc: xx59,
    },
    {
      title: 'YX1',
      quantity: 1,
      price: 599,
      imageSrc: yx1,
    },
  ],
  shippingFee: 50,
}

const RAW_COST = cartData.cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
)

const VAT = RAW_COST * 0.2
const GRAND_TOTAL = RAW_COST + cartData.shippingFee + VAT

const Summary = () => {
  return (
    <section className={styles.summaryContainer}>
      <h2>SUMMARY</h2>
      {cartData.cart.map((item) => (
        <div key={item.title} className={styles.cartItem}>
          <Image src={item.imageSrc} alt={item.title} />
          <div className={styles.textGroup}>
            <h3>{item.title}</h3>
            <span>${commafy(item.price)}</span>
          </div>
          <div className={styles.priceGroup}>
            <span>x{item.quantity}</span>
          </div>
        </div>
      ))}
      <div className={styles.divider}>
        <div className={styles.calcGroup}>
          <p>TOTAL</p>
          <span>${commafy(RAW_COST)}</span>
        </div>
        <div className={styles.calcGroup}>
          <p>SHIPPING</p>
          <span>${cartData.shippingFee}</span>
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
