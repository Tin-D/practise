module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.31.138:8080/',
                changeOrigin: true
            }
        }
    }
}