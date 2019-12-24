const path = require('path');

module.exports = {
  entry: {
    main:"./src/index.js",
    vendor: './src/vendor.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
        }
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use:  {
           loader: "file-loader",
           options: {
             name: "[name].[hash].[ext]",
             outputPath: "imgs"
           }
         }
       },
       {
         test: /\.html$/,
         use: [
           'html-loader'
         ],
       },
       {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
