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

function applyTemplate(sheet, scheme) {};

function addDescription(description) {
  return '/*\n ' + description + ' \n */';
};

function makeRequire(moduleUnderTest) {
  return 'var ' + moduleUnderTest + ' = require(\'./' + moduleUnderTest + '\');\n';
};

function getRow(row, sheet, scheme) {
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

function translateRow(row) {};

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
    makeRequire: makeRequire,
    addDescription: addDescription,
    getRow: getRow,
    getValue: getValue,
    translateRow: translateRow,
  };
} else {
  module.exports = {
    applyTemplate: applyTemplate,
  };
};

// module.exports = function() {
//   console.log(scrapBase);
// }
