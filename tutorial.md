0. create package.json
    {
        "name": "webpack-academy",
        "version": "1.0.0",
        "main": "index.js",
        "author": "Sean Larkin",
        "license": "MIT",
    }

1. yarn add webpack --dev

2. add build script
        "scripts": {
            "build": "webpack"
        }

3. yarn build (yarn add -D)

4. create src folder and index.js file

5. create webpack config file

    module.exports = {
        entry: "./src/index.js",
    }

6. yarn build (this automatically created the dist folder and bundle and main files, and according to the tutorial
    this was created manually)
        const path = require("path");
        output: {
            filename: "bundle.js", // where to create and put the bundle
            path: path.join(__dirname, "dist")
        }

7. create bar-cjs.js and foo.js (export default "foo"), update index.js (import fooString from "./foo.js)

8. add script watch
    "watch": "webpack --watch"

9. yarn watch

10. update bar-cjs.js (export default "barrr")
    and import it in index.js 
    console log strings

11. node dist/bundle.js

12. yarn watch

13. add rules (loaders)

        module: {
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
                }
            ]
        }

14. add options for loader
            {
                test: /\.jpeg$/,
                use: [
                    {loader: "url-loader", options: {
                        limit: 10000
                    }}
                ]
            }

15. add logo image in src folder
    import image in index js
    add file-loader
            {
                test: /\.png$/, 
                use: ["file-loader"]
            }

16. yarn add file-loader --dev

17. yarn build

18. plugins

    a plugin can perform any of the functionalities that loaders couldn't loaders are constrained to being able to perform transformations on a single file just before it's added to the dependency graph. so if you want to apply
    changes to multiple files or create bundles of css, or minify your code then you have to rely on plugins.

19. add ExamplePlugin file
    class ExamplePlugin {
        apply(compiler) {
            compiler.plugin("run", (compiler, callback) => {
                console.log(`Webpack is running`);
              callback();
           });
       }
    }

    module.exports = ExamplePlugin;

20. add plugins in webpack config
    const ExamplePlugin = require("./ExamplePlugin.js");
    const webpack = require("webpack");
    plugins: [
        new ExamplePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]