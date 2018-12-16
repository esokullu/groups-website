const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin({
    filename: 'app/build/bundle.css'
});

module.exports = ({ base }) => {
    const nodeEnv = process.env.NODE_ENV || 'development';
    const isProduction = nodeEnv === 'production';
    const isClient = base === 'client' ? true : false

    return {
        devtool: isProduction ? false : 'eval-source-map',

        entry: isClient
            ? { client: path.join(__dirname, './app/client.jsx'), vendor: ['react', 'react-dom'] }
            : { server: path.join(__dirname, './app/server.js') },

        output: {
            path: path.resolve(__dirname),
            filename: isClient ? 'app/build/[name].js' : 'https.js',
            publicPath: '/'
        },

        resolve: {
            extensions: ['*', '.js', '.jsx']
        },

        target: isClient ? 'web' : 'node',

        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules(?!\/webpack-dev-server)/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(css|less)$/,
                    use: extractLess.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'less-loader']
                    })
                },
                {
                    test: /\.(jpg|png|gif|woff|svg)$/,
                    use: 'url-loader?limit=100000'
                }
            ]
        },

        devServer: {
            historyApiFallback: true,
            disableHostCheck: true,
        },

        plugins: isClient ? [
            new webpack.DefinePlugin({
                ONSERVER: false,
                'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
            }),
            new HtmlWebpackPlugin({
                template: 'app/template.html',
                inject: 'body',
                filename: 'index.html'
            }),
            extractLess,
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: Infinity,
                filename: 'app/build/vendor.js'
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: true
                },
                output: {
                    comments: true
                },
                sourceMap: true
            }),
            new webpack.optimize.AggressiveMergingPlugin(),
            new CompressionPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            })
        ] : [
            new webpack.DefinePlugin({
                ONSERVER: true,
                'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
            }),
            extractLess
        ]
    }
}