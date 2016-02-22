/*
execScript(childContext, scriptToCall, credentialsToUse, pin, tasks, child, port, tan, callback)

execScript(this, getValue(sheet, scheme[i].objectUnderTest), <credentialsToUse>, pin, [getValue(sheet, scheme[i].methodsUnderTest)], this.child, ?port?, <tan>, compareAndReport(<outputs>))
*/

/* MAIN FUNCTION */
/*
TODO:
  invocation parameters must be changed
*/

function applyTemplate(sheet, scheme, refScheme) {
  var res = '';
  res += addDescription(getValue(sheet, 'A1'));
  res += makeRequires();

  res += makeDeclarations(sheet, refScheme);

  var scheme = schemeToArray(scheme);

  res += makeCalls(sheet, scheme, 0, '');
  res = res.replace(/&#10;/g, '\n');

  return res;
};

/* INTERPETERS */

function addDescription(description) {
  return '/*\n ' + description + ' \n */\n';
};

function makeRequires() {
  return ('var assert = require(\'assert\');'
    + '\nvar nodeBase = require(\'../../banking/src/nodeBase\').execScript;'
    + '\nvar makeComparisonAndWriteResult = require(\'./compare_and_report\');\n'
    + '\n'
  );
};

function makeCalls(sheet, scheme, indent, res){
  if (scheme.length === 0) {
    return res;
  } else {
    return res.concat('  '.repeat(indent) +'nodeBase('
      , 'this, \''
      , getValue(sheet, scheme[0].objectsUnderTest) + '\', '
      , 'credentials' + ', '
      , 'pin' + ', '
      , 'tasks' + ', '
      , 'this.child, '
      , 'port'+ ', '
      , 'tan' + ', '
      , 'function(err, data){\n'
      , '  '.repeat(indent + 1)
      , 'if(err)'
      , '  ' , 'return(err, null);\n'
      , '  '.repeat(indent + 1)
      , 'if(makeComparisonAndWriteResult('
      , scheme[0].outputs
      , ', data)){\n'
      , '  '.repeat(indent + 2)
      , scheme[0].outputs
      , ' = data;\n'
      , '  '.repeat(indent + 1)
      , '} else {\n'
      , '  '.repeat(indent + 2)
      , 'return;\n'
      , '  '.repeat(indent + 1)
      , '};\n'
      , makeCalls(sheet, scheme.slice(1, Object.keys(scheme).length), indent + 1, res)
      , '  '.repeat(indent) + '});\n');
  };
};

/* ACESSORS */
function getValue(sheet, cell) {
  return sheet[cell].v;
};

// not tested
function schemeToArray(scheme){
  var res = [];

  for(var i = 3; i <= Object.keys(scheme).length; i++){
    res.push(scheme[i]);
  };

  return res;
};

function makeDeclarations(sheet, refScheme){
  var res = '';

  for(var cell of refScheme.icells){
    res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + '\n';
  };
  for (var cell of refScheme.iocells) {
    sheet[cell].v = sheet[cell].f;
    res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + '\n';
  };
  for (var cell of refScheme.ocells) {
    res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + '\n';
  };

  return res;
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    applyTemplate: applyTemplate,
    makeRequires: makeRequires,
    addDescription: addDescription,
    getValue: getValue,
    makeCalls: makeCalls,
    schemeToArray: schemeToArray,
    makeDeclarations: makeDeclarations,
  };
} else {
  module.exports = {
    applyTemplate: applyTemplate,
  };
};
