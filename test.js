var array = ['1',['2','3']]
var s = require('~/Masterthesis/test_sheets/demo/demo.js');
console.log(JSON.stringify(s));
var array2 = ['4', ['5', ['6']]]
var final = [array, array2];

function bar(a){
  res = '';
  for(var i = 0; i < a.length; i++){
    var str = foo(a[i], '');
    res += str;
  }
  return res;
};

function foo(arr, str){
  for (var i = 0; i < arr.length; i++) {
    str += '<' + arr[i]
    if(Array.isArray(arr[i+1])){
      return str += foo(arr[i+1], '') + '>';
    } else {
      str += '>'
    }
  }
  return str;
}

console.log(bar(final))
