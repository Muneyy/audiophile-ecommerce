export type TCategory = {
  category: 'speakers' | 'earphones' | 'headphones'
}

export type TypePLPProduct = {
  title: string
  apiRoute: string
  description: string
  imageMain: {
    title: string
    url: string
  }
}

export type TypePDPContent = {
  productCollection: {
    items: {
      title: string
      apiRoute: string
      description: string
      category: string
      price: number
      features: string
      includedItems: {
        box: {
          name: string
          quantity: number
        }[]
      }
      imageThumbnail: {
        title: string
        url: string
      }
      imageGalleryCollection: {
        items: {
          title: string
          url: string
        }[]
      }
      imageMain: {
        title: string
        url: string
      }
    }[]
  }
}

export type TypeFooterContent = {
  footerContent: {
    headline: string
    description: string
    descriptionSecond: string
    copyright: string
    footerImage: {
      url: string
    }
  }
}

export type TypeBannerContent = {
  title: string
  apiRoute: string
  category: string
  bannerDescription: string
  bannerUrlDesktop: {
    title: string
    url: string
  }
  bannerUrlMobile: {
    title: string
    url: string
  }
}

export type TypeHomepageContent = {
  homepageContent: {
    bannerProductReference: TypeBannerContent
    promotionProducts: {
      items: {
        title: string
        description?: string
        apiRoute: string
        urlDesktop: string
        urlMobile: string
      }[]
    }
  }
}

export type TypeRecommendation = {
  title: string
  apiRoute: string
  category: string
  imageThumbnail: {
    title: string
    url: string
  }
}

export type TypeCartProduct = {
  title: string
  price: number
  apiRoute: string
  category: string
  quantity: number
  image: string
}
