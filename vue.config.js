module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.sass";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shop-forum/'
    : '/'
};