import React from 'react'
import styles from './ImageAndDescription.module.sass'
import Image from 'next/image'
import RedirectButton from './RedirectButton'
import CartUtils from './CartUtils'

interface TypeImageAndDescription {
  imageProduct: {
    title: string
    url: string
  }
  title: string
  description: string
  price: number
  forProductListPage?: boolean
  category: string
  apiRoute: string
}

const ImageAndDescription = ({
  imageProduct,
  title,
  description,
  category,
  price,
  forProductListPage,
  apiRoute,
}: TypeImageAndDescription) => {
  return (
    <section className={styles.imageAndDescription}>
      <div className={styles.imageContainer}>
        <Image
          src={imageProduct.url}
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
            <RedirectButton
              link={`/${category}/${apiRoute}`}
              text="SEE PRODUCT"
              ariaLabel={`go to ${title} product page`}
            />
          </div>
        ) : (
          <CartUtils
            title={title}
            price={price}
            category={category}
            apiRoute={apiRoute}
            imageProduct={imageProduct}
          />
        )}
      </div>
    </section>
  )
}

export default ImageAndDescription
