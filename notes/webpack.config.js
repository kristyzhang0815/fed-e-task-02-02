
const path = require('path')
module.exports={
  mode:'none',
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'output'),//必须是绝对路径
    // publicPath:'dist/'
  },
  module:{
    rules:[
      {
        test: /.css$/,
        use:[//从后往前执行
          'style-loader',
          'css-loader'
        ]
      },{
        test:/.png$/,
        use: 'url-loader'
      }
    ]
  }
}

