'use client'

import React, { useContext, useState } from 'react'
import styles from './CartUtils.module.sass'
import commafy from '@/utils/commafy'
import { CartContext } from '@/context/CartContext'

interface TypeCartUtils {
  title: string
  price: number
  apiRoute: string
  category: string
  imageProduct: {
    title: string
    url: string
  }
  forCartItem?: boolean
}

const CartUtils = ({
  title,
  price,
  apiRoute,
  category,
  imageProduct,
  forCartItem,
}: TypeCartUtils) => {
  const [quantity, setQuantity] = useState(1)

  const { cart, addToCart, decrementFromCart, incrementToCart } =
    useContext(CartContext)

  const handleAddToCart = () => {
    addToCart({
      title,
      price,
      apiRoute,
      category,
      quantity,
      image: imageProduct.url,
    })
  }

  const handleDecreaseQuantity = () => {
    if (forCartItem) {
      decrementFromCart(title)
      return
    }
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleIncreaseQuantity = () => {
    if (forCartItem) {
      incrementToCart(title)
      return
    }
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const renderQuantity = () => {
    if (forCartItem) {
      return <span>{cart.find((item) => item.title === title)?.quantity}</span>
    }
    return <span>{quantity}</span>
  }

  return (
    <>
      {!forCartItem && <span className={styles.price}>${commafy(price)}</span>}
      <div className={styles.utilsContainer}>
        <div className={styles.quantity}>
          <button
            type="button"
            aria-label="decrease quantity"
            onClick={handleDecreaseQuantity}
          >
            <span>-</span>
          </button>
          {renderQuantity()}
          <button
            type="button"
            aria-label="increase quantity"
            onClick={handleIncreaseQuantity}
          >
            <span>+</span>
          </button>
        </div>
        {!forCartItem && (
          <button
            type="button"
            aria-label={`Add ${title} to cart`}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </>
  )
}

export default CartUtils
