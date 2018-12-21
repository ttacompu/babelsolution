const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');


module.exports = function (env) {
    let config = {
        context: path.resolve(__dirname, './src'),
        entry : {
            app : './app.ts'
        },
        output : {
            filename : '[name].bundle.js',
            path : path.resolve(__dirname, './dist'),
            publicPath : '/'
        },
        devtool : 'inline-source-map',
        resolve : {
            extensions : ['.ts','.js', '.css']
        },
        module : {
            rules : [
                {
                    test : /\.css$/,
                    use : ['style-loader', 'css-loader']
                },

                {
                    test : /\.tsx?$/,
                    exclude : /node_modules/,
                    use : {
                        loader : 'babel-loader'
                    }
                },
                {
                    test: /\.js$/,
                    use: ["source-map-loader"],
                    enforce: "pre"
                  },
            ]
        },
        plugins : [
            new HtmlwebpackPlugin({
                template : 'index.html',
                inject : true
            })
        ]
    }

    return config;

}