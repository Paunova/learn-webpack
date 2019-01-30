const path = require("path");
const ExamplePlugin = require("./ExamplePlugin.js");
//const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js", // first file the webpack starts to create the DG
    output: {
        filename: "bundle.js", // where to create and put the bundle
        path: path.join(__dirname, "dist")
    },
    module: {
        // describe to webpack how to treat files before they are added to the DG
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.png$/, // /\.jpe?g$/
                use: [
                    "file-loader",
                    {loader: "url-loader", options: {
                        limit: 10000
                    }}
                ]
            }
        ]
    },
    // perform any other functionality, extremely customizable
    plugins: [
        new ExamplePlugin(),
        //new webpack.optimize.UglifyJsPlugin()
    ]
}