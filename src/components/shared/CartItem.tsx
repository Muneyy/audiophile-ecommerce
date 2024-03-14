'use client'

import styles from './CartItem.module.sass'
import Image from 'next/image'
import commafy from '@/utils/commafy'
import Link from 'next/link'
import { TypeCartProduct } from '@/lib/types'
import CartUtils from './CartUtils'

interface TypeCartItem {
  item: TypeCartProduct
  closeCartOnClick?: () => void
}

const CartItem = ({ item, closeCartOnClick }: TypeCartItem) => {
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
        <div className={styles.columnGroup}>
          <Link
            onClick={closeCartOnClick}
            href={`/${item.category}/${item.apiRoute}`}
          >
            <h3>{item.title}</h3>
          </Link>
          <span>${commafy(item.price)}</span>
        </div>
        <div className={styles.quantityContainer}>
          <CartUtils
            title={item.title}
            price={item.price}
            apiRoute={item.apiRoute}
            category={item.category}
            imageProduct={{
              title: item.title,
              url: item.image,
            }}
            forCartItem={true}
          />
        </div>
      </div>
    </div>
  )
}

export default CartItem
