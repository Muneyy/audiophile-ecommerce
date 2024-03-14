import React from 'react'
import bgFeaturedTwoDesktop from '@/assets/zx7-desktop.jpg'
import bgFeaturedTwoMobile from '@/assets/zx7-mobile.jpg'
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
      bannerDescription
      categories
      categoriesImagesCollection {
        items {
          title
          description
          url
        }
      }
      promotionProducts
      bannerImageCollection {
        items {
          title
          description
          url
        }
      }
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
    bannerTitle: string
    bannerDescription: string
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
    bannerImageCollection: {
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
  const { bannerImageCollection, promotionProducts } =
    fetchedData.homepageContent
  const bgBannerDesktop = bannerImageCollection.items[0].url
  const bgBannerMobile = bannerImageCollection.items[1].url

  const dynamicBackgroundImagesStyle = () => {
    // dynamically change url of background-image of hero banner
    // according to screen width
    return (
      <style scoped>
        {`
      .banner-background {
        background-image: url(${bgBannerDesktop});
      }
      .featured-two-bg {
        background-image: url(${bgFeaturedTwoDesktop.src});
      }
      @media (max-width: 1200px) {
        .banner-background {
          background-image: url(${bgBannerMobile});
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
      <FeaturedSection promotionProducts={promotionProducts.items} />
    </main>
  )
}

export default Homepage
