/*
TODO

1) Proper implementation of makeComparisonAndWriteResult
2) Proper implementation of report
3) Handling for references
*/

var assert = require('assert');

// not covered probably should also accept all the info from above stream
function makeComparisonAndWriteResult(expected, returned, scriptName){
  var result = compare(expected, returned)
  report(result);

  return(result);
};

// should depend on environment for Test Sheet and LogStash reporting
function report(result) {
  result ? console.log(':)') : console.err(':(');
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
    f: function(outputs) {
      return function(err, data){
        if(err){
          console.log(err);
          return;
        } else {
          return makeComparisonAndWriteResult(outputs, data);
        }
      }
    },
  }
} else {
  module.exports = makeComparisonAndWriteResult;
}
