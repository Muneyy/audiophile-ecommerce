'use client'

import React, { useContext } from 'react'
import styles from './Cart.module.sass'
import CartItem from '@/components/shared/CartItem'
import RedirectButton from '@/components/shared/RedirectButton'
import { CartContext } from '@/context/CartContext'

interface TypeCart {
  cartRef: React.RefObject<HTMLDivElement>
  handleCartClick: () => void
}

const Cart = ({ cartRef, handleCartClick }: TypeCart) => {
  const { cart, cartTotalPrice, deleteFromCart } = useContext(CartContext)

  // This function deletes all items in the cart
  const handleClearCart = () => {
    cart.forEach((item) => deleteFromCart(item.title))
  }

  return (
    <aside ref={cartRef} className={styles.cartContainer}>
      <div>
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
        <div className={styles.itemsContainer}>
          {cart.map((item) => (
            <CartItem
              key={item.title}
              item={item}
              closeCartOnClick={handleCartClick}
            />
          ))}
        </div>
      </div>
      <div className={styles.bottomDivider}>
        {cart.length <= 0 ? (
          <p className={styles.emptyParagraph}>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.totalContainer}>
              <span className={styles.totalPrice}>Total</span>
              <span>${cartTotalPrice}</span>
            </div>
            <RedirectButton
              link={'/checkout'}
              ariaLabel={'Go to checkout page'}
              text={'CHECKOUT'}
              handleCartClick={handleCartClick}
            />
          </>
        )}
      </div>
    </aside>
  )
}

export default Cart
