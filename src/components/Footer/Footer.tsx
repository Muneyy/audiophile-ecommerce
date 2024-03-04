import React from 'react'
import styles from './Footer.module.sass'
import Image from 'next/image'
import FooterImage from '@/assets/image-best-gear.jpg'
import NavLinks from '../NavLinks'
import FacebookIcon from '@/svgs/FacebookIcon'
import TwitterIcon from '@/svgs/TwitterIcon'
import InstagramIcon from '@/svgs/InstagramIcon'
import Link from 'next/link'

const FOOTER_DESC =
  'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
const FOOTER_AUDIOPHILE_DESC =
  // eslint-disable-next-line quotes
  "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
const FOOTER_COPYRIGHT = 'Copyright 2021 Audiophile. All rights reserved'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.sectionOne}>
        <div className={styles.imageContainer}>
          <Image
            src={FooterImage}
            alt="A man listening to music wearing headphones."
          />
        </div>
        <div className={styles.textContainer}>
          <h2>
            BRINGING YOU THE <span className={styles.orangeText}>BEST</span>{' '}
            AUDIO GEAR
          </h2>
          <p>{FOOTER_DESC}</p>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.topContainer}>
          <Link href="/">
            <span className={styles.logo}>audiophile</span>
          </Link>
          <NavLinks />
        </div>
        <p className={styles.audiophileDesc}>{FOOTER_AUDIOPHILE_DESC}</p>
        <div className={styles.bottomContainer}>
          <p>{FOOTER_COPYRIGHT}</p>
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
