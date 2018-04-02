const env = process.env.NODE_ENV
const config = {
  dev: {
    apiurl: '/app',
    imgurl: '/img/',
    group: '5a91013698ffab18046498ec'
  },
  prod: {
    apiurl: 'http://api.gdsc198.com:8001/app',
    imgurl: 'http://api.gdsc198.com:8001/img/',
    group: '5a9d2e61e0fd21228ecd045a'
  }
}

export default env === 'production' ? config.prod : config.dev
