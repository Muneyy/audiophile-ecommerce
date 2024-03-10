import React from 'react'
import styles from './page.module.sass'
import Image from 'next/image'

import imageProduct from '@/assets/marktwoheadphones/image-product.jpg'
import imageGallery1 from '@/assets/marktwoheadphones/image-gallery-1.jpg'
import imageGallery2 from '@/assets/marktwoheadphones/image-gallery-2.jpg'
import imageGallery3 from '@/assets/marktwoheadphones/image-gallery-3.jpg'

import imageRecommendation1 from '@/assets/recommendations/image-xx99-mark-one-headphones.jpg'
import imageRecommendation2 from '@/assets/recommendations/image-xx59-headphones.jpg'
import imageRecommendation3 from '@/assets/recommendations/image-zx9-speaker.jpg'
import CategoriesSection from '@/components/Homepage/subcomponents/CategoriesSection'
import BackButton from '@/components/PDP/BackButton'

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
      <section className={styles.imageAndDescription}>
        <div className={styles.imageContainer}>
          <Image
            src={imageProduct}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className={styles.textContainer}>
          <span className={styles.newProduct}>NEW PRODUCT</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <span className={styles.price}>${price}</span>
          <div className={styles.utilsContainer}>
            <div className={styles.quantity}>
              <button type="button" aria-label="decrease quantity">
                <span>-</span>
              </button>
              <span>1</span>
              <button type="button" aria-label="increase quantity">
                <span>+</span>
              </button>
            </div>
            <button type="button" aria-label={`Add ${title} to cart`}>
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
      <section className={styles.featuresAndBox}>
        <div className={styles.features}>
          <h2>FEATURES</h2>
          <p>{features}</p>
        </div>
        <div className={styles.box}>
          <h2>IN THE BOX</h2>
          {includedItems.box.map((item) => (
            <p className={styles.boxItem} key={item.name}>
              <span className={styles.itemQuantity}>{item.quantity}x</span>
              <span>{item.name}</span>
            </p>
          ))}
        </div>
      </section>
      <section className={styles.imageGallery}>
        <div className={styles.columnOne}>
          {imageGallery.slice(0, 2).map((image, index) => (
            <div key={index} className={styles.imageGalleryContainer}>
              <Image
                src={image}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className={styles.columnTwo}>
          <div className={styles.imageGalleryContainer}>
            <Image
              src={imageGallery[2]}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      <section className={styles.recommendations}>
        <span>YOU MAY ALSO LIKE</span>
        <div className={styles.productList}>
          {imageRecommendations.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image
                src={image.src}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
              />
              <h2>{image.title}</h2>
              <button type="button" aria-label="View product details">
                SEE PRODUCT
              </button>
            </div>
          ))}
        </div>
        <div className={styles.productList}>
          <CategoriesSection />
        </div>
      </section>
    </main>
  )
}

export default Page
