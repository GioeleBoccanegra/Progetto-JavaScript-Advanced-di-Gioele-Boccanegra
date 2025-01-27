const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Punto di ingresso
  entry: './src/index.js',

  // Punto di uscita
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },

  // Configurazione dei moduli
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },

  // Configurazione Dev Server
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: true, // Abilita il live-reload durante lo sviluppo
  },

  // Modalità
  mode: 'development', // Cambia a 'production' per la produzione

  // Aggiungi il plugin per l'ottimizzazione in produzione
  optimization: {
    minimize: true, // Minimizza il bundle in modalità produzione
  },

  // Mappe sorgente per il debug
  devtool: 'source-map', // Aggiungi per una migliore esperienza di debug

  // Configurazione del plugin HTML
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Usa il template HTML dal percorso corretto
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets', // Percorso della cartella assets
          to: 'assets',       // Dove copiare la cartella (nella cartella dist)
        },
      ],
    }),
  ],
};
