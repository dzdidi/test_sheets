/*
 Test for tranlation to js file 
 */
var assert = require('assert');
var nodeBase = require('../../banking/src/nodeBase').execScript;
var makeComparisonAndWriteResult = require('compare_and_write');

 var A3 = require('BankAustria');

 var C3 =  {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" };

 var D3 = "38567";

 var E3 = "12345";

 var G3 =  {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" };

 var A4 = require('BankAustria');

 var C4 = {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" };

 var G4 =  {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" };

 var A5 = require('BankAustria');

 var C5 = {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" };

 var D5 = "38567";

 var G5 =  {  "countryCode": "280",
    "custID": "",
    "custID2": "",
    "hbciVersion": "0",
    "language": 1,
    "url": "bawagPSK.js",
    "userID": "64769092",
    "pin": "38567" };
A3.getAccounts.call(this, C3,D3,E3, function(err, data){
  if(err)  return(err, null);
  if(makeComparisonAndWriteResult(G3, data, '||', 'BankAustria getAccounts', 'simpleTS/simpleTest.xlsx', 'G3')){
    G3 = data;
  } else {
    return;
  };
  A4.getAccounts.call(this, C4, function(err, data){
    if(err)  return(err, null);
    if(makeComparisonAndWriteResult(G4, data, '|', 'BankAustria getAccounts', 'simpleTS/simpleTest.xlsx', 'G4')){
      G4 = data;
    } else {
      return;
    };
    A5.getAccounts.call(this, C5,D5, function(err, data){
      if(err)  return(err, null);
      if(makeComparisonAndWriteResult(G5, data, '||', 'BankAustria getAccounts', 'simpleTS/simpleTest.xlsx', 'G5')){
        G5 = data;
      } else {
        return;
      };

});
});
});