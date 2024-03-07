import React from 'react'
import styles from './BannerSection.module.sass'

const BANNER_SPAN = 'New Product'
const BANNER_TITLE = 'XX99 Mark II Headphones'
const BANNER_DESC =
  'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'

const BannerSection = () => {
  return (
    <section className={`${styles.sectionBanner} banner-background`}>
      <span>{BANNER_SPAN}</span>
      <h1>{BANNER_TITLE}</h1>
      <p>{BANNER_DESC}</p>
      <button type="button" aria-label={`go to ${BANNER_TITLE} product page`}>
        SEE PRODUCT
      </button>
    </section>
  )
}

export default BannerSection