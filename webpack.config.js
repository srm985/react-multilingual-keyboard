const webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: `${__dirname}/dist`,
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx'
        ]
    }
};
