const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';

const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src/js', 'main.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, 'src', 'index.html')
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash].css',
            }
        )         
    ],
    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader: 'vue-loader',
                options: {
                  loaders: {
                    'scss': [
                      'vue-style-loader',
                      'css-loader',
                      'sass-loader'
                    ],
                    'sass': [
                      'vue-style-loader',
                      'css-loader',
                      'sass-loader?indentedSyntax'
                    ]
                  }
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')],
                        },
                    },
                },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff2?|ttf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
                type: 'asset/resource',
            },
            {
                test: /\.m?js$i/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};