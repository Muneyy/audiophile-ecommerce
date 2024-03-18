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

type CartContextType = {
  cart: CartProductType[]
  addToCart: (product: CartProductType) => void
  deleteFromCart: (title: string) => void
  navLinks: string[]
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: (product: CartProductType) => {},
  deleteFromCart: (title: string) => {},
  navLinks: [],
})

type CartProductType = {
  title: string
  price: number
  quantity: number
  image: string
}

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

  const [cart, setCart] = useState<CartProductType[]>(() => {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = useCallback((product: CartProductType) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.title === product.title)

      if (index !== -1) {
        return prevCart.map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      }
      return [...prevCart, product]
    })
  }, [])

  const deleteFromCart = useCallback((title: string) => {
    setCart((prevCart) => {
      return [...prevCart.filter((product) => product.title !== title)]
    })
  }, [])

  const value = useMemo(
    () => ({ navLinks, cart, addToCart, deleteFromCart }),
    [navLinks, cart, addToCart, deleteFromCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
