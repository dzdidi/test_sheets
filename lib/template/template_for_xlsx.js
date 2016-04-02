/*
  S. - Single Responsibility Principle - can be changed only due to the change invocation type of a function (spawns child process)
  O. - Open Close Principle - Closed for changes / no additions can be detected
  L. - Liscov Substitution Principle - invoked as a helper function
  I. - Interface Segregation Principle - invoked as a helper function
  D. - Dependency Inversion Principle - transformStream does not depend on this helper's implementation
*/

function applyTemplate(sheet, scheme, fileName) {
  var res = '';

  res += addDescription(scheme[0]);
  scheme = scheme.slice(2);
  res += addRequires();
  res += addDeclarations(sheet, scheme);

  var linearCalls = [];
  var nestedCalls = [];
  for (var i = 0; i < scheme.length; i++) {
    if(Array.isArray(scheme[i])) {
      nestedCalls.push(scheme[i]);
    } else {
      linearCalls.push(scheme[i]);
    }
  };

  res += makeLinearCalls(sheet, linearCalls, fileName);
  for (var i = 0; i < nestedCalls.length; i++){
    res += makeNestedCall(sheet, nestedCalls[i], fileName, '', i);
  };

  return res;
};

function makeNestedCall(sheet, nestedCalls, fileName, str, indent){
  for (var i = 0; i < nestedCalls.length; i++) {
    str += makeCall(sheet, nestedCalls[i], 0, '', fileName)
    if(Array.isArray(nestedCalls[i+1])){
      return str += makeNestedCall(sheet, nestedCalls[i+1], fileName, '', 0) + '\n});\n';
    } else {
      str += '\n});\n'
    }
  }
  return str;
}

function makeLinearCalls(sheet, linearCalls, fileName){
  var res = '';
  for (var i = 0; i < linearCalls.length; i++) {
    res += makeCall(sheet, linearCalls[i], 0, '', fileName) + '\n});\n'
  };
  return res;
}

function addDescription(description) {
  return '/*\n ' + description + ' \n */\n';
};

function addRequires() {
  return ('var makeComparisonAndWriteResult = require(\'../compare_and_write\');\n'
  );
};

function addDeclarations(sheet, scheme){
  var res = '';

  for (var i = 0; i < scheme.length; i++) {
    var row = scheme[i];
    if(Array.isArray(scheme[i])){
      res += addDeclarations(sheet, scheme[i]);
    } else {
      for (var j = 0; j < row.objectsUnderTest.length; j++) {
        var cell = row.objectsUnderTest[j];
        res += '\nvar ' + cell + ' = require(\'./' + getValue(sheet, cell) + '\');';
      };
      for (var j = 0; j < row.inputs.length; j++) {
        var cell = row.inputs[j];
        res += '\nvar ' + cell + ' = ' + getValue(sheet, cell) + ';';
      };
      for (var j = 0; j < row.outputs.length; j++) {
        var cell = row.outputs[j];
        res += '\nvar ' + cell + ' = ' + getValue(sheet, cell) + ';';
      };
    }

  };

  return res + '\n';
};

function makeCall(sheet, scheme, indent, res, fileName) {
  return res.concat('  '.repeat(indent) + scheme.objectsUnderTest[0],
    '.' + getValue(sheet, scheme.methodsUnderTest),
    '.call(' + scheme.objectsUnderTest[0] + getCallInputs(sheet, scheme)
      + ', function(err, data){\n'
      + '  '.repeat(indent + 1)
      + 'if(err)'
      + '  ' + 'return(err, null);\n'
      + '  '.repeat(indent + 1)
      + 'makeComparisonAndWriteResult('
      + scheme.outputs
      + ', data, '
      + '\'' + getValue(sheet, scheme.invocations, true) + '\'' + ', '
      + '\'' + getValue(sheet, scheme.objectsUnderTest) + ' ' + getValue(sheet, scheme.methodsUnderTest)+ '\', ' + '\'' + fileName +'\', '+ '\'' + scheme.outputs + '\'' + ');\n'
      + '  '.repeat(indent + 1)
      + scheme.outputs
      + ' = data;\n');
};

function getCallInputs(sheet, schemeRow) {
    var res = '';
    if(schemeRow.inputs.length > 0){
        for(var i = 0; i < schemeRow.inputs.length; i++){
          res += ', ' + getValue(sheet, schemeRow.inputs[i]);
        };
    };
    return res;
}

function getValue(sheet, cell, invocation) {
  if (sheet[cell] && sheet[cell].f) {
    return sheet[cell].f
  } else {
    if (sheet[cell] && !invocation && (typeof sheet[cell].v === 'string')) {
      return sheet[cell].v.replace(' ', '').replace(/&#10;/g, '\n').replace(/“/g, '\"').replace(/”/g, '\"').split('\\')[0];
    } else if (sheet[cell] && invocation && (typeof sheet[cell].v === 'string')) {
      return sheet[cell].v.replace(' ', '').replace(/&#10;/g, '\n').replace(/“/g, '\"').replace(/”/g, '\"');
    } else {
      return '';
    }
  }
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    applyTemplate: applyTemplate,
    addRequires: addRequires,
    addDescription: addDescription,
    addDeclarations: addDeclarations,
    getValue: getValue,
    makeCall: makeCall,
    makeNestedCall: makeNestedCall,
    makeLinearCalls: makeLinearCalls,
    getCallInputs: getCallInputs,
  };
} else {
  module.exports = {
    applyTemplate: applyTemplate,
  };
};
