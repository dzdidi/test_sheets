/*
execScript(childContext, scriptToCall, credentialsToUse, pin, tasks, child, port, tan, callback)

execScript(this, getValue(sheet, scheme[i].objectUnderTest), <credentialsToUse>, pin, [getValue(sheet, scheme[i].methodsUnderTest)], nu, ?port?, <tan>, compareAndReport(<outputs>))
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
  var scheme = schemeToArray(scheme);

  res += makeDeclarations(sheet, scheme);

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
    // var params = getScrappingInputs(sheet, scheme[0]);
    return res.concat('  '.repeat(indent) +'nodeBase('
      , 'this, \''
      , getValue(sheet, scheme[0].objectsUnderTest) + '\', ' //script to call
      , getVariable(scheme[0], scheme[0].inputs[0]) + ', ' //credentials
      , getVariable(scheme[0], scheme[0].inputs[1]) + ', ' //pin
      , '[\"' + getValue(sheet, scheme[0].methodsUnderTest) + '\"]' + ', ' // tasks
      , 'null, ' //child
      , getVariable(scheme[0], scheme[0].inputs[3]) + ', ' // port
      , getVariable(scheme[0], scheme[0].inputs[2])+ ', ' //tan
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
  if (sheet[cell]) {
    return (sheet[cell].v).replace(/&#10;/g, '\n').replace(/“/g, '\"').replace(/”/g, '\"');
  } else {
    return 'null';
  }
};

function getDeepValue(sheet, cell) {
  if(sheet[cell].v.match(/^[A-z]?\d/))
    return getValue(sheet, sheet[cell].v);
  return (sheet[cell].v).replace(/&#10;/g, '\n').replace(/“/g, '\"').replace(/”/g, '\"');
};

function getVariable(schemeRow, cell) {
  if (schemeRow.inputs.indexOf(cell) > -1) {
    return cell;
  } else if (schemeRow.outputs.indexOf(cell) > -1) {
    return cell;
  } else {
    return 'null';
  }
}

// not tested
function schemeToArray(scheme){
  var res = [];

  for(var i = 3; i <= Object.keys(scheme).length; i++){
    res.push(scheme[i]);
  };

  return res;
};

function makeDeclarations(sheet, scheme){
  var res = '';

  for (var i = 0; i < scheme.length; i++) {
    var row = scheme[i];
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

// function makeDeclarations(sheet, refScheme, scheme){
//   var res = '';
//
//   for(var cell of refScheme.icells){
//     res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + ';\n';
//   };
//   for (var cell of refScheme.iocells) {
//     sheet[cell].v = sheet[cell].f;
//     res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + ';\n';
//   };
//   for (var cell of refScheme.ocells) {
//     sheet[cell].v = sheet[cell].f;
//     res += '\n var ' + cell + ' = ' + getValue(sheet, cell) + ';\n';
//   };
//
//   return res;
// };
// function getScrappingInputs(sheet, schemeRow){
//
//   var res = {
//     script: null,
//     credentials: null,
//     pin: null,
//     tasks: [],
//     port: null,
//     tan: null,
//   };
//
//   res.script = getDeepValue(sheet, schemeRow.objectsUnderTest)
//
//   for(method of schemeRow.methodsUnderTest){
//     res.tasks.push(getValue(sheet, method));
//   };
//
//   for(inputCell of schemeRow.inputs){
//     console.log('---------');
//     console.log(inputCell);
//     // /^[A-z]?\d/
//     console.log(getValue(sheet, inputCell));
//     var input = JSON.parse(getValue(sheet, inputCell));
//
//     if(input.credentials)
//       res.credentials = inputCell;
//
//     if(input.pin)
//       res.pin = inputCell;
//
//     if(input.tan)
//       res.tan = inputCell;
//   };
//
//   return res;
// };

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    applyTemplate: applyTemplate,
    makeRequires: makeRequires,
    addDescription: addDescription,
    getValue: getValue,
    makeCalls: makeCalls,
    schemeToArray: schemeToArray,
    makeDeclarations: makeDeclarations,
    // getScrappingInputs: getScrappingInputs,
  };
} else {
  module.exports = {
    applyTemplate: applyTemplate,
  };
};
