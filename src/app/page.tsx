import fetchGql from '@/lib/fetchGql'
import styles from './page.module.sass'
import { notFound } from 'next/navigation'

async function getData() {
  const query = `
    {
      productCollection(where: { title_contains: "Headphones" }) {
        items {
          title
          description
        }
      }
    }
  `

  try {
    const response = await fetchGql(query)
    return response.data
  } catch (error: unknown) {
    // throw new Error(`Error: ${error}`)
    console.error(error)
  }
}

export default async function Home() {
  const data = await getData()

  if (!data) {
    return notFound()
  }

  console.log(data)
  if (data) {
    return (
      <main className={styles.main}>
        <p>{data.productCollection.items[0].title}</p>
      </main>
    )
  }
}
