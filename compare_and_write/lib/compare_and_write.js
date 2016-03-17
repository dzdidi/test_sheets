/*
TODO:
*/

var assert = require('assert');
var fs = require('fs');
var xlsx = require('xlsx');

function makeComparisonAndWriteResult(expected, returned, deepness, scriptName, file, variable){
  var result = compare(expected, returned, deepness);
  report(file, variable, result);
  // console.log(expected, returned, deepness, result);

  return(result);
};

function report(file, variable, result) {
  result ? result = "#00FF00" : result = "#FFFF00";
  var testSheet = xlsx.readFile(file, {'cellStyles': true});
  testSheet.Sheets.Sheet1[variable].s = {
      "patternType":"solid",
      "fgColor":{
          "rgb":"66FF00"
      },
      "bgColor":{
          "rgb":result
      }
  };
  xlsx.writeFile(testSheet, file, {'cellStyles': true});
};

function compare(obj1, obj2, deepness) {
  if(deepness === '|'){
    var scheme1 = [];
    var scheme2 = [];
    getDeepKeys(obj1, scheme1);
    getDeepKeys(obj2, scheme2);

    try {
      assert.deepEqual(scheme1, scheme2);

      return true;
    } catch(e) {
      return false;
    }
  } else if (deepness === '||') {
    try {
      assert.deepEqual(obj1, obj2);

      return true;
    } catch(e) {
      return false;
    }
  }
};

function getDeepKeys(obj, scheme) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      scheme.push(key);
      getDeepKeys(obj[key], scheme);
    } else {
      scheme.push(key);
    };
  };
  return scheme;
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    getDeepKeys: getDeepKeys,
    compare: compare,
    makeComparisonAndWriteResult: makeComparisonAndWriteResult,
  }
} else {
  module.exports = makeComparisonAndWriteResult;
}
