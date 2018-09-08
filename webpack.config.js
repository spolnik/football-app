var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        "./src/js/app"
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: "bundle.js",
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src', 'js'),
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};