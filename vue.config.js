const path = require('path')//引入一个path模块

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/waicai-website/'
        : '/',
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')
        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(dir).end() //只包含 icons 目录
            .use('svg-sprite-loader').loader('svg-sprite-loader')
            .options({extract: false}).end()
            .use('svgo-loader').loader('svgo-loader')
        /*下面这句是处理svg自带颜色时，无法更改这个颜色的bug。现在这个bug以及被svg-sprite-loader 修复了，所以可以不用写这句了*/
            //.tap(options=>({...options,plugins:[{removeAttrs:{attrs:'fill'}}]})).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),
            [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir) //其他 svg loader 排除 icons 目录
    }
}