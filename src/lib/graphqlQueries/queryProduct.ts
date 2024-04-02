import { gql } from '@apollo/client'

const queryProduct = gql`
  query GetProducts($name: String!, $category: String!) {
    productCollection(
      where: { apiRoute_contains: $name, category_contains: $category }
    ) {
      items {
        title
        apiRoute
        category
        description
        category
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

export default queryProduct
