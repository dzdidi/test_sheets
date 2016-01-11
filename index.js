var Reader = require('./lib/read_xlsx');

var r  = new Reader('./test/doublers');

r.on('readable', function() {
  console.log(r.read());
})
