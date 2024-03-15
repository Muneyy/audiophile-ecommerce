import React from 'react'
import BannerSection from './subcomponents/BannerSection'
import CategoriesSection from '../shared/CategoriesSection'
import FeaturedSection from './subcomponents/FeaturedSection'
import styles from './Homepage.module.sass'
import fetchGql from '@/lib/fetchGql'

const queryHomepage = `
{
  homepageContent(id: "7f4y9u2wsYCun1pqLjOJT1") {
    bannerTitle
    promotionProducts
    bannerContent
  }
}
`

type TypeHomepageContent = {
  homepageContent: {
    bannerContent: {
      title: string
      description: string
      urlDesktop: string
      urlMobile: string
    }
    promotionProducts: {
      items: {
        title: string
        description?: string
        urlDesktop: string
        urlMobile: string
      }[]
    }
  }
}

const Homepage = async () => {
  const fetchedData: TypeHomepageContent = await fetchGql(queryHomepage)
  const { bannerContent, promotionProducts } = fetchedData.homepageContent

  const dynamicBackgroundImagesStyle = () => {
    // dynamically change url of background-image of hero banner
    // according to screen width
    return (
      <style scoped>
        {`
      .banner-background {
        background-image: url(${bannerContent.urlDesktop});
      }
      @media (max-width: 1200px) {
        .banner-background {
          background-image: url(${bannerContent.urlMobile});
        }
      }
    `}
      </style>
    )
  }

  return (
    <main className={styles.main}>
      {dynamicBackgroundImagesStyle()}
      <BannerSection bannerContent={bannerContent} />
      <div className={styles.categoriesWidth}>
        <CategoriesSection />
      </div>
      <FeaturedSection promotionProducts={promotionProducts.items} />
    </main>
  )
}

export default Homepage
