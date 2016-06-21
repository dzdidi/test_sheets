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

  for(var i = 1; i < Object.keys(scheme).length + 1; i++){
    if (!isIn(i, chains)) linear.push(i);
  };

  return(linear.concat(transform(chains)));
};


function transform(arr){
  for (var i = arr.length - 1; i >= 0 ; i--) {
    for (var j = i - 1; j >= 0; j--) {
      if (isIn(arr[i][0], arr[j][1])) {
        var index = arr[j][1].indexOf(arr[i][0])
        arr[j][1].push(arr[i][1])
        arr.splice(i, 1)
        break
      } else if (arr[i][0] === arr[j][0]) { // merge same level nodes
        arr[j] = [arr[j][0], merge(arr[j][1], arr[i][1])]
        break
      } else if(isIn(arr[j][1][0], arr[i])){
        break
      } else {
      }
    }
  }
  return arr
}

function merge(arr1, arr2){
  res = []
  for(var i = 0; i < arr1.length; i++)
    res.push(arr1[i])
  for(var i = 0; i < arr2.length; i++)
    res.push(arr2[i])
  return res;
}

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
    transform: transform,
    isIn: isIn,
    merge: merge,
  };
} else {
  module.exports = {
    makeOrder: makeOrder,
  };
};
