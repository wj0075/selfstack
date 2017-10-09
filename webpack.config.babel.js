/**
 * Created by wb-wj270693 on 2017/9/22.
 */

// import ExtractTextPlugin from 'extract-text-webpack-plugin'
export default {
    output: {
        filename: 'client-bundle.js',
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
                use:'babel-loader',
                exclude:[/node_modules/],
            },
            /*{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },*/
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ],
    },
    resolve: {
        extensions:['.js','.jsx','.vue'],
        alias:{
            'vue':'vue/dist/vue.js'
        }
    },
    plugins:[
        // new ExtractTextPlugin('style.css')
    ]
};