import React from 'react'
import styles from './page.module.sass'
import { fetchedDataForPDP } from '@/app/mockRequests/mockRequests'

import BackButton from '@/components/PDP/BackButton'
import ImageAndDescription from '@/components/PDP/ImageAndDescription'
import FeaturesAndBox from '@/components/PDP/FeaturesAndBox'
import ImageGallery from '@/components/PDP/ImageGallery'
import Recommendations from '@/components/PDP/Recommendations'

const fetchedData = fetchedDataForPDP

const Page = () => {
  const {
    title,
    description,
    price,
    features,
    includedItems,
    imageProduct,
    imageGallery,
    imageRecommendations,
  } = fetchedData

  return (
    <main className={styles.main}>
      <BackButton />
      <ImageAndDescription
        imageProduct={imageProduct}
        title={title}
        description={description}
        price={price}
      />
      <FeaturesAndBox features={features} includedItems={includedItems} />
      <ImageGallery imageGallery={imageGallery} title={title} />
      <Recommendations
        imageRecommendations={imageRecommendations}
        title={title}
      />
    </main>
  )
}

export default Page
