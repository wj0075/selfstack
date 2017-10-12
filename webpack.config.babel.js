/**
 * Created by wb-wj270693 on 2017/9/22.
 */

// import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  /*  entry:{
        vendors:['vue','vue-router'],
    },*/
    output: {
        filename: 'client-bundle.js',
        // chunkFilename: 'chunk[id].js?[chunkhash]',
    },
    devtool:'source-map',
    module: {
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader',
                exclude:[/node_modules/],
            },
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        plugins: ['syntax-dynamic-import']
                    }
                }],
                exclude:[/node_modules/],
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:['url-loader?limit=8192']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ],
    },
    resolve: {
        extensions:['.js','.jsx','.vue'],
        alias:{
            'vue':'vue/dist/vue.common.js'
        }
    },
    plugins:[
        // new ExtractTextPlugin('style.css')
    ]
};