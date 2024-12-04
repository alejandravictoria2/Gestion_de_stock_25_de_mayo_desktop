const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // O 'production' para la versión final
  entry: './src/index.js', // Archivo de entrada
  output: {
    filename: 'bundle.js', // Archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardará el resultado
    clean: true, // Limpia automáticamente la carpeta dist
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transforma archivos .js y .jsx
        exclude: /node_modules/, // Ignora node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Maneja archivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Maneja archivos de imagen
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resuelve estos tipos de archivos automáticamente
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Archivo HTML de plantilla
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Carpeta a servir
    compress: true, // Habilita la compresión gzip
    port: 3000, // Puerto del servidor de desarrollo
    open: true, // Abre el navegador automáticamente
  },
};
