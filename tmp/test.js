var xlsx = require('xlsx');
var fileObject = xlsx.readFile('Basic.xlsx');
console.log(fileObject.Sheets.Sheet1);
// Object.keys(fileObject).forEach(function(prop){
//   console.log("======================================================");
//   console.log(prop);
//   console.log("++++++");
//   console.log(fileObject[prop]);
// })
