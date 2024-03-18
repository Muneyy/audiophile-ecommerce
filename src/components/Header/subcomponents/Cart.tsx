'use client'

import React, { useContext } from 'react'
import styles from './Cart.module.sass'
import CartItem from '@/components/shared/CartItem'
import RedirectButton from '@/components/shared/RedirectButton'
import { CartContext } from '@/context/CartContext'

const Cart = ({
  cartRef,
  handleCartClick,
}: {
  cartRef: React.RefObject<HTMLDivElement>
  handleCartClick: () => void
}) => {
  const { cart, deleteFromCart } = useContext(CartContext)

  const handleClearCart = () => {
    cart.forEach((item) => deleteFromCart(item.title))
  }

  return (
    <aside ref={cartRef} className={styles.cartContainer}>
      <div className={styles.header}>
        <span>Cart</span>{' '}
        {cart.length > 0 && (
          <button
            type="button"
            aria-label="clear all contents of cart"
            onClick={handleClearCart}
          >
            <p>Clear cart</p>
          </button>
        )}
      </div>
      {cart.map((item) => (
        <CartItem key={item.title} item={item} />
      ))}
      {cart.length <= 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <RedirectButton
          link={'/checkout'}
          ariaLabel={'Go to checkout page'}
          text={'CHECKOUT'}
          handleCartClick={handleCartClick}
        />
      )}
    </aside>
  )
}

export default Cart
