function createBasicScheme(sheet) {
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

  return scheme;
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    createBasicScheme: createBasicScheme,
    getDescription: getDescription,
    getModuleUnderTest: getModuleUnderTest,
    getObjectsUnderTest: getObjectsUnderTest,
    getMethodsUnderTest: getMethodsUnderTest,
    getInputs: getInputs,
    getOutputs: getOutputs,
    getInvocationCells: getInvocationCells,
  };
} else {
  module.exports = {
    createBasicScheme: createBasicScheme,
  };
}

/*
  Object getters
*/

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
    if (sheet[key].v === '|' || sheet[key].v === '||')
      cells.push(key.match(/^[A-z]+/).input);
  };

  return cells;
};
