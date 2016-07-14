const path = require('path');

module.exports = {
    
    entry: [
        
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=es2015,presets[]=react',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    },
    devServer: {
        contentBase: './build'
    }
};

