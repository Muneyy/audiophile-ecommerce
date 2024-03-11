import React from 'react'
import styles from './ImageGallery.module.sass'
import Image, { StaticImageData } from 'next/image'

const ImageGallery = ({
  imageGallery,
  title,
}: {
  imageGallery: StaticImageData[]
  title: string
}) => {
  return (
    <section className={styles.imageGallery}>
      <div className={styles.columnOne}>
        {imageGallery.slice(0, 2).map((image, index) => (
          <div key={index} className={styles.imageGalleryContainer}>
            <Image src={image} alt={title} width={0} height={0} sizes="100vw" />
          </div>
        ))}
      </div>
      <div className={styles.columnTwo}>
        <div className={styles.imageGalleryContainer}>
          <Image
            src={imageGallery[2]}
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
