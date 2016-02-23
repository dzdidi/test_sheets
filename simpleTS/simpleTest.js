/*
 Test for tranlation to js file 
 */
var assert = require('assert');
var nodeBase = require('../../banking/src/nodeBase').execScript;
var makeComparisonAndWriteResult = require('./compare_and_report');


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

 var C4 =  {  "countryCode": "280",
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

 var C5 =  {  "countryCode": "280",
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
nodeBase(this, 'BankAustria', C3, D3, ["getAccounts"], null, null, E3, function(err, data){
  if(err)  return(err, null);
  if(makeComparisonAndWriteResult(G3, data)){
    G3 = data;
  } else {
    return;
  };
  nodeBase(this, 'BankAustria', C4, null, ["getAccounts"], null, null, null, function(err, data){
    if(err)  return(err, null);
    if(makeComparisonAndWriteResult(G4, data)){
      G4 = data;
    } else {
      return;
    };
    nodeBase(this, 'BankAustria', C5, D5, ["getAccounts"], null, null, null, function(err, data){
      if(err)  return(err, null);
      if(makeComparisonAndWriteResult(G5, data)){
        G5 = data;
      } else {
        return;
      };
    });
  });
});
