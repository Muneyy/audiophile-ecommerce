import React from 'react'
import bgBannerDesktop from '@/assets/image-hero.jpg'
import bgBannerMobile from '@/assets/image-header.jpg'
import bgFeaturedTwoDesktop from '@/assets/zx7-desktop.jpg'
import bgFeaturedTwoMobile from '@/assets/zx7-mobile.jpg'
import BannerSection from './subcomponents/BannerSection'
import CategoriesSection from './subcomponents/CategoriesSection'
import FeaturedSection from './subcomponents/FeaturedSection'
import styles from './Homepage.module.sass'

const Homepage = () => {
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
      <BannerSection />
      <div className={styles.categoriesWidth}>
        <CategoriesSection />
      </div>
      <FeaturedSection />
    </main>
  )
}

export default Homepage
