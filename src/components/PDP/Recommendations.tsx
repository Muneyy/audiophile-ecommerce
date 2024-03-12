import React from 'react'
import styles from './Recommendations.module.sass'
import Image, { StaticImageData } from 'next/image'
import CategoriesSection from '../shared/CategoriesSection'
import RedirectButton from '../shared/RedirectButton'

const BUTTON_TEXT = 'SEE PRODUCT'

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
            <RedirectButton
              link={`/${params?.category}/${image.title}`}
              text={BUTTON_TEXT}
              ariaLabel={`go to ${image.title} product page`}
            />
          </div>
        ))}
      </div>
      <CategoriesSection />
    </section>
  )
}

export default Recommendations
