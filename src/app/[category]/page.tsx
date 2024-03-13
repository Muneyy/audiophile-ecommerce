import React from 'react'
import styles from './page.module.sass'
import ImageAndDescription from '@/components/shared/ImageAndDescription'
import CategoriesSection from '@/components/shared/CategoriesSection'
import { fetchedDataForPLP } from '@/mockRequests/mockRequests'

type TCategory = {
  category: 'speakers' | 'earphones' | 'headphones'
}

const fetchedData = fetchedDataForPLP

const Page = ({ params }: { params: TCategory }) => {
  const categoryTitle = params.category

  return (
    <main className={styles.main}>
      <h1>{categoryTitle}</h1>
      <div className={styles.productsContainer}>
        {fetchedData.data.map((item, index) => (
          <ImageAndDescription
            key={index}
            title={item.title}
            description={item.description}
            imageProduct={item.imageSrc}
            price={100}
            forProductListPage={true}
            params={{ category: categoryTitle }}
          />
        ))}
      </div>
      <CategoriesSection />
    </main>
  )
}

export default Page
