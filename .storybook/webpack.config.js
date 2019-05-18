const path = require('path');

module.exports = async ({
    config
}) => {
    config.module.rules.push({
        include: path.resolve(__dirname, '../'),
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    });

    return config;
};
