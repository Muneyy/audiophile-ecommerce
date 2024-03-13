import React from 'react'
import styles from './Cart.module.sass'
import { cartData } from '@/mockRequests/mockRequests'
import CartItem from '@/components/shared/CartItem'
import RedirectButton from '@/components/shared/RedirectButton'

const cart = cartData.cart

const Cart = ({
  cartRef,
  handleCartClick,
}: {
  cartRef: React.RefObject<HTMLDivElement>
  handleCartClick: () => void
}) => {
  return (
    <aside ref={cartRef} className={styles.cartContainer}>
      <span>Cart</span>
      {cart.map((item) => (
        <CartItem key={item.title} item={item} />
      ))}
      <RedirectButton
        link={'/checkout'}
        ariaLabel={'Go to checkout page'}
        text={'CHECKOUT'}
        handleCartClick={handleCartClick}
      />
    </aside>
  )
}

export default Cart
