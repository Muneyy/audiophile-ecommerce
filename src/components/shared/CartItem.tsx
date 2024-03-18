import React from 'react'
import styles from './CartItem.module.sass'
import Image from 'next/image'
import commafy from '@/utils/commafy'

const CartItem = ({
  item,
}: {
  item: {
    title: string
    image: string
    price: number
    quantity: number
  }
}) => {
  return (
    <div className={styles.cartItem}>
      <Image
        src={item.image}
        alt={item.title}
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className={styles.textGroup}>
        <h3>{item.title}</h3>
        <span>${commafy(item.price)}</span>
      </div>
      <div className={styles.priceGroup}>
        <span>x{item.quantity}</span>
      </div>
    </div>
  )
}

export default CartItem
