import { gql } from '@apollo/client'

const queryForNavLinks = gql`
  query GetNavLinks {
    navLinks(id: "7vaxvV5cJOEWEYmkxfNzvS") {
      links
    }
  }
`

export default queryForNavLinks
