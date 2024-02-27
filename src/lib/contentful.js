const contentful = require('contentful')

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

// client
//   .getEntry('23ajyJGN6FZHErhMhAjYLu')
//   .then((entry: any) => console.log(entry))
//   .catch(console.error)
