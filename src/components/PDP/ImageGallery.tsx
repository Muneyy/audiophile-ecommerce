import React from 'react'
import styles from './ImageGallery.module.sass'
import Image from 'next/image'

interface TypeImageGallery {
  imageGallery: {
    title: string
    url: string
  }[]
  title: string
}

const ImageGallery = ({ imageGallery, title }: TypeImageGallery) => {
  return (
    <section className={styles.imageGallery}>
      <div className={styles.columnOne}>
        {imageGallery.slice(0, 2).map((image, index) => (
          <div key={index} className={styles.imageGalleryContainer}>
            <Image
              src={image.url}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className={styles.columnTwo}>
        <div className={styles.imageGalleryContainer}>
          <Image
            src={imageGallery[2].url}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
