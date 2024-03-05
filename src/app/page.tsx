// import fetchGql from '@/lib/fetchGql'
// import { notFound } from 'next/navigation'

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

import styles from './page.module.sass'
import bgDesktop from '@/assets/image-hero.jpg'
import bgMobile from '@/assets/image-header.jpg'
const BANNER_SPAN = 'New Product'
const BANNER_TITLE = 'XX99 Mark II Headphones'
const BANNER_DESC =
  'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'

import categoryEarphones from '@/assets/categories-earphones.png'
import categoryHeadphones from '@/assets/categories-headphones.png'
import categorySpeakers from '@/assets/categories-speakers.png'
import Image from 'next/image'
import RightArrow from '@/svgs/RightArrow'
const CATEGORIES_LIST = ['Headphones', 'Speakers', 'Earphones']

const FEATURED_TITLE = 'ZX9 SPEAKER'
const FEATURED_DESC =
  'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'

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
      <section className={styles.sectionCategories}>
        {CATEGORIES_LIST.map((category) => (
          <div className={styles.categoryCard} key={category}>
            <div className={styles.imageContainer}>
              <Image
                src={
                  category === 'Headphones'
                    ? categoryHeadphones.src
                    : category === 'Speakers'
                      ? categorySpeakers.src
                      : categoryEarphones.src
                }
                alt={`${category} category`}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <h2>{category}</h2>
            <button
              type="button"
              aria-label={`go to ${category} category page`}
            >
              SHOP
              <RightArrow />
            </button>
          </div>
        ))}
      </section>
      <section className={styles.sectionFeatured}>
        <div className={styles.cardOne}>
          <div className={styles.imageContainer}>
            <Image
              src={categorySpeakers}
              alt="featured product"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{FEATURED_TITLE}</h2>
            <p>{FEATURED_DESC}</p>
            <button
              type="button"
              aria-label={`go to ${FEATURED_TITLE} product page`}
            >
              See Product
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
