import React from 'react'
import styles from './BannerSection.module.sass'
import RedirectButton from '@/components/shared/RedirectButton'

const BANNER_SPAN = 'New Product'

const BannerSection = ({
  bannerContent,
}: {
  bannerContent: {
    title: string
    description: string
    urlDesktop: string
    urlMobile: string
  }
}) => {
  const { title, description } = bannerContent
  return (
    <section className={`${styles.sectionBanner} banner-background`}>
      <span>{BANNER_SPAN}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <RedirectButton
        link={`/headphones/${title}`}
        text="SEE PRODUCT"
        ariaLabel={`go to ${title} product page`}
      />
    </section>
  )
}

export default BannerSection
