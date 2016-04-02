/*
  S. - Single Responsibility Principle - can be changed only due to the change of Test Sheet type
  O. - Open Close Principle - New pipes can be added in a single place before write pipe;
  L. - Liscov Substitution Principle - no inheritance
  I. - Interface Segregation Principle - Stream interface / File System interface
  D. - Dependency Inversion Principle - Higher level module index.js does not depend on implementation of current library
*/
var fs = require('fs');

var through = require('through2');
var multipipe = require('multipipe');

function write(data, enc, callback) {
  var ext = path.extname(data.fileName)
  var jsFileName = data.fileName.replace(ext, '.js');

  try {
    var jsStat = fs.statSync(jsFileName); // error thrown here
    if (jsStat.mtime <= data.meta.mtime) {
      fs.writeFile(jsFileName, data.content, function(err, data){
        if(err)
          console.error(err);
        console.log(jsFileName + " was updated");
      });
    };
  } catch (e) {
    fs.writeFile(jsFileName, data.content, function(err, data){
      if(err)
        console.error(err);
      console.log(jsFileName + " was created");
    });
  };

  callback();
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = write;
} else {
  module.exports = through.obj(write);
};
