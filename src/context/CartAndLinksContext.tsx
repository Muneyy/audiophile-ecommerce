'use client'

import fetchGql from '@/lib/fetchGql'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

const queryForNavLinks = `
{
  navLinks(id: "7vaxvV5cJOEWEYmkxfNzvS") {
    links
  }
}
`
export const CartAndLinksContext = createContext({
  navLinks: [],
})

export default function CartAndLinksProvider({
  children,
}: {
  children: ReactNode
}) {
  //   const [cart, setCart] = useState([])
  const [navLinks, setNavLinks] = useState([])

  useEffect(() => {
    async function getLinks() {
      try {
        const data = await fetchGql(queryForNavLinks)
        return data.data
      } catch (err: unknown) {
        throw new Error(`Error fetching data: ${err}`)
      }
    }
    getLinks().then((data) => setNavLinks(data.navLinks.links))
  })

  const value = useMemo(() => ({ navLinks }), [navLinks])

  return (
    <CartAndLinksContext.Provider value={value}>
      {children}
    </CartAndLinksContext.Provider>
  )
}
