// var Reader = require('./lib/read_xlsx');
// var r = new Reader('./test/doublers');
//
// r.on('data', function(data){
//     console.log(data);
//   }).on('end', function(){
//     console.log('The end is here');
//   });

var r = require('./lib/read_xlsx')
r('./test/doublers')

//
// var fsReaddir = require('fs-readdir');
//
// fsReaddir('./test/doublers')
//   .on('file', function(obj){
//     console.log('-----');
//     console.log(obj)})
//   .on('finish', function(obj){
//     console.log('+++++');
//     console.log(obj);
//   })
