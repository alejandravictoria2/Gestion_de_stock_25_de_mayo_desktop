const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Cambia a 'production' para la versión final
  entry: './src/index.js', // Archivo de entrada principal
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    clean: true, // Limpia la carpeta 'dist' en cada compilación
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Maneja archivos .js y .jsx
        exclude: /node_modules/,
        use: 'babel-loader', // Usa Babel para transpilar el código
      },
      {
        test: /\.css$/, // Maneja archivos CSS
        use: ['style-loader', 'css-loader'], // Carga y aplica estilos CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Maneja imágenes
        type: 'asset/resource', // Coloca las imágenes en la carpeta de salida
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Permite importar archivos sin especificar extensión
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Archivo HTML base
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Carpeta donde servirá los archivos
    },
    compress: true, // Habilita la compresión gzip
    port: 3000, // Puerto del servidor de desarrollo
    hot: true, // Habilita recarga en caliente
  },
};

