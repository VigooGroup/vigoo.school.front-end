const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
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
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'sms-core': path.resolve(__dirname, '../core/'),
        }
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