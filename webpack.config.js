var webpack                 = require('webpack');
var HtmlWebpackPlugin       = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject  : 'body'
});

module.exports = {
    entry  : [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output : {
        path             : __dirname + '/dist',
        filename         : "index_bundle.js",
        publicPath       : 'http://localhost:8080/',
        chunkFilename    : '[id].chunk.js',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions        : ['', '.js', '.jsx', '.es6'],
        modulesDirectories: ['node_modules']
    },
    module : {
        loaders: [
            {test: /\.jsx$|\.es6$|\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/},
            {test: /\.scss$|\.css$/, loader: 'style-loader!style!css!sass', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        HTMLWebpackPluginConfig
    ],
    devtool: "eval-source-map"
};

