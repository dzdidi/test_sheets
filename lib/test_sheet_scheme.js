function createBasicScheme(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var tS = {};

  var sheet = sheet.Sheets.Sheet1

  tS.description = getDescription(sheet);
  tS.moduleUnderTest = getModuleUnderTest(sheet);
  tS.objectsUnderTest = getObjectsUnderTest(sheet);
  tS.methodsUnderTest = getMethodsUnderTest(sheet);
  tS.inputs = getInputs(sheet);
  tS.outputs = getOutputs(sheet);

  return tS;
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
    createBasicScheme: createBasicScheme
  };
}

/**
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

  //starting from invocaton
  for (key of Object.keys(sheet)) {
    if (key[0] > invocationCells[0][0])
      cells.push(key);
  };

  return cells;
};

/**
  Delimeter getters
*/
function getInvocationCells(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var cells = [];
  for (key of Object.keys(sheet)) {
    if (sheet[key].v === '|')
      cells.push(key.match(/^[A-z]+/).input);
  };

  return cells;
};
