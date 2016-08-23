var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
new webpackDevServer(webpack(webpackConfig), {
  publicPath: "http://localhost:8080/",
  hot: true,
  headers: { "Access-Control-Allow-Origin": "*" }
}).listen(8080, 'localhost', function(err, result){
  if(err){
    console.PluginError(err);
  }
  console.log('Webpack hot load server listening on port ' + 8080);
});
