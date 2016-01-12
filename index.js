var streams = require('./lib/read_stream');

streams('./test/doublers').pipe(process.stdout);
