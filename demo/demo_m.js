/*
 Demonstaration 
 */
var makeComparisonAndWriteResult = require('../compare_and_write');

var A3 = require('./stack');
var C3 = {"el":1};
var E3 = {};
var A4 = require('./stack');
var C4 = E3;
var E4 = {};
var A5 = require('./stack');
var C5 = E4;
var E5 = {};
var A6 = require('./stack');
var C6 = E5;
var E6 = {};
var A7 = require('./stack');
var C7 = E6;
var E7 = {};
var A8 = require('./stack');
var C8 = E7;
var E8 = {};
var A9 = require('./stack');
var C9 = E8;
var E9 = {};
var A10 = require('./stack');
var C10 = E9;
var E10 = {};
var A11 = require('./stack');
var C11 = E10;
var E11 = {};
var A12 = require('./stack');
var C12 = E11;
var E12 = {};










A3.push.call(A3, {"el":1}, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E3, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E3');
  E3 = data;
A4.push.call(A4, E3, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E4, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E4');
  E4 = data;
A5.push.call(A5, E4, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E5, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E5');
  E5 = data;
A6.push.call(A6, E5, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E6, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E6');
  E6 = data;
A7.push.call(A7, E6, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E7, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E7');
  E7 = data;
A8.push.call(A8, E7, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E8, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E8');
  E8 = data;
A9.push.call(A9, E8, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E9, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E9');
  E9 = data;
A10.push.call(A10, E9, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E10, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E10');
  E10 = data;
A11.push.call(A11, E10, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E11, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E11');
  E11 = data;
A12.push.call(A12, E11, function(err, data){
  if(err)  return(err, null);
  makeComparisonAndWriteResult(E12, data, '|', 'stack push', 'demo/demo_m.xlsx', 'E12');
  E12 = data;

});

});

});

});

});

});

});

});

});

});
