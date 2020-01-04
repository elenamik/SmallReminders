// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/client/index.js'
};

// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader'
//       },
//       // this will apply to both plain `.js` files
//       // AND `<script>` blocks in `.vue` files
//       {
//         test: /\.js$/,
//         loader: 'babel-loader'
//       },
//       // this will apply to both plain `.css` files
//       // AND `<style>` blocks in `.vue` files
//       {
//         test: /\.scss$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'vue-style-loader',
//           'css-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin(),
//     new HTMLWebpackPlugin({
//       title: 'To Do App',
//       template: './public/index.html'
//     }),
//     new CleanWebpackPlugin()
//   ]
// }
