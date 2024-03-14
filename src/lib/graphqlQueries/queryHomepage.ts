import { gql } from '@apollo/client'

const queryHomepage = gql`
  query GetHomepage {
    homepageContent(id: "7f4y9u2wsYCun1pqLjOJT1") {
      bannerProductReference {
        ... on Product {
          title
          apiRoute
          category
          bannerDescription
          bannerUrlDesktop {
            title
            url
          }
          bannerUrlMobile {
            title
            url
          }
        }
      }
      promotionProducts
    }
  }
`

export default queryHomepage
