import React from 'react'
import BannerSection from './subcomponents/BannerSection'
import CategoriesSection from '../shared/CategoriesSection'
import FeaturedSection from './subcomponents/FeaturedSection'
import styles from './Homepage.module.sass'
import fetchGql from '@/lib/fetchGql'

async function getData() {
  const queryHomepage = `
  {
    homepageContent(id: "7f4y9u2wsYCun1pqLjOJT1") {
      bannerTitle
      categories
      categoriesImagesCollection {
        items {
          title
          description
          url
        }
      }
      promotionProducts
      bannerContent
    }
  }
  `
  try {
    const data = await fetchGql(queryHomepage)
    return data.data
  } catch (err: unknown) {
    throw new Error(`Error fetching data: ${err}`)
  }
}
type TypeHomepageContent = {
  homepageContent: {
    bannerContent: {
      title: string
      description: string
      urlDesktop: string
      urlMobile: string
    }
    categories: string[]
    categoriesImagesCollection: {
      items: {
        title: string
        description: string
        url: string
      }[]
    }
    promotionProducts: {
      items: {
        title: string
        description?: string
        urlDesktop: string
        urlMobile: string
      }[]
    }
    promotionImagesCollection: {
      items: {
        title: string
        description: string
        url: string
      }[]
    }
  }
}

const Homepage = async () => {
  const fetchedData: TypeHomepageContent = await getData()
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
