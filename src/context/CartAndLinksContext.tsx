'use client'

import fetchGql from '@/lib/fetchGql'
import { queryForNavLinks } from '@/lib/graphqlQueries'
import { CartAndLinksContextType } from '@/lib/types'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

export const CartAndLinksContext = createContext<CartAndLinksContextType>({
  navLinks: [],
})

export default function CartAndLinksProvider({
  children,
}: {
  children: ReactNode
}) {
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

  const value = useMemo(() => ({ navLinks }), [navLinks])

  return (
    <CartAndLinksContext.Provider value={value}>
      {children}
    </CartAndLinksContext.Provider>
  )
}
