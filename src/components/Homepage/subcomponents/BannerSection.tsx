import React from 'react'
import styles from './BannerSection.module.sass'
import RedirectButton from '@/components/shared/RedirectButton'
import { TypeBannerContent } from '@/lib/types'

const BANNER_SPAN = 'New Product'

const BannerSection = ({
  bannerContent,
}: {
  bannerContent: TypeBannerContent
}) => {
  const { title, bannerDescription, apiRoute, category } = bannerContent
  return (
    <section className={`${styles.sectionBanner} banner-background`}>
      <div className={styles.wrapper}>
        <span>{BANNER_SPAN}</span>
        <h1>{title}</h1>
        <p>{bannerDescription}</p>
        <RedirectButton
          link={`/${category}/${apiRoute}`}
          text="SEE PRODUCT"
          ariaLabel={`go to ${title} product page`}
        />
      </div>
    </section>
  )
}

export default BannerSection
