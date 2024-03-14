import { gql } from '@apollo/client'

const queryCategoryProducts = gql`
  query GetCategoriesProducts($category: String!) {
    productCollection(where: { category_contains: $category }) {
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

export default queryCategoryProducts
