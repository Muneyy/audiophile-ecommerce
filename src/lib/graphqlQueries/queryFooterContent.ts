import { gql } from '@apollo/client'

const queryFooterContent = gql`
  query GetFooterContent {
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

export default queryFooterContent
