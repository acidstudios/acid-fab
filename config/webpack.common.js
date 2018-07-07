var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path")
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

module.exports = {
    entry: {
        'polyfills': path.join(__dirname , '..', 'demo', 'polyfills.ts'),
        'vendor': path.join(__dirname , '..', 'demo', 'vendor.ts'),
        'app': path.join(__dirname , '..', 'demo', 'boot.ts')
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: helpers.root('tsconfig.json') }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                exclude: helpers.root('demo/index.html'),
                loader: 'html-loader'
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/,loaders: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
            helpers.root('./demo'), // location of your src
            {} // a map of your routes
        ),

        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV)
        }),

        new ExtractTextPlugin({ "filename": "style.css", "allChunks": true }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: `demo/index.html`,
            environment: {
                ENV: ENV
            }
        }),

        new CopyWebpackPlugin([{
            from: "demo/res/**/*"
        }, {
            from: 'demo/favicon.ico',
            to: 'favicon.ico'
        }]),
    ]
};