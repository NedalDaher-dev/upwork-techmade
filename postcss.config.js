if (process.env.NODE_ENV === 'development') {
  module.exports = {
    // تكوين فارغ أو مبسط لبيئة التطوير
    plugins: []
  }
} else {
  module.exports = {
    // تكوين كامل لبيئة الإنتاج
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    }
  }
}
