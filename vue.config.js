const fs = require("fs")
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.sass";`
      }
    }
  },
  devServer: {
    https: {
      enable: true,
      key: fs.readFileSync(`${__dirname}/localhost-key.pem`),
      cert: fs.readFileSync(`${__dirname}/localhost.pem`)
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shop-forum/'
    : '/'
};