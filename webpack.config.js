const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: resolve('./dist'),
        filename: '[name].[contenthash].bundle.js',
        assetModuleFilename: 'static/[hash][ext][query]'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [resolve('src'), 'node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./src/index.html')
        }),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'jsx',
                    target: 'es2015'
                },
                exclude: /node_modules/,
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                include: resolve('node_modules/@douyinfe')
            },
            {
                test: /\.(gif|png|jpeg|jpg)$/i,
                type: 'asset/resource',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
                exclude: /node_modules/,
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        open: false,
        hot: true,
        compress: true,
    }
};

function resolve(dir) {
    return path.resolve(__dirname, dir);
}
