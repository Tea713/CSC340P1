const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/CSC340P1/' : '/',
  transpileDependencies: true
})
