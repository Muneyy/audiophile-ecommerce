import React from 'react'
import styles from './Categories.module.sass'
import Image from 'next/image'
import RedirectButton from './RedirectButton'
import fetchGql from '@/lib/fetchGql'
import queryForCategories from '@/lib/graphqlQueries/queryForCategories'

type CategoryType = {
  title: string
  url: string
}

const CategoriesSection = async () => {
  const fetchedData = await fetchGql(queryForCategories)

  const CATEGORIES_LIST: CategoryType[] =
    fetchedData.navLinksCollection.items[0].categories.items

  return (
    <section className={styles.sectionCategories}>
      {CATEGORIES_LIST.map((category) => (
        <div className={styles.categoryCard} key={category.title}>
          <div className={styles.imageContainer}>
            <Image
              src={category.url}
              alt={`${category} category`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <h2>{category.title}</h2>
          <RedirectButton
            link={`/${category.title}`}
            text="SHOP"
            ariaLabel={`go to ${category.title} category page`}
            forCategory
          />
        </div>
      ))}
    </section>
  )
}

export default CategoriesSection
