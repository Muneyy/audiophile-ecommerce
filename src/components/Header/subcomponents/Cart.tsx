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
  const { cart } = useContext(CartContext)

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
