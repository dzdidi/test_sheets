var Reader = require('./lib/read_xlsx');

var r  = new Reader('./test/doublers');

// r.pipe(process.stdOut);
r.on('readable', function() {
  console.log(r.read());
});
//
// r.on('error', function(err){
//   console.log(err);
// });

// var funks = require('./lib/read_xlsx')
// funks.getFiles('./test/doublers').then(
//   function(data) {
//     console.log(funks.makeOutput(data));
//   }, function(err) {
//     console.log(err);
//   });
