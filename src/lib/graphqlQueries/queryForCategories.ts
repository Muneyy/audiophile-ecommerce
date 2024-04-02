import { gql } from '@apollo/client'

const queryForCategories = gql`
  query GetCategories {
    navLinksCollection {
      items {
        categories
      }
    }
  }
`
export default queryForCategories
