/*
  S. - Single Responsibility Principle - can be changed only due to the change of Test Sheet type
  O. - Open Close Principle - new method can be added for scheme creation in case of different test Sheet Type
  L. - Liscov Substitution Principle - invoked as a helper function
  I. - Interface Segregation Principle - invoked as a helper function
  D. - Dependency Inversion Principle - transformStream does not depend on this helper's implementation
*/

function createScheme(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var scheme = {};

  scheme.description = getDescription(sheet);
  scheme.moduleUnderTest = getModuleUnderTest(sheet);
  scheme.objectsUnderTest = getObjectsUnderTest(sheet);
  scheme.methodsUnderTest = getMethodsUnderTest(sheet);
  scheme.inputs = getInputs(sheet);
  scheme.outputs = getOutputs(sheet);
  scheme.invocations = getInvocationCells(sheet);
  return transformScheme(scheme);
};

function transformScheme(scheme) {
  if (!scheme)
    throw('scheme has to be provided');

  var res = {};

  var size = scheme.objectsUnderTest.length + 3;

  for (var key in scheme) {
    if (key === 'description'){
      res['1'] = scheme[key];
    } else if (key === 'moduleUnderTest') {
      res['2'] = scheme[key];
    } else {
      for (var i = 3; i < size; i++) {
        res[i] = res[i] || {};
        res[i][key] = getRowFromField(scheme[key], i);
      };
    }
  };
  return res;
};

function getRowFromField(arr, row) {
  return arr.filter(function(el) {
    return (el.substring(1) == row);
  });
};

function getDescription(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return sheet.A1.v;
};

function getModuleUnderTest(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return sheet.A2.v;;
};

function getObjectsUnderTest(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var cells = [];
  for (key of Object.keys(sheet)) {
    if (key.match(/^A?\d/) && (key !== 'A1') && (key !== 'A2'))
      cells.push(key);
  };

  return cells;
};

function getMethodsUnderTest(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var cells = [];
  for (key of Object.keys(sheet)) {
    if (key.match(/^B?\d/))
      cells.push(key);
  };

  return cells;
};

function getInputs(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var invocationCells = getInvocationCells(sheet);
  var cells = [];

  for (key of Object.keys(sheet)) {
    if (key.match(/^[^A,B]?\d/) && (key[0] < invocationCells[0][0]))
      cells.push(key);
  };

  return cells;
};

function getOutputs(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));
  var invocationCells = getInvocationCells(sheet);
  var cells = [];

  for (key of Object.keys(sheet)) {
    if (key[0] > invocationCells[0][0])
      cells.push(key);
  };

  return cells;
};

function getInvocationCells(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var cells = [];
  for (key of Object.keys(sheet)) {
    if (sheet[key].v) {
      if ((sheet[key].v.replace(' ', '') === '|') || (sheet[key].v.replace(' ', '') === '||')) {
        cells.push(key.match(/^[A-z]+/).input);
      }
    }
  };

  return cells;
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    createScheme: createScheme,
    getRowFromField: getRowFromField,
    getDescription: getDescription,
    getModuleUnderTest: getModuleUnderTest,
    getObjectsUnderTest: getObjectsUnderTest,
    getMethodsUnderTest: getMethodsUnderTest,
    getInputs: getInputs,
    getOutputs: getOutputs,
    transformScheme: transformScheme,
    getRowFromField: getRowFromField,
    getInvocationCells: getInvocationCells,
  };
} else {
  module.exports = {
    createScheme: createScheme,
  };
}
