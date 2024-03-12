import React from 'react'
import styles from './FeaturedSection.module.sass'
import Image from 'next/image'

import bgCardThree from '@/assets/image-earphones-yx1.jpg'
import featuredSpeakers from '@/assets/image-speaker-zx9.png'
import circlesPattern from '@/svgs/CirclesPattern.svg'
import RedirectButton from '@/components/shared/RedirectButton'

const FEATURED_TITLE = 'ZX9 SPEAKER'
const FEATURED_DESC =
  'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'

const FEATURED_TITLE_TWO = 'ZX7 Speaker'
const FEATURED_TITLE_THREE = 'YX1 Earphones'

const BUTTON_TEXT = 'SEE PRODUCT'

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
          <RedirectButton
            link={`/speakers/${FEATURED_TITLE}`}
            text={BUTTON_TEXT}
            ariaLabel={`go to ${FEATURED_TITLE} product page`}
          />
        </div>
      </div>
      <div className={`${styles.cardTwo} featured-two-bg`}>
        <h2>{FEATURED_TITLE_TWO}</h2>
        <RedirectButton
          link={`/speakers/${FEATURED_TITLE_TWO}`}
          text={BUTTON_TEXT}
          ariaLabel={`go to ${FEATURED_TITLE_TWO} product page`}
        />
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
          <RedirectButton
            link={`/earphones/${FEATURED_TITLE_THREE}`}
            text={BUTTON_TEXT}
            ariaLabel={`go to ${FEATURED_TITLE_THREE} product page`}
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
