import React from 'react'
import styles from './CartItem.module.sass'
import Image, { StaticImageData } from 'next/image'
import commafy from '@/utils/commafy'

const CartItem = ({
  item,
}: {
  item: {
    title: string
    imageSrc: StaticImageData
    price: number
    quantity: number
  }
}) => {
  return (
    <div className={styles.cartItem}>
      <Image src={item.imageSrc} alt={item.title} />
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
