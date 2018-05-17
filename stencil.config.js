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
    },
    {
      type: 'www'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
