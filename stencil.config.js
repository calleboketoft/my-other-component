exports.config = {
  namespace: 'mypluginnrone',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  copy: [
    {
      src: 'lwc-manifest.json'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
