var path = require('path');

module.exports = {
    entry: './frontend/benchbnb.jsx',
    mode: 'development',
    output: {
        filename: './app/assets/javascripts/bundle.js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};