const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Modo de configuración (development o production)
  mode: 'development', // Cambia a 'production' cuando estés listo para producción

  // Archivo de entrada principal
  entry: './src/index.js',

  // Configuración de salida
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardarán los archivos
    clean: true, // Limpia la carpeta dist antes de generar nuevos archivos
  },

  // Configuración de módulos
  module: {
    rules: [
      {
        // Manejo de archivos JavaScript y JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usa Babel para transpilar código moderno de React y JS
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Configuración para ES6+ y React
          },
        },
      },
      {
        // Manejo de archivos CSS
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Procesa e inyecta CSS
      },
      {
        // Manejo de imágenes y otros recursos estáticos
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource', // Mueve las imágenes a la carpeta dist automáticamente
      },
    ],
  },

  // Configuración de resolución de archivos
  resolve: {
    extensions: ['.js', '.jsx'], // Permite omitir extensiones al importar archivos
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Archivo HTML base
    }),
  ],

  // Configuración del servidor de desarrollo
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Carpeta de archivos estáticos
    },
    compress: true, // Habilita compresión gzip
    port: 3000, // Puerto en el que se ejecutará el servidor
    hot: true, // Habilita recarga en caliente
  },
};
