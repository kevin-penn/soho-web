module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      apiHost: process.env.API_HOST | 'http://localhost:8080/api',
      secondSecret: process.env.SECOND_SECRET,
    },
    publicRuntimeConfig: {
    },
}