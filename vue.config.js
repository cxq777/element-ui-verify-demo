const path = require('path');

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: {
                "vue$": path.resolve('node_modules/vue/dist/vue.esm.js')
            }
        }
    }
}