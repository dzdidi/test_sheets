function transformScheme(scheme) {
  if (!scheme)
    throw('scheme has to be provided');

  // var res = {
  //   1: scheme.description,
  //   2: scheme.moduleUnderTest,
  // };
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
