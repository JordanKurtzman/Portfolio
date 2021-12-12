//entry --> output
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }), 
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ],
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
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: 3000,
        proxy: {
            '^/api/*': {
                target: 'http://localhost:8080/api/',
                secure: false
            }
        }

    },
    

}