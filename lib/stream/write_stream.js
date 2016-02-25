var fs = require('fs');

var through = require('through2');
var multipipe = require('multipipe');

function write(data, enc, callback) {
  var jsFileName = data.fileName.replace('.xlsx', '.js');

  try {
    var jsStat = fs.statSync(jsFileName);
    var testSheetStat = fs.statSync(data.fileName); // error thrown here

    if (jsStat.mtime <= testSheetStat.mtime) {
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
