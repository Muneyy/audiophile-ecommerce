import React from 'react'
import styles from './FeaturedSection.module.sass'
import Image from 'next/image'

import circlesPattern from '@/svgs/CirclesPattern.svg'
import RedirectButton from '@/components/shared/RedirectButton'

const BUTTON_TEXT = 'SEE PRODUCT'

interface TypesFeaturedSection {
  promotionProducts: {
    title: string
    description?: string
    apiRoute: string
    urlDesktop: string
    urlMobile: string
  }[]
}

const FeaturedSection = ({ promotionProducts }: TypesFeaturedSection) => {
  const [firstProduct, secondProduct, thirdProduct] = promotionProducts

  return (
    <>
      <style scoped>
        {`
        .featured-two-bg {
          background-image: url(${secondProduct.urlDesktop});
        }
        @media (max-width: 768px) {
          .featured-two-bg {
            background-image: url(${secondProduct.urlMobile});
          }
        }
      `}
      </style>
      <section className={styles.sectionFeatured}>
        <div
          style={{ backgroundImage: `url(${circlesPattern.src})` }}
          className={styles.cardOne}
        >
          <div className={styles.imageContainer}>
            <Image
              src={firstProduct.urlDesktop}
              alt="featured product"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={styles.textContainer}>
            <h2>{firstProduct.title}</h2>
            <p>{firstProduct.description}</p>
            <RedirectButton
              link={`/speakers/${firstProduct.apiRoute}`}
              text={BUTTON_TEXT}
              ariaLabel={`go to ${firstProduct.title} product page`}
            />
          </div>
        </div>
        <div className={`${styles.cardTwo} featured-two-bg`}>
          <h2>{secondProduct.title}</h2>
          <RedirectButton
            link={`/speakers/${secondProduct.apiRoute}`}
            text={BUTTON_TEXT}
            ariaLabel={`go to ${secondProduct.title} product page`}
          />
        </div>
        <div className={styles.cardThree}>
          <div className={styles.imageContainer}>
            <Image
              src={thirdProduct.urlDesktop}
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
            <h2>{thirdProduct.title}</h2>
            <RedirectButton
              link={`/earphones/${thirdProduct.apiRoute}`}
              text={BUTTON_TEXT}
              ariaLabel={`go to ${thirdProduct.title} product page`}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedSection
