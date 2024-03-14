'use server'

import { getClient } from '@/apollo/ApolloClient'

export default async function fetchGql(
  query: any,
  name?: string | null,
  category?: string | null
) {
  try {
    // const response = await fetch(
    //   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ query, variables: { name, category } }),
    //   }
    // )
    // const data = await response.json()
    // return data.data
    const client = getClient()
    const data = await client.query({
      query,
      variables: { name, category },
    })
    return data.data
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
