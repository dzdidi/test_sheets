var assert = require('assert');
/*
var argv = {
  "credentials": {

    "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567"
  },
  "tasks": [
    "getAccounts"
  ]
};

var scrapBase = require('../../banking/scraping/nodeBase').prototype.execScript(this, 'BankAustria', argv, function(err, data){
if(err)
	console.log('ERR: ' + err);
console.log(data);
})
*/

/* MAIN FUNCTION */
function applyTemplate(sheet, scheme) {};

function translateRow(row) {};

/* INTERPETERS */
function addDescription(description) {
  return '/*\n ' + description + ' \n */';
};

function requireBaseScript() {
  return 'var scrapBase = require(\'../../banking/scraping/nodeBase\')';
};

// conversion from array to string should be hacked or call via call
// function makeCall(script, arguments) {
//   return 'scrapBase.prototype.execScript(this, \'' + script + '\', ' + arguments + ', ' + compare.toString() + ');';
// };

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

/* ACESSORS */
function getRow(sheet, row, scheme) {
  if (row == 1)
    return { description: getValue(sheet, 'A1') };

  if (row == 2)
    return { moduleUnderTest: getValue(sheet, 'A2') };

  var res = {
    objectUnderTest: getValue(sheet, scheme[row].objectsUnderTest[0]),
    methodUnderTest: getValue(sheet, scheme[row].methodsUnderTest[0]),
    inputs: [],
    outputs: [],
  };

  for (cell of scheme[row].inputs) {
    res.inputs.push(getValue(sheet, cell));
  };

  for (cell of scheme[row].outputs) {
    res.outputs.push(getValue(sheet, cell));
  };

  return res;
};

function getValue(sheet, cell) {
  /*
  if (sheet[cell].f)
    return getValue(sheet, sheet[cell].f);

  if (sheet[cell].v.match(/^[A-z]\d+/))
    return getValue(sheet, sheet[cell].v);
  */
  return sheet[cell].v;
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
    applyTemplate: applyTemplate,
    requireBaseScript: requireBaseScript,
    addDescription: addDescription,
    getRow: getRow,
    getValue: getValue,
    translateRow: translateRow,
    getDeepKeys: getDeepKeys,
    // makeCall: makeCall,
    compare: compare,
  };
} else {
  module.exports = {
    applyTemplate: applyTemplate,
  };
};
