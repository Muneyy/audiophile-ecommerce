/* eslint-disable no-unused-vars */
'use client'

import fetchGql from '@/lib/fetchGql'
import { queryForNavLinks } from '@/lib/graphqlQueries'
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
  navLinks: string[]
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: (product: TypeCartProduct) => {},
  deleteFromCart: (title: string) => {},
  navLinks: [],
})

export default function CartProvider({ children }: { children: ReactNode }) {
  const [navLinks, setNavLinks] = useState<string[]>([])

  useEffect(() => {
    const getLinks = async () => {
      try {
        const storedNavLinks = localStorage.getItem('navLinks')
        if (storedNavLinks) {
          setNavLinks(JSON.parse(storedNavLinks))
        } else {
          const data = await fetchGql(queryForNavLinks)
          const fetchedLinks = data.navLinks.links
          localStorage.setItem('navLinks', JSON.stringify(fetchedLinks))
          setNavLinks(fetchedLinks)
        }
      } catch (err) {
        throw new Error(`Error fetching data: ${err}`)
      }
    }

    getLinks()
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
      const newCart = [...prevCart.filter((product) => product.title !== title)]
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }, [])

  const value = useMemo(
    () => ({ navLinks, cart, addToCart, deleteFromCart }),
    [navLinks, cart, addToCart, deleteFromCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
