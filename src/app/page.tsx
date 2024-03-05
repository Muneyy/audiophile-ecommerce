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
import bgBannerDesktop from '@/assets/image-hero.jpg'
import bgBannerMobile from '@/assets/image-header.jpg'
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

import bgFeaturedTwoDesktop from '@/assets/zx7-desktop.jpg'
import bgFeaturedTwoMobile from '@/assets/zx7-mobile.jpg'
const FEATURED_TITLE_TWO = 'ZX7 Speaker'

import bgCardThree from '@/assets/image-earphones-yx1.jpg'
const FEATURED_TITLE_THREE = 'YX1 Earphones'

export default async function Home() {
  const dynamicBackgroundImagesStyle = () => {
    // dynamically change url of background-image of hero banner
    // according to screen width
    return (
      <style scoped>
        {`
      .banner-background {
        background-image: url(${bgBannerDesktop.src});
      }
      .featured-two-bg {
        background-image: url(${bgFeaturedTwoDesktop.src});
      }
      @media (max-width: 1200px) {
        .banner-background {
          background-image: url(${bgBannerMobile.src});
        }

      }
      @media (max-width: 768px) {
        .featured-two-bg {
          background-image: url(${bgFeaturedTwoMobile.src});
        }
      }
    `}
      </style>
    )
  }

  return (
    <main className={styles.main}>
      {dynamicBackgroundImagesStyle()}
      <section className={`${styles.sectionBanner} banner-background`}>
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
        <div className={`${styles.cardTwo} featured-two-bg`}>
          <h2>{FEATURED_TITLE_TWO}</h2>
          <button
            type="button"
            aria-label={`go to ${FEATURED_TITLE_TWO} product page`}
          >
            See Product
          </button>
        </div>
        <div className={styles.cardThree}>
          <div className={styles.imageContainer}>
            <Image
              src={bgCardThree}
              alt="featured product"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{FEATURED_TITLE_THREE}</h2>
            <button type="button" aria-label="go to YX1 Earphones product page">
              See Product
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
