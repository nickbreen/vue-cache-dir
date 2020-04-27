module.exports = {

    chainWebpack: config => {

        config
            .plugin('define')
            .tap(args => {
                Object.assign(args[0]['process.env'], {
                    'CACHE_DIR': process.env.CACHE_DIR,
                })
                return args
            })
    }
}