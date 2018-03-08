const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//壓縮js


let plugins = [];
plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包
plugins.push(new UglifyJSPlugin());


module.exports = {
    entry:[
        './src/app.js'
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module  :{
        loaders: [{
            test: /\.(jpg|gif|png)(\?|$)/,
            exclude: /^node_modules$/, 
            use:[{
                loader: 'file-loader?name=[name].[ext]',
                options:{
                    outputPath: './images',
                }
            }]        
        },  {
            test: /\.(eot|woff|svg|ttf|woff2|appcache)(\?|$)/,
            exclude: /^node_modules$/, 
            use:[{
                loader: 'file-loader?name=[name].[ext]',
                options:{
                    outputPath: './fonts',
                }
            }]
        },  {
            test: /\.css$/,
            exclude: /^node_modules$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader:'css-loader',
                        options:{
                            minimize: true,
                        }
                    },{
                        loader:'postcss-loader',
                    }
                ]
            })
          }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader:"css-loader",
                    options:{
                        minimize: true,
                    }
                },{
                    loader: 'postcss-loader'
                },{
                    loader:"less-loader",
                    options:{
                        minimize: true,
                    }
                }]
            })            
          }],
    },
    plugins,
}
