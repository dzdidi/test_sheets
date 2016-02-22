/*
 Test for tranlation to js file 
 */
var assert = require('assert');
var nodeBase = require('../../banking/src/nodeBase').execScript;
var compareAndReport = require('./compare_and_report');


 var E3 = {"credentials": {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" }}

 var C4 = E3

 var C5 = {"credentials": {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" }}
nodeBase(this, 'BankAustria', credentials, pin, tasks, this.child, port, tan, function(err, data){
  if(err)  return(err, null);
  if(makeComparisonAndWriteResult(E3, data)){
    E3 = data;
  } else {
    return;
  };
  nodeBase(this, 'BankAustria', credentials, pin, tasks, this.child, port, tan, function(err, data){
    if(err)  return(err, null);
    if(makeComparisonAndWriteResult(E4, data)){
      E4 = data;
    } else {
      return;
    };
    nodeBase(this, 'BankAustria', credentials, pin, tasks, this.child, port, tan, function(err, data){
      if(err)  return(err, null);
      if(makeComparisonAndWriteResult(E5, data)){
        E5 = data;
      } else {
        return;
      };
    });
  });
});
