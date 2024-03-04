// const contentful = require('contentful')

// export const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// })

export default async function fetchGql(query: string) {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      }
    )

    if (!response.ok) return undefined

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
