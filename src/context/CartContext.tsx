/* eslint-disable no-unused-vars */
'use client'

import fetchGql from '@/lib/fetchGql'
import queryForNavLinks from '@/lib/graphqlQueries/queryForNavLinks'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { TypeCartProduct } from '@/lib/types'

type CartContextType = {
  cart: TypeCartProduct[]
  addToCart: (product: TypeCartProduct) => void
  deleteFromCart: (title: string) => void
  decrementFromCart: (title: string) => void
  incrementToCart: (title: string) => void
  navLinks: string[]
  cartQuantity: number
  cartTotalPrice: number
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: (product: TypeCartProduct) => {},
  deleteFromCart: (title: string) => {},
  decrementFromCart: (title: string) => {},
  incrementToCart: (title: string) => {},
  navLinks: [],
  cartQuantity: 0,
  cartTotalPrice: 0,
})

export default function CartProvider({ children }: { children: ReactNode }) {
  const [navLinks, setNavLinks] = useState<string[]>([])

  useEffect(() => {
    const getLinks = async () => {
      try {
        const data = await fetchGql(queryForNavLinks)
        const fetchedLinks = data.navLinks.links
        setNavLinks(fetchedLinks)
      } catch (err) {
        throw new Error(`Error fetching data: ${err}`)
      }
    }
    getLinks()
  }, [])

  useEffect(() => {
    console.log('context rerenders')
  }, [])

  const [cart, setCart] = useState<TypeCartProduct[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        setCart(JSON.parse(storedCart))
      }
    }
  }, [])

  const addToCart = useCallback((product: TypeCartProduct) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.title === product.title)

      if (index !== -1) {
        return prevCart.map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      }
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'cart',
          JSON.stringify([...prevCart, product])
        )
      }
      return [...prevCart, product]
    })
  }, [])

  const deleteFromCart = useCallback((title: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((product) => product.title !== title)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }, [])

  const decrementFromCart = useCallback((title: string) => {
    setCart((prevCart) => {
      const newCart = prevCart
        .map((item) =>
          item.title === title ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }, [])

  const incrementToCart = useCallback((title: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }, [])

  const cartTotalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  const value = useMemo(
    () => ({
      navLinks,
      cart,
      addToCart,
      deleteFromCart,
      decrementFromCart,
      incrementToCart,
      cartQuantity,
      cartTotalPrice,
    }),
    [
      navLinks,
      cart,
      addToCart,
      deleteFromCart,
      decrementFromCart,
      incrementToCart,
      cartQuantity,
      cartTotalPrice,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
