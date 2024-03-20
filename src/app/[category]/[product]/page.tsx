import React from 'react'
import styles from './page.module.sass'

import BackButton from '@/components/shared/BackButton'
import ImageAndDescription from '@/components/shared/ImageAndDescription'
import FeaturesAndBox from '@/components/PDP/FeaturesAndBox'
import ImageGallery from '@/components/PDP/ImageGallery'
import fetchGql from '@/lib/fetchGql'
import { notFound } from 'next/navigation'
import Recommendations from '@/components/PDP/Recommendations'
import { queryProduct } from '@/lib/graphqlQueries'
import { TypePDPContent } from '@/lib/types'

const Page = async ({
  params,
}: {
  params: {
    category: string
    product: string
  }
}) => {
  const fetchedData: TypePDPContent = await fetchGql(
    queryProduct,
    params.product,
    params.category
  )

  if (!fetchedData || fetchedData.productCollection.items.length === 0) {
    notFound()
  }

  const {
    title,
    description,
    price,
    apiRoute,
    category,
    features,
    includedItems,
    imageMain,
    imageGalleryCollection,
  } = fetchedData.productCollection.items[0]

  return (
    <main className={styles.main}>
      <BackButton />
      <ImageAndDescription
        imageProduct={imageMain}
        title={title}
        description={description}
        apiRoute={apiRoute}
        category={category}
        price={price}
      />
      <FeaturesAndBox features={features} includedItems={includedItems} />
      <ImageGallery imageGallery={imageGalleryCollection.items} title={title} />
      <Recommendations />
    </main>
  )
}

export default Page
