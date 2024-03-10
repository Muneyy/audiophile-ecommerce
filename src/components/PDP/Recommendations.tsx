import React from 'react'
import styles from './Recommendations.module.sass'
import Image, { StaticImageData } from 'next/image'
import CategoriesSection from '../shared/CategoriesSection'
import Link from 'next/link'

const Recommendations = ({
  imageRecommendations,
  title,
  params,
}: {
  imageRecommendations: { src: StaticImageData; title: string }[]
  title: string
  params?: { category: string }
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
            <Link href={`/${params?.category}/${image.title}`}>
              <button type="button" aria-label="View product details">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        ))}
      </div>
      <CategoriesSection />
    </section>
  )
}

export default Recommendations
