module.exports = {
  publicPath: process.env.VUE_APP_PATH,
  runtimeCompiler: true,
  devServer: {
    port: 8081,
    // host: 'localhost',
    watchOptions: {
      poll: true,
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      // proxy all requests starting with /rest to localhost:8080
      "/products": {
        target: "http://fakestoreapi.com/",
        ws: true,
        changeOrigin: true,
      },
      "/auth": {
        target: "http://fakestoreapi.com/",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
