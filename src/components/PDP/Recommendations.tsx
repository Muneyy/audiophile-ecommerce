import React from 'react'
import styles from './Recommendations.module.sass'
import Image from 'next/image'
import CategoriesSection from '../shared/CategoriesSection'
import RedirectButton from '../shared/RedirectButton'
import fetchGql from '@/lib/fetchGql'
import queryRecommendations from '@/lib/graphqlQueries/queryRecommendations'
import { TypeRecommendation } from '@/lib/types'

const BUTTON_TEXT = 'SEE PRODUCT'

const Recommendations = async () => {
  const fetchedData = await fetchGql(queryRecommendations)

  const productList: TypeRecommendation[] = fetchedData.productCollection.items

  return (
    <section className={styles.recommendations}>
      <span>YOU MAY ALSO LIKE</span>
      <div className={styles.productList}>
        {productList.map((item, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={item.imageThumbnail.url}
              alt={item.title}
              width={0}
              height={0}
              sizes="100vw"
            />
            <h2>{item.title}</h2>
            <RedirectButton
              link={`/${item.category}/${item.apiRoute}`}
              text={BUTTON_TEXT}
              ariaLabel={`go to ${item.title} product page`}
            />
          </div>
        ))}
      </div>
      <CategoriesSection />
    </section>
  )
}

export default Recommendations
