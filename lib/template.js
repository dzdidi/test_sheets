var assert = require('assert');

var compareAndReport = require('./compare_and_report');
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

function makeRequires() {
  return (
    'var scrapBase = require(\'../../banking/scraping/nodeBase\');'
    + '\n var assert = require(\'assert\');'
    + '\n');
};

/*
TODO:
 - conversion from array to string should be hacked or call via call?
*/

function makeCall(script, arguments, outputs) {
  return ('scrapBase.prototype.execScript(this, \''
    + script
    + '\', '
    + arguments
    + ', '
    + compareAndReport(outputs).toString()
    + ');');
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



if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    applyTemplate: applyTemplate,
    makeRequires: makeRequires,
    addDescription: addDescription,
    getRow: getRow,
    getValue: getValue,
    translateRow: translateRow,
    // getDeepKeys: getDeepKeys,
    // makeCall: makeCall,
    // compare: compare,
  };
} else {
  module.exports = {
    // makeComparisonAndWriteResult: makeComparisonAndWriteResult,
    // compare: compare,
    applyTemplate: applyTemplate,
  };
};
