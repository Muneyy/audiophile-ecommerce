'use client'

import React, { useContext, useState } from 'react'
import styles from './CartUtils.module.sass'
import commafy from '@/utils/commafy'
import { CartContext } from '@/context/CartContext'

const CartUtils = ({
  title,
  price,
  imageProduct,
}: {
  title: string
  price: number
  imageProduct: {
    title: string
    url: string
  }
}) => {
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart({
      title,
      price,
      quantity,
      image: imageProduct.url,
    })
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  return (
    <>
      <span className={styles.price}>${commafy(price)}</span>
      <div className={styles.utilsContainer}>
        <div className={styles.quantity}>
          <button
            type="button"
            aria-label="decrease quantity"
            onClick={handleDecreaseQuantity}
          >
            <span>-</span>
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            aria-label="increase quantity"
            onClick={handleIncreaseQuantity}
          >
            <span>+</span>
          </button>
        </div>
        <button
          type="button"
          aria-label={`Add ${title} to cart`}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </>
  )
}

export default CartUtils
