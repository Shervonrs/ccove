const path = require('path');
const Dotenv = require('dotenv-webpack');
const imagemin = require('imagemin');
const dotenv = require("dotenv").config();



module.exports = {
  entry: {
    main:"./src/index.js",
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
         test: /\.(png|svg|jpe?g|gif)$/,
         use:  [
             {
               loader: "url-loader",
               options: {
                 name: "[name].[hash].[ext]",
                 outputPath: "img",
                 esModule: false
               }
             },
             {
               loader: "img-loader",
               options: {
                 plugins: [
                   require("imagemin-mozjpeg")({
                     progressive: true,
                     quality: 50
                   })
                 ]
               }
             }
         ]
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
  plugins: [
    new Dotenv()
  ]
};
