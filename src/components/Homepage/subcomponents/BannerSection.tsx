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
    apiRoute: string
    urlDesktop: string
    urlMobile: string
  }
}) => {
  const { title, description, apiRoute } = bannerContent
  return (
    <section className={`${styles.sectionBanner} banner-background`}>
      <span>{BANNER_SPAN}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <RedirectButton
        link={`/headphones/${apiRoute}`}
        text="SEE PRODUCT"
        ariaLabel={`go to ${title} product page`}
      />
    </section>
  )
}

export default BannerSection
