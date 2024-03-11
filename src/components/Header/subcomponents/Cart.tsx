import React from 'react'
import styles from './Cart.module.sass'
import { cartData } from '@/mockRequests/mockRequests'
import CartItem from '@/components/shared/CartItem'
import Link from 'next/link'

const cart = cartData.cart

const Cart = ({ cartRef }: { cartRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <aside ref={cartRef} className={styles.cartContainer}>
      <span>Cart</span>
      {cart.map((item) => (
        <CartItem key={item.title} item={item} />
      ))}
      <Link href={'/checkout'}>
        <button type="button" aria-label="Go to checkout page">
          CHECKOUT
        </button>
      </Link>
    </aside>
  )
}

export default Cart
