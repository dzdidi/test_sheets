var readStream = require('./lib/read_stream');
var writeStream = require('./lib/write_stream');

readStream('./input_folder').pipe(writeStream);
