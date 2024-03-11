import React from 'react'
import styles from './ImageAndDescription.module.sass'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import commafy from '@/utils/commafy'

const ImageAndDescription = ({
  imageProduct,
  title,
  description,
  price,
  forProductListPage,
  params,
}: {
  imageProduct: StaticImageData
  title: string
  description: string
  price: number
  forProductListPage?: boolean
  params?: {
    category: string
  }
}) => {
  return (
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
        {forProductListPage ? (
          <div className={styles.utilsContainer}>
            <Link href={`/${params?.category}/${title}`}>
              <button type="button" aria-label={`View ${title} details`}>
                SEE PRODUCT
              </button>
            </Link>
          </div>
        ) : (
          <>
            <span className={styles.price}>${commafy(price)}</span>
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
          </>
        )}
      </div>
    </section>
  )
}

export default ImageAndDescription
