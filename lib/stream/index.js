var readStream = require('./read_stream');
var writeStream = require('./write_stream');
var transformStream = require('./transform_stream');

module.exports = {
  read: readStream,
  transform: transformStream,
  write: writeStream,
};
