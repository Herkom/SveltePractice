const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', //Punto de entrada
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }, //Punto de salida
    resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte'], //Soporte para extensiones de archivo a usar
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },// Regla para los archivos JS, usamos babel-loader para los archivos .js
            {
                test: /\.svelte?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                },
            },// Regla para los archivos Svelte, usamos svelte-loader para los archivos .svelte
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        })
    ] //Plugin para añadir lo compilado al documento HTML
}