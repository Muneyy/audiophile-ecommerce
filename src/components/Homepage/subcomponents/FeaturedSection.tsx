import React from 'react'
import styles from './FeaturedSection.module.sass'
import Image from 'next/image'

import bgCardThree from '@/assets/image-earphones-yx1.jpg'
import featuredSpeakers from '@/assets/image-speaker-zx9.png'
import circlesPattern from '@/svgs/CirclesPattern.svg'
import Link from 'next/link'

const FEATURED_TITLE = 'ZX9 SPEAKER'
const FEATURED_DESC =
  'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'

const FEATURED_TITLE_TWO = 'ZX7 Speaker'
const FEATURED_TITLE_THREE = 'YX1 Earphones'

const FeaturedSection = () => {
  return (
    <section className={styles.sectionFeatured}>
      <div
        style={{ backgroundImage: `url(${circlesPattern.src})` }}
        className={styles.cardOne}
      >
        <div className={styles.imageContainer}>
          <Image
            src={featuredSpeakers}
            alt="featured product"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className={styles.textContainer}>
          <h2>{FEATURED_TITLE}</h2>
          <p>{FEATURED_DESC}</p>
          <Link href={`/speakers/${FEATURED_TITLE}`}>
            <button
              type="button"
              aria-label={`go to ${FEATURED_TITLE} product page`}
            >
              See Product
            </button>
          </Link>
        </div>
      </div>
      <div className={`${styles.cardTwo} featured-two-bg`}>
        <h2>{FEATURED_TITLE_TWO}</h2>
        <Link href={`/speakers/${FEATURED_TITLE_TWO}`}>
          <button
            type="button"
            aria-label={`go to ${FEATURED_TITLE_TWO} product page`}
          >
            See Product
          </button>
        </Link>
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
          <Link href={`/earphones/${FEATURED_TITLE_THREE}`}>
            <button type="button" aria-label="go to YX1 Earphones product page">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
