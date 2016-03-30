/*
 Demonstaration 
 */
var makeComparisonAndWriteResult = require('../compare_and_write');

var A5 = require('./stack');
var F5 = {"size":1};
var A6 = require('./stack');
var F6 = {"el":100};
var A8 = require('./stack');
var F8 = {el: 1};
var A3 = require('./stack');
var F3 = {"size":0};
var A7 = require('./stack');
var C7 = {el: 1};
var F7 = {};
var A9 = require('./stack');
var C9 = {"size":0};
var D9 = {};
var F9 = {"el":1};
var A11 = require('./stack');
var C11 = {"size":0};
var D11 = {"el":1};
var F11 = {"el":100};

var A4 = require('./stack');
var C4 = {el: 1};
var F4 = {};
var A10 = require('./stack');
var C10 = {};
var F10 = {"el":100};
var A12 = require('./stack');
var C12 = {};
var F12 = {"size":1};

var A13 = require('./stack');
var F13 = {"size":1};
var A14 = require('./stack');
var C14 = {"size":1};
var F14 = {"size":1};

A5.size.call(this, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(F5, data, '||', 'stack size', 'demo/demo.xlsx', 'F5');
  F5 = data;

});
A6.top.call(this, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(F6, data, '|', 'stack top', 'demo/demo.xlsx', 'F6');
  F6 = data;

});
A8.size.call(this, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(F8, data, '||', 'stack size', 'demo/demo.xlsx', 'F8');
  F8 = data;

});
A3.size.call(this, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(F3, data, '||', 'stack size', 'demo/demo.xlsx', 'F3');
  F3 = data;
  A7.push.call(this, C7, function(err, data){
    if(err)  return(err, null);
    makeComparisonAndWriteResult(F7, data, '||', 'stack push', 'demo/demo.xlsx', 'F7');
    F7 = data;
    A9.top.call(this, C9, D9, function(err, data){
      if(err)  return(err, null);
      makeComparisonAndWriteResult(F9, data, '||', 'stack top', 'demo/demo.xlsx', 'F9');
      F9 = data;
      A11.pop.call(this, C11, D11, function(err, data){
        if(err)  return(err, null);
        makeComparisonAndWriteResult(F11, data, '||', 'stack pop', 'demo/demo.xlsx', 'F11');
        F11 = data;

      });
    });
  });
});
A4.push.call(this, C4, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(F4, data, '|', 'stack push', 'demo/demo.xlsx', 'F4');
  F4 = data;
  A10.top.call(this, C10, function(err, data){
    if(err)  return(err, null);
    makeComparisonAndWriteResult(F10, data, '||', 'stack top', 'demo/demo.xlsx', 'F10');
    F10 = data;
    A12.size.call(this, C12, function(err, data){
      if(err)  return(err, null);
      makeComparisonAndWriteResult(F12, data, '||', 'stack size', 'demo/demo.xlsx', 'F12');
      F12 = data;

    });
  });
});
A13.size.call(this, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(F13, data, '||', 'stack size', 'demo/demo.xlsx', 'F13');
  F13 = data;
  A14.size.call(this, C14, function(err, data){
    if(err)  return(err, null);
    makeComparisonAndWriteResult(F14, data, '||', 'stack size', 'demo/demo.xlsx', 'F14');
    F14 = data;

  });
});
