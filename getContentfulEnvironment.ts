const contentfulManagement = require('contentful-management')
const dotenv = require('dotenv')
dotenv.config({ path: '.env.local' })
module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space: any) =>
      space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT)
    )
}
