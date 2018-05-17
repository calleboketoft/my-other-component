exports.config = {
  namespace: 'mypluginnrone',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false,
      buildDir: '../..'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
