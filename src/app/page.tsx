// import fetchGql from '@/lib/fetchGql'
// import { notFound } from 'next/navigation'
import styles from './page.module.sass'
import bgDesktop from '@/assets/image-hero.jpg'
import bgMobile from '@/assets/image-header.jpg'

// async function getData() {
//   const query = `
//     {
//       productCollection(where: { title_contains: "Headphones" }) {
//         items {
//           title
//           description
//         }
//       }
//     }
//   `

//   try {
//     const response = await fetchGql(query)
//     return response.data
//   } catch (error: unknown) {
//     // throw new Error(`Error: ${error}`)
//     console.error(error)
//   }
// }

const BANNER_SPAN = 'New Product'
const BANNER_TITLE = 'XX99 Mark II Headphones'
const BANNER_DESC =
  'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'

export default async function Home() {
  const dynamicBackgroundImageStyle = () => {
    // dynamically change url of background-image of hero banner
    // according to screen width
    return (
      <style scoped>
        {`
      .image-handler {
        background-image: url(${bgDesktop.src});
      }
      @media (max-width: 1200px) {
        .image-handler {
          background-image: url(${bgMobile.src});
        }
      }
    `}
      </style>
    )
  }

  return (
    <main className={styles.main}>
      {dynamicBackgroundImageStyle()}
      <section className={`${styles.sectionBanner} image-handler`}>
        <span>{BANNER_SPAN}</span>
        <h1>{BANNER_TITLE}</h1>
        <p>{BANNER_DESC}</p>
        <button type="button" aria-label={`go to ${BANNER_TITLE} product page`}>
          SEE PRODUCT
        </button>
      </section>
    </main>
  )
}
