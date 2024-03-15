import React from 'react'
import styles from './page.module.sass'

import BackButton from '@/components/shared/BackButton'
import ImageAndDescription from '@/components/shared/ImageAndDescription'
import FeaturesAndBox from '@/components/PDP/FeaturesAndBox'
import ImageGallery from '@/components/PDP/ImageGallery'
// import Recommendations from '@/components/PDP/Recommendations'
// import { fetchedDataForPDP } from '@/mockRequests/mockRequests'
import fetchGql from '@/lib/fetchGql'
import { notFound } from 'next/navigation'

// const fetchedData = fetchedDataForPDP

type TypePDPContent = {
  productCollection: {
    items: {
      title: string
      apiRoute: string
      description: string
      price: number
      features: string
      includedItems: {
        box: {
          name: string
          quantity: number
        }[]
      }
      imageThumbnail: {
        title: string
        url: string
      }
      imageGalleryCollection: {
        items: {
          title: string
          url: string
        }[]
      }
      imageMain: {
        title: string
        url: string
      }
    }[]
  }
}

const Page = async ({
  params,
}: {
  params: {
    category: string
    product: string
  }
}) => {
  const queryProduct = `
  query GetProducts($name: String!) {
    productCollection(where: { apiRoute_contains: $name }) {
      items {
        title
        apiRoute
        description
        price
        features
        includedItems
        imageThumbnail {
          title
          url
        }
        imageGalleryCollection {
          items {
            title
            url
          }
        }
        imageMain {
          title
          url
        }
      }
    }
  }
`
  const fetchedData: TypePDPContent = await fetchGql(
    queryProduct,
    params.product
  )

  if (!fetchedData || fetchedData.productCollection.items.length === 0) {
    notFound()
  }

  const {
    title,
    description,
    price,
    features,
    includedItems,
    imageMain,
    // imageThumbnail,
    imageGalleryCollection,
  } = fetchedData.productCollection.items[0]

  return (
    <main className={styles.main}>
      <BackButton />
      <ImageAndDescription
        imageProduct={imageMain}
        title={title}
        description={description}
        price={price}
      />
      <FeaturesAndBox features={features} includedItems={includedItems} />
      <ImageGallery imageGallery={imageGalleryCollection.items} title={title} />
      {/* <Recommendations
        imageRecommendations={imageRecommendations}
        title={title}
        params={params}
      /> */}
    </main>
  )
}

export default Page
