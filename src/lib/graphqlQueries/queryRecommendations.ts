import { gql } from '@apollo/client'

const queryRecommendations = gql`
  query GetRecommendations {
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

export default queryRecommendations
