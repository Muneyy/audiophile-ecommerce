import Homepage from '@/components/Homepage/Homepage'
import styles from './page.module.sass'

export default async function Home() {
  return (
    <main className={styles.main}>
      <Homepage />
    </main>
  )
}
