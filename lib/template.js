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

  for (cell of scheme[row].inputParameters) {
    res.inputs.push(getValue(sheet, cell));
  };

  for (cell of scheme[row].outputParameters) {
    res.outputs.push(getValue(sheet, cell));
  };

  return res;
};

function translateRow(row) {};

function getValue(sheet, cell) {
  //sheet[cell][v] - value || Sheets.Sheet1[cell][f] - function || ref to other cell

  //recursive? check for refferences should be implemented if required
  /*
    if(sheet[cell].l)
      sheet[sheet[cell].l].v
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
