function makeOrder(sheet, scheme) {
  var chains = [];
  var linear = [];

  for(var i = 3; i < Object.keys(scheme).length; i++){
    for (var cell in sheet) {
      if (sheet[cell].f == scheme[i].outputs[0]) {
        var chain = [];
        chain[0] = sheet[cell].f.slice(1);
        chain[1] = cell.slice(1);
        chains.push(chain);
      } else {
        if (cell !== '!ref') linear.push(cell.slice(1));
      };
    };
  };

  linear = linear.filter(function(elem, pos) {
    return linear.indexOf(elem) === pos;
  });

  for (var i = 0; i < chains.length; i++) {
    for (var j = 0; j < 2; j++) {
      var index = linear.indexOf(chains[i][j]);
      if (index > -1) linear.splice(index, 1)
    }
  };

  var res = {linear: linear, chains: mergeChains(chains)}
  console.log(res);
  return(res);
};


function mergeChains(input_array) {
  var result = [];
  for (var i = 0; i < input_array.length; i++) {
    var path = input_array[i].slice();
    for (var j = 0; j < path.length; j++) {
      for (var k = i + 1; k < input_array.length; k++) {
        if (input_array[k].indexOf(path[j]) > -1) {
          if (path.indexOf(input_array[k][1 - input_array[k].indexOf(path[j])]) == -1)
            path.push(input_array[k][1 - input_array[k].indexOf(path[j])]);
          input_array.splice(k, 1);
        };
      };
    };

    path.sort(function(a, b) {
      return parseInt(a) - parseInt(b);
    });

    result.push(path)
  }
  return result;
}



if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    makeReferenceScheme: makeOrder,
  };
} else {
  module.exports = {
    makeReferenceScheme: makeOrder,
  };
};
