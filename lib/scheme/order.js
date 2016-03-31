function makeOrder(sheet, scheme) {
  var chains = [];
  var linear = [];

  for(var i = 3; i < Object.keys(scheme).length; i++){
    var chain = [];

    for (var cell in sheet) {
      if (sheet[cell].f == scheme[i].outputs[0]) {
        if(chain[0]){
          chain[1].push(parseInt(cell.slice(1)));
        } else {
          chain[0] = parseInt(sheet[cell].f.slice(1));
          chain[1] = [parseInt(cell.slice(1))];
        };
      }
    };
    if(chain.length > 0)
      chains.push(chain);
  };

  for(var i = 1; i < Object.keys(scheme).length; i++){
    if (!isIn(i, chains)) linear.push(i);
  };
  console.log(transform(chains));
  return(linear.concat(transform(chains)));
};

function transform(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] && array[i][1]) {
      for (var j = 0; j < array[i][1].length; j++) {
        for (var k = i + 1; k < array.length; k++) {
          if (array[i][1][j] == array[k][0]) {
            array[i][1][j] = [array[i][1][j], array[k][1]];
            array.splice(k, 1);
          };
        };
      };
    } else if(Array.isArray(array[0])) {
      if (isIn(array[i], array[0])) {
        array.splice(i, 1);
        i--;
      };
    };
    if(Array.isArray(array[i])){
      for (var j = 0; j < array[i].length; j++) {
        if(Array.isArray(array[i][j]))
          transform(array[i][j]);
      };
    };
  };
  return array;
};

function isIn(el, arr) {
  var res = false;

  for (entry of arr) {
    if (Array.isArray(entry)) {
      if(!res)
        res = isIn(el, entry)
    } else {
      if (entry == el) return true;
    };
  };
  return res;
};


if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    makeOrder: makeOrder,
    transform: transform
  };
} else {
  module.exports = {
    makeOrder: makeOrder,
  };
};
