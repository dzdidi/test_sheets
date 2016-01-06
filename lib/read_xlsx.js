var fs = require('fs');
var path = require('path');

var xlsx = require('xlsx');

var testSheetFactory = require('./test_sheet_factory');

module.exports = function reader(dirPath) {
  try {
    fs.readdir(dirPath, function(err, files) {
      if (err)
        throw(err);

      files.forEach(function(file) {
        var pathToFile = path.join(dirPath, file);

        if (fs.statSync(pathToFile).isDirectory())
          return reader(pathToFile);

        if (path.extname(pathToFile) !== '.xlsx')
          return;

        // probably only some props are necessary
        var sheet = xlsx.readFile(pathToFile);

        // stream magic should start here
        return;
      });
    });
  } catch (e) {
    //can be changed
    console.log(e);
    throw(e);
  };
};
