module.exports = {
    chainWebpack: config => {
        config.module
        .rule('file-loader')
        .test(/\.(csv|xlsx|xls)$/)
        .use('file-loader')
        .loader('file-loader')
        .end()
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/_varible.scss";`
              },
        }
    }
}