import Image from 'next/image'
import styles from './page.module.css'
import { client } from '@/lib/contentful'

export async function getData() {
  const data = await client
    .getEntry('23ajyJGN6FZHErhMhAjYLu')
    .then((entry: any) => entry)
    .catch(console.error)
  return data
}

export default async function Home() {
  const data = await getData()
  console.log(data)

  return (
    <main className={styles.main}>
      <p>{data.fields.title}</p>
    </main>
  )
}
