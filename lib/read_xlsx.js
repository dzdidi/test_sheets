var fs = require('fs');

var xlsx = require('xlsx');

//var input = require('../input_folder/basic1.xlsx');

var f = xlsx.readFile('../input_folder/basic1.xlsx');
console.log(f);
// console.log(xlsx.read(f));
