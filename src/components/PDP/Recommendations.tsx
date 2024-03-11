import React from 'react'
import styles from './Recommendations.module.sass'
import Image, { StaticImageData } from 'next/image'
import CategoriesSection from '../Homepage/subcomponents/CategoriesSection'

const Recommendations = ({
  imageRecommendations,
  title,
}: {
  imageRecommendations: { src: StaticImageData; title: string }[]
  title: string
}) => {
  return (
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
      <CategoriesSection />
    </section>
  )
}

export default Recommendations
