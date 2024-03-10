import React from 'react'
import styles from './Categories.module.sass'
import categoryEarphones from '@/assets/categories-earphones.png'
import categoryHeadphones from '@/assets/categories-headphones.png'
import categorySpeakers from '@/assets/categories-speakers.png'
import Image from 'next/image'
import RightArrow from '@/svgs/RightArrow'
const CATEGORIES_LIST = ['Headphones', 'Speakers', 'Earphones']

type CategorySrc = {
  [key: string]: string
}

const categorySrc: CategorySrc = {
  Headphones: categoryHeadphones.src,
  Speakers: categorySpeakers.src,
  Earphones: categoryEarphones.src,
}

const CategoriesSection = () => {
  return (
    <section className={styles.sectionCategories}>
      {CATEGORIES_LIST.map((category) => (
        <div className={styles.categoryCard} key={category}>
          <div className={styles.imageContainer}>
            <Image
              src={categorySrc[category]}
              alt={`${category} category`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <h2>{category}</h2>
          <button type="button" aria-label={`go to ${category} category page`}>
            SHOP
            <RightArrow />
          </button>
        </div>
      ))}
    </section>
  )
}

export default CategoriesSection
