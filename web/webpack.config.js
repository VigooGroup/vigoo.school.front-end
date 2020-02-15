const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, '/.bin'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        projectReferences: true,
                    },
                },
            }
        ],
    },
    resolve: {
        alias: {
            'sms-core': path.resolve(__dirname, '../core/'),
        },
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            path.resolve('.'),
            path.resolve('./node_modules')
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
};