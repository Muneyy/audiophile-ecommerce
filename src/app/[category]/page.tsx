import React from 'react'
import styles from './page.module.sass'
import ImageSrc1 from '@/assets/speakers/zx9-speaker.jpg'
import ImageSrc2 from '@/assets/speakers/zx7-speaker.jpg'
import ImageAndDescription from '@/components/shared/ImageAndDescription'
import CategoriesSection from '@/components/shared/CategoriesSection'

type TCategory = {
  category: 'speakers' | 'earphones' | 'headphones'
}

const fetchedData = {
  data: [
    {
      title: 'ZX9 Speakers',
      description:
        'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      imageSrc: ImageSrc1,
    },
    {
      title: 'ZX7 Speakers',
      description:
        'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      imageSrc: ImageSrc2,
    },
  ],
}

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
