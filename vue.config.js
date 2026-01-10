const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        http: false,
        https: false,
        util: false,
        zlib: false,
        stream: false,
        url: false,
        crypto: false,
        assert: false,
        http2: false,
      },
    },
  },
});
