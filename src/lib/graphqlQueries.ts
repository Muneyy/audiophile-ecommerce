export const queryCategoryProducts = `
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

export const queryProduct = `
query GetProducts($name: String!, $category: String!) {
  productCollection(
    where: {apiRoute_contains: $name, category_contains: $category}
  ) {
    items {
      title
      apiRoute
      description
      price
      features
      includedItems
      imageThumbnail {
        title
        url
      }
      imageGalleryCollection {
        items {
          title
          url
        }
      }
      imageMain {
        title
        url
      }
    }
  }
}
`

export const queryFooterContent = `
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

export const queryHomepage = `
{
  homepageContent(id: "7f4y9u2wsYCun1pqLjOJT1") {
    bannerTitle
    promotionProducts
    bannerContent
  }
}
`

export const queryRecommendations = `
{
  productCollection(limit: 3) {
    items {
      title
      apiRoute
      category
      imageThumbnail {
        title
        url
      }
    }
  }
}
`

export const queryForNavLinks = `
{
  navLinks(id: "7vaxvV5cJOEWEYmkxfNzvS") {
    links
  }
}
`
