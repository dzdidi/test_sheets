function createTS(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  var tS = {};

  // tS.description = getDescription(sheet);
  return;
};

module.exports = {
  createTS: createTS
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    createTS: createTS,
    getDescription: getDescription,
    getModuleUnderTest: getModuleUnderTest,
    getObjectsUnderTest: getObjectsUnderTest,
    getMethodsUnderTest: getMethodsUnderTest,
    getInputs: getInputs,
    getOutputs: getOutputs
  };
};

function getDescription(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return sheet;
};

function getModuleUnderTest(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return;
};

function getObjectsUnderTest(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return;
};

function getMethodsUnderTest(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return;
};

function getInputs(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return;
};

function getOutputs(sheet) {
  if (!sheet)
    throw(Error('sheet has to be provided'));

  return;
};
