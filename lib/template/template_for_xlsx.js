/*
  S. - Single Responsibility Principle - can be changed only due to the change invocation type of a function (spawns child process)
  O. - Open Close Principle - Closed for changes / no additions can be detected
  L. - Liscov Substitution Principle - invoked as a helper function
  I. - Interface Segregation Principle - invoked as a helper function
  D. - Dependency Inversion Principle - transformStream does not depend on this helper's implementation
*/

function applyTemplate(sheet, scheme, fileName) {
  var scheme = schemeToArray(scheme);
  var res = '';

  res += addDescription(getValue(sheet, 'A1'));
  res += addRequires();
  res += addDeclarations(sheet, scheme);
  res += '\n';
  res += addCalls(sheet, scheme, 0, '', fileName);

  return res;
};

/* INTERPETERS */
function addDescription(description) {
  return '/*\n ' + description + ' \n */\n';
};

function addRequires() {
  return ('var makeComparisonAndWriteResult = require(\'../compare_and_write\');\n'
  );
};

function addDeclarations(sheet, scheme){
  var res = 'var tmp = {};\n';

  for (var i = 0; i < scheme.length; i++) {
    var row = scheme[i];
    for (var j = 0; j < row.objectsUnderTest.length; j++) {
      var cell = row.objectsUnderTest[j];
      res += '\n var ' + cell + ' = require(\'./' + getValue(sheet, cell) + '\');';
    };
    for (var j = 0; j < row.inputs.length; j++) {
      var cell = row.inputs[j];
      res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + ';';
    };
    for (var j = 0; j < row.outputs.length; j++) {
      var cell = row.outputs[j];
      res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + ';';
    };
  };

  return res;
};

function addCalls(sheet, scheme, indent, res, fileName){
  if (scheme.length === 0) {
    return res.concat('\n');
  } else {
    return res.concat('  '.repeat(indent) + scheme[0].objectsUnderTest[0],
    '.' + getValue(sheet, scheme[0].methodsUnderTest),
    '.' + 'call(this' + getCallInputs(sheet, scheme[0])
      + ', function(err, data){\n'
      + '  '.repeat(indent + 1)
      + 'if(err)'
      + '  ' + 'return(err, null);\n'
      + '  '.repeat(indent + 1)
      + 'if(makeComparisonAndWriteResult('
      + getVariable(scheme[0], scheme[0].outputs)
      + ', data, '
      + '\'' + getValue(sheet, scheme[0].invocations, true) + '\'' + ', '
      + '\'' + getValue(sheet, scheme[0].objectsUnderTest) + ' ' + getValue(sheet, scheme[0].methodsUnderTest)+ '\', ' + '\'' + fileName +'\', '+ '\'' + scheme[0].outputs + '\'' + ')){\n'
      + '  '.repeat(indent + 2)
      + getVariable(sheet, scheme[0].outputs)
      + ' = data;\n'
      + '  '.repeat(indent + 1)
      + '};\n'
      + addCalls(sheet, scheme.slice(1, Object.keys(scheme).length), indent + 1, res, fileName)
      + '  '.repeat(indent)
      + '});\n');
  };
};

function getCallInputs(sheet, schemeRow) {
    var res = '';
    if(schemeRow.inputs.length > 0){
        for(var i = 0; i < schemeRow.inputs.length; i++){
            res += ', ' + getVariable(schemeRow, schemeRow.inputs[i]);
        };
    };
    return res;
}

/* ACESSORS */
function getValue(sheet, cell, invocation) {
  if (sheet[cell] && !invocation && (typeof sheet[cell].v === 'string')) {
    return sheet[cell].v.replace(/&#10;/g, '\n').replace(/“/g, '\"').replace(/”/g, '\"').split('\\')[0];
  } else if (sheet[cell] && invocation && (typeof sheet[cell].v === 'string')) {
    return sheet[cell].v.replace(/&#10;/g, '\n').replace(/“/g, '\"').replace(/”/g, '\"');
  } else {
    return '';
  }
};

function getVariable(schemeRow, cell) {
  return cell;
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
