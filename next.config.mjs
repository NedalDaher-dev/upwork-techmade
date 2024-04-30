import BrotliPlugin from 'brotli-webpack-plugin';

export default {
  webpack(config, { isServer }) {
    if (!isServer && process.env.NODE_ENV === 'production') {
      // إضافة الـ plugin فقط إذا كانت البيئة هي الإنتاج
      config.plugins.push(
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    return config;
  },
};
