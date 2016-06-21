/*
 Demonstaration 
 */
var makeComparisonAndWriteResult = require('../compare_and_write');

var A3 = require('./stack');
var E3 = {"size":0};
var A4 = require('./stack');
var C4 = {"el":1};
var E4 = {};
var A5 = require('./stack');
var E5 = C4;
var A6 = require('./stack');
var C6 = E5;
var E6 = {};
var A7 = require('./stack');
var C7 = E5;
var E7 = {};
var A10 = require('./stack');
var E10 = E5;
var A11 = require('./stack');
var C11 = E10;
var E11 = {};



var A8 = require('./stack');
var E8 = {"el":5};
var A9 = require('./stack');
var C9 = E8;
var E9 = {};


A3.size.call(A3, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E3, data, '||', 'stack size', 'demo/demo.xlsx', 'E3');
  E3 = data;

});
A4.push.call(A4, {"el":1}, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E4, data, '||', 'stack push', 'demo/demo.xlsx', 'E4');
  E4 = data;

});
A5.top.call(A5, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E5, data, '||', 'stack top', 'demo/demo.xlsx', 'E5');
  E5 = data;
A6.push.call(A6, E5, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E6, data, '|', 'stack push', 'demo/demo.xlsx', 'E6');
  E6 = data;

});
A7.push.call(A7, E5, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E7, data, '|', 'stack push', 'demo/demo.xlsx', 'E7');
  E7 = data;

});
A10.pop.call(A10, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E10, data, '||', 'stack pop', 'demo/demo.xlsx', 'E10');
  E10 = data;
A11.push.call(A11, E10, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E11, data, '||', 'stack push', 'demo/demo.xlsx', 'E11');
  E11 = data;

});

});

});
A8.pop.call(A8, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E8, data, '||', 'stack pop', 'demo/demo.xlsx', 'E8');
  E8 = data;
A9.push.call(A9, E8, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E9, data, '||', 'stack push', 'demo/demo.xlsx', 'E9');
  E9 = data;

});

});
