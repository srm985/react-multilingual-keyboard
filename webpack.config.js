const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
    const isDevelopment = process.env.NODE_ENV === 'development';

    const plugins = [];

    let entry = './src/keyboard.js';

    if (isDevelopment) {
        entry = './src/index.js';

        plugins.push(new HtmlWebpackPlugin({
            filename: 'index.html',
            path: path.join(__dirname, '../dist/'),
            template: './src/index.html'
        }));
    }

    return ({
        devServer: {
            contentBase: path.join(__dirname, '../dist/'),
            hot: true
        },
        entry,
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
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        output: {
            filename: 'index.js',
            path: `${__dirname}/dist`,
            publicPath: '/'
        },
        plugins,
        resolve: {
            extensions: [
                '*',
                '.js',
                '.jsx'
            ]
        }
    });
};
