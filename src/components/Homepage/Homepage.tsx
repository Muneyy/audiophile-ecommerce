import React from 'react'
import BannerSection from './subcomponents/BannerSection'
import CategoriesSection from '../shared/CategoriesSection'
import FeaturedSection from './subcomponents/FeaturedSection'
import styles from './Homepage.module.sass'
import fetchGql from '@/lib/fetchGql'
import { queryHomepage } from '@/lib/graphqlQueries'
import { TypeHomepageContent } from '@/lib/types'

const Homepage = async () => {
  const fetchedData: TypeHomepageContent = await fetchGql(queryHomepage)
  const { bannerProductReference, promotionProducts } =
    fetchedData.homepageContent

  const dynamicBackgroundImagesStyle = () => {
    // dynamically change url of background-image of hero banner
    // according to screen width
    return (
      <style scoped>
        {`
      .banner-background {
        background-image: url(${bannerProductReference.bannerUrlDesktop.url});
      }
      @media (max-width: 1200px) {
        .banner-background {
          background-image: url(${bannerProductReference.bannerUrlMobile.url});
        }
      }
    `}
      </style>
    )
  }

  return (
    <div className={styles.main}>
      {dynamicBackgroundImagesStyle()}
      <BannerSection bannerContent={bannerProductReference} />
      <div className={styles.categoriesWidth}>
        <CategoriesSection />
      </div>
      <FeaturedSection promotionProducts={promotionProducts.items} />
    </div>
  )
}

export default Homepage
