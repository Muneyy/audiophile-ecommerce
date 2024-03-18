'use client'

import React, { useContext } from 'react'
import styles from './CartItem.module.sass'
import Image from 'next/image'
import commafy from '@/utils/commafy'
import TrashIcon from '@/svgs/TrashIcon'
import { CartContext } from '@/context/CartContext'

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
  const { deleteFromCart } = useContext(CartContext)

  const handleDeleteClick = () => {
    deleteFromCart(item.title)
  }

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
        <div className={styles.rowGroup}>
          <h3>{item.title}</h3>
          <button
            type="button"
            aria-label="remove product"
            onClick={handleDeleteClick}
          >
            <TrashIcon />
          </button>
        </div>
        <div className={styles.rowGroup}>
          <span>${commafy(item.price)}</span>
          <span>x{item.quantity}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
