function makeReferenceScheme(sheet) {
  var res = {
    cells: [],
    icells: [],
    ocells: [],
    iocells: [],
  };

  for (var cell in sheet) {
    if (sheet[cell].f) {
      res.ocells.push(cell);
      res.icells.push(sheet[cell].f);
    } else {
      if (cell !== '!ref')
        res.cells.push(cell);
    };
  };

  res.cells = res.cells.filter(function(cell) {
    return (res.icells.indexOf(cell) === -1);
  });

  for (var i = 0; i < res.ocells.length; i++) {
    for (var j = 0; j < res.icells.length; j++) {
      if (res.ocells[i] === res.icells[j]) {
        res.iocells.push(res.ocells[i]);
        res.icells.splice(j, 1);
        res.ocells.splice(i, 1);
      };
    };
  };

  return res;
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    makeReferenceScheme: makeReferenceScheme,
  };
} else {
  module.exports = {
    makeReferenceScheme: makeReferenceScheme,
  };
};
