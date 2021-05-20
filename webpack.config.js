const path = require('path'),
    CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin'),
    VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    StylelintPlugin = require('stylelint-webpack-plugin'),
    ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './maple/index.js',
    output: {
        filename: 'maple.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'maple',
            type: 'umd'
        },
        umdNamedDefine: true,
        pathinfo: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'maple'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                            publicPath: '../../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: false }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 12080,
                    name: 'img/[name].[hash:8].[ext]',
                    esModule: false
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: 'media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: 'fonts/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    optimization: {
        emitOnErrors: true,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        mangleExports: 'deterministic',
        minimize: true,
        removeAvailableModules: true, // 影响构建性能，但能让代码更少
        removeEmptyChunks: true, // 影响构建性能，但能让代码更少
        mergeDuplicateChunks: true, // 影响构建性能，但能让代码更少
        flagIncludedChunks: true,
        concatenateModules: false,
        innerGraph: false,
        minimizer: [
            new CssMinimizerPlugin({
                test: /\.(less|scss|css)$/
            }),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ie8: false,
                    compress: {
                        passes: 2,
                        drop_console: true,
                        warnings: false
                    },
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    stats: 'minimal',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: 'maple.css'
        }),
        new StylelintPlugin({
            files: ['**/*.{html,vue,css,sass,scss,less}'],
            cache: true,
            emitError: true,
            emitWarning: true,
            context: path.resolve(__dirname, 'maple')
        }),
        new ESLintPlugin({
            extensions: ['.js', '.vue', '.json', '.jsx'],
            cache: true,
            emitError: true,
            emitWarning: true,
            outputReport: true,
            files: path.resolve(__dirname, 'maple')
        }),
        new VueLoaderPlugin()
    ]
};
