/*
execScript(childContext, scriptToCall, credentialsToUse, pin, tasks, child, port, tan, callback)

execScript(this, getValue(sheet, scheme[i].objectUnderTest), <credentialsToUse>, pin, [getValue(sheet, scheme[i].methodsUnderTest)], nu, ?port?, <tan>, compareAndReport(<outputs>))
*/

/* MAIN FUNCTION */
/*
TODO:

*/

function applyTemplate(sheet, scheme, fileName) {
  var scheme = schemeToArray(scheme);
  var res = '';

  res += addDescription(getValue(sheet, 'A1'));
  res += addRequires();
  res += addDeclarations(sheet, scheme);
  res += addCalls(sheet, scheme, 0, '', fileName);

  return res;
};

/* INTERPETERS */
function addDescription(description) {
  return '/*\n ' + description + ' \n */\n';
};

function addRequires() {
  return ('var assert = require(\'assert\');'
    + '\nvar nodeBase = require(\'../../banking/src/nodeBase\').execScript;'
    + '\nvar makeComparisonAndWriteResult = require(\'compare_and_write\');\n'
  );
};

function addDeclarations(sheet, scheme){
  var res = '';

  for (var i = 0; i < scheme.length; i++) {
    var row = scheme[i];
    for (var j = 0; j < row.objectsUnderTest.length; j++) {
      var cell = row.objectsUnderTest[j];
      res += '\n var ' + cell + ' = require(\'' + getValue(sheet, cell) + '\');\n';
    };
    for (var j = 0; j < row.inputs.length; j++) {
      var cell = row.inputs[j];
      res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + ';\n';
    };
    for (var j = 0; j < row.outputs.length; j++) {
      var cell = row.outputs[j];
      res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + ';\n';
    };
  };

  return res;
};

function addCalls(sheet, scheme, indent, res, fileName){
  if (scheme.length === 0) {
    return res;
  } else {
    return res.concat('  '.repeat(indent) + scheme[0].objectsUnderTest[0],
    '.' + getValue(sheet, scheme[0].methodsUnderTest),
    '.' + 'call(this, ' + scheme[0].inputs
      + ', function(err, data){\n'
      + '  '.repeat(indent + 1)
      + 'if(err)'
      + '  ' + 'return(err, null);\n'
      + '  '.repeat(indent + 1)
      + 'if(makeComparisonAndWriteResult('
      + scheme[0].outputs
      + ', data, '
      + '\'' + getValue(sheet, scheme[0].invocations[0]) + '\'' + ', '
      + '\'' + getValue(sheet, scheme[0].objectsUnderTest) + ' ' + getValue(sheet, scheme[0].methodsUnderTest)+ '\', ' + '\'' + fileName +'\', '+ '\'' + scheme[0].outputs + '\'' + ')){\n'
      + '  '.repeat(indent + 2)
      + scheme[0].outputs
      + ' = data;\n'
      + '  '.repeat(indent + 1)
      + '} else {\n'
      + '  '.repeat(indent + 2)
      + 'return;\n'
      + '  '.repeat(indent + 1)
      + '};\n'
      + addCalls(sheet, scheme.slice(1, Object.keys(scheme).length), indent + 1, res, fileName)
      + '\n});');
  };
};

/* ACESSORS */
function getValue(sheet, cell) {
  if (sheet[cell]) {
    return (sheet[cell].v).replace(/&#10;/g, '\n').replace(/“/g, '\"').replace(/”/g, '\"');
  } else {
    return 'null';
  }
};

function getVariable(schemeRow, cell) {
  if (schemeRow.inputs.indexOf(cell) > -1) {
    return cell;
  } else if (schemeRow.outputs.indexOf(cell) > -1) {
    return cell;
  } else {
    return 'null';
  }
};

function schemeToArray(scheme){
  var res = [];

  for(var i = 3; i <= Object.keys(scheme).length; i++){
    res.push(scheme[i]);
  };

  return res;
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    applyTemplate: applyTemplate,
    addRequires: addRequires,
    addDescription: addDescription,
    addCalls: addCalls,
    addDeclarations: addDeclarations,
    getValue: getValue,
    schemeToArray: schemeToArray,
  };
} else {
  module.exports = {
    applyTemplate: applyTemplate,
  };
};
