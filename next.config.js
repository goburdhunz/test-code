const nextConfig = {
  module: {
    rules: [
      {
        test: /\.(jsx|tsx)$/,
        exclude: ['node_modules'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.gif$/,
        type: 'asset/inline',
      },
      {
        test: /\.(ttf|eot|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },

}
module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images2.imgbox.com'],
  },
}
