var fs = require('fs');

var xlsx = require('xlsx');

//var input = require('../input_folder/basic1.xlsx');

// var f = xlsx.readFile('../input_folder/basic1.xlsx');
// console.log(f);
// console.log(xlsx.read(f));

module.exports = function readXLSX(dir) {
  if (typeof (dir) !== 'string') {
    throw(new Error('Input paramter should be string'));
  };

  //check input for dir/file
  try {
    var isFile = fs.statSync(dir).isFile();
  }catch (e) {
    console.log(e);
    return;
  };

  if (isFile) {
    throw(new Error('Input paramter should be path to directory'));
  };

  //read dir entries

    //check for dir/file
    //for dir call recursively
    //for file create readable stream or create xlsx reader

};
