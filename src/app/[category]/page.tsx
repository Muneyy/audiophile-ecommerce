import React from 'react'
import styles from './page.module.sass'
import ImageAndDescription from '@/components/shared/ImageAndDescription'
import CategoriesSection from '@/components/shared/CategoriesSection'
import fetchGql from '@/lib/fetchGql'
import { notFound } from 'next/navigation'
import BackButton from '@/components/shared/BackButton'

type TCategory = {
  category: 'speakers' | 'earphones' | 'headphones'
}

const queryCategoryProducts = `
  query($category: String!) {
    productCollection(where: {
      category_contains: $category
    }) {
      items {
        title
        apiRoute
        description
        imageMain {
          title
          url
        }
      }
    }
  }
`

type TypePLPProduct = {
  title: string
  apiRoute: string
  description: string
  imageMain: {
    title: string
    url: string
  }
}

const Page = async ({ params }: { params: TCategory }) => {
  const categoryTitle = params.category

  const fetchedData = await fetchGql(queryCategoryProducts, null, categoryTitle)

  if (!fetchedData || fetchedData.productCollection.items.length === 0) {
    notFound()
  }
  const productList: TypePLPProduct[] = fetchedData.productCollection.items

  return (
    <main className={styles.main}>
      <h1 className={styles.category}>{categoryTitle}</h1>
      <BackButton />
      <div className={styles.productsContainer}>
        {productList.map((item, index) => (
          <ImageAndDescription
            key={index}
            title={item.title}
            description={item.description}
            imageProduct={item.imageMain}
            price={100}
            forProductListPage={true}
            params={{ category: categoryTitle }}
            apiRoute={item.apiRoute}
          />
        ))}
      </div>
      <CategoriesSection />
    </main>
  )
}

export default Page
