import React from 'react'
import styles from './Footer.module.sass'
import Image from 'next/image'
import NavLinks from '../NavLinks'
import FacebookIcon from '@/svgs/FacebookIcon'
import TwitterIcon from '@/svgs/TwitterIcon'
import InstagramIcon from '@/svgs/InstagramIcon'
import Link from 'next/link'
import fetchGql from '@/lib/fetchGql'

const queryFooterContent = `
{
  footerContent(id: "1adEvqgfmjTjFjiGrR5ohd") {
    headline
    description
    descriptionSecond
    copyright
    footerImage {
      url
    }
  }
}
`

const getData = async () => {
  try {
    const data = await fetchGql(queryFooterContent)
    return data.data
  } catch (err: unknown) {
    throw new Error(`Error fetching data: ${err}`)
  }
}

const Footer = async () => {
  const fetchedData = await getData()
  const { headline, description, descriptionSecond, footerImage, copyright } =
    fetchedData.footerContent

  const renderColoredHeadline = () => {
    return headline.split(' ').map((word: string, index: number) => {
      if (word.toUpperCase() === 'BEST') {
        return (
          <span key={index} className={styles.orangeText}>
            {word}{' '}
          </span>
        )
      } else {
        return `${word} `
      }
    })
  }

  return (
    <footer className={styles.footer}>
      <section className={styles.sectionOne}>
        <div className={styles.imageContainer}>
          <Image
            src={footerImage.url}
            alt="A man listening to music wearing headphones."
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className={styles.textContainer}>
          <h2>{renderColoredHeadline()}</h2>
          <p>{description}</p>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.topContainer}>
          <Link href="/">
            <span className={styles.logo}>audiophile</span>
          </Link>
          <NavLinks />
        </div>
        <p className={styles.audiophileDesc}>{descriptionSecond}</p>
        <div className={styles.bottomContainer}>
          <p>{copyright}</p>
          <div className={styles.socialLinks}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
