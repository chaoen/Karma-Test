module.exports = (config) => {
  config.set({
    
    autoWatch: true,

    singleRun: false,
    
    browsers: [
      'Chrome',
      'PhantomJS',
      'IE',
    ],

    port: 9876,

    frameworks: ['mocha', 'sinon', 'sinon-chai', 'chai'],

    files: [
      'karma.spec.js',
    ],

    
    preprocessors: {
      'karma.spec.js': ['webpack'],
    },

    webpackServer: {
      noInfo: true
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            // transpile all files except testing sources with babel as usual
            test: /\.spec\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
          }
        ],
        postLoaders: [
          {
            // transpile and instrument only testing sources with isparta
            test: /\.js$/,
            exclude: [
              /node_modules/,
              /\.spec\.js$/,
            ],
            loader: 'isparta',
          }
        ]
      }
    },
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'html' },
      ]
    },
  });
};
