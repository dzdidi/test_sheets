function transformScheme(scheme) {
  if (!scheme)
    throw('scheme has to be provided');

  var res = {
    1: scheme.description,
    2: scheme.moduleUnderTest,
  };

  var size = scheme.objectsUnderTest.length;

  for (var key in scheme) {
    if (key === 'description' || key === 'moduleUnderTest')
      continue;
    for (var i = 3; i < size + 3; i++) {
      res[i] = res[i] || {};
      res[i][key] = getRowFromField(scheme[key], i);
    };
  };

  return res;
};

function getRowFromField(arr, row) {
  return arr.filter(function(el) {
    return (el[1] == row);
  });
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    transformScheme: transformScheme,

    getRowFromField: getRowFromField,
  };
} else {
  module.exports = {
    transformScheme: transformScheme,
  };
}
