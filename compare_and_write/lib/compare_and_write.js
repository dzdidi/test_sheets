/*
  S. - Single Responsibility Principle - can be changed only due to the change invocation type of a function (spawns child process)
  O. - Open Close Principle - Closed for changes / no additions can be detected
  L. - Liscov Substitution Principle - invoked as a helper function
  I. - Interface Segregation Principle - invoked as a helper function
  D. - Dependency Inversion Principle - testing script does not depend on implementation of this function
*/

var assert = require('assert');
var fs = require('fs');
var xlsx = require('xlsx');
var util = require('util')

function makeComparisonAndWriteResult(expected, returned, deepness, scriptName, file, variable){
  var result = compare(expected, returned, deepness);
  var res = "";
  result ? res = "#00FF00" : res = "#FFFF00";
  var testSheet = xlsx.readFile(file, {'cellStyles': true});

  if(!result){
    testSheet.Sheets.Sheet1[variable].v = JSON.stringify(expected) + '\\' + JSON.stringify(returned);
  };

  xlsx.writeFile(testSheet, file, {'cellStyles': true});

  console.log("In cell", variable, result ? "Test succeed." : "Test step failed with returned value: " + util.inspect(returned, {depth: null}), "Comparison done by:", deepness);

  return(result);
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
