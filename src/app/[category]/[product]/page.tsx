import React from 'react'
import styles from './page.module.sass'

import imageProduct from '@/assets/marktwoheadphones/image-product.jpg'
import imageGallery1 from '@/assets/marktwoheadphones/image-gallery-1.jpg'
import imageGallery2 from '@/assets/marktwoheadphones/image-gallery-2.jpg'
import imageGallery3 from '@/assets/marktwoheadphones/image-gallery-3.jpg'

import imageRecommendation1 from '@/assets/recommendations/image-xx99-mark-one-headphones.jpg'
import imageRecommendation2 from '@/assets/recommendations/image-xx59-headphones.jpg'
import imageRecommendation3 from '@/assets/recommendations/image-zx9-speaker.jpg'
import BackButton from '@/components/shared/BackButton'
import ImageAndDescription from '@/components/shared/ImageAndDescription'
import FeaturesAndBox from '@/components/PDP/FeaturesAndBox'
import ImageGallery from '@/components/PDP/ImageGallery'
import Recommendations from '@/components/PDP/Recommendations'
import commafy from '@/utils/commafy'

const fetchedData = {
  title: 'XX99 Mark II Headphones',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  price: 2999,
  features:
    'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
  includedItems: {
    box: [
      {
        name: 'Headphone unit',
        quantity: 1,
      },
      {
        name: 'Replacement earcups',
        quantity: 2,
      },
      {
        name: 'User manual',
        quantity: 1,
      },
      {
        name: '3.5mm 5m audio cable',
        quantity: 1,
      },
      {
        name: 'Travel bag',
        quantity: 1,
      },
    ],
  },
  imageProduct,
  imageGallery: [imageGallery1, imageGallery2, imageGallery3],
  imageRecommendations: [
    {
      title: 'XX99 Mark I',
      src: imageRecommendation1,
    },
    {
      title: 'XX59',
      src: imageRecommendation2,
    },
    {
      title: 'ZX9 Speaker',
      src: imageRecommendation3,
    },
  ],
}

const Page = ({
  params,
}: {
  params: {
    category: string
  }
}) => {
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
        price={commafy(price)}
      />
      <FeaturesAndBox features={features} includedItems={includedItems} />
      <ImageGallery imageGallery={imageGallery} title={title} />
      <Recommendations
        imageRecommendations={imageRecommendations}
        title={title}
        params={params}
      />
    </main>
  )
}

export default Page
