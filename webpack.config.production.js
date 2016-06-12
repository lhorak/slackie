var webpack                 = require('webpack');
var HtmlWebpackPlugin       = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject  : 'body'
});
var autoprefixer            = require('autoprefixer');
var path                    = require('path');

var config = {

    // We change to normal source mapping
    devtool: 'source-map',
    entry  : './src/index.jsx',
    output : {
        path    : './dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions        : ['', '.js', '.jsx', '.es6'],
        modulesDirectories: ['node_modules']
    },
    module : {
        loaders: [
            {
                test   : /\.jsx$|\.es6$|\.js$/, loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test   : /\.css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css']
            },
            {
                test   : /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test   : /\.woff$/,
                exclude: /node_modules/,
                loader : "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
            },
            {
                test   : /\.woff2$/,
                exclude: /node_modules/,
                loader : "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
            },
            {
                test   : /\.(eot|ttf|svg|gif|png)$/,
                exclude: /node_modules/,
                loader : "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
    ],
    postcss: function () {
        return [autoprefixer({
            browsers: ['last 3 versions']
        })];
    }
};

module.exports = config;