var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        "./src/js/app"
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: "bundle.js",
        publicPath: '/assets/'
    },
    devServer: {
        inline: true,
        contentBase: './assets',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            tests: /\.js?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src', 'js')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};