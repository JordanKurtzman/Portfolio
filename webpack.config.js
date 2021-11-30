//entry --> output
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties', 'transform-class-properties']
                    }
                }
            },
            {
                test: /\.s?css$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'file-loader'
            

            },
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: './public',
        historyApiFallback: true

    }

}