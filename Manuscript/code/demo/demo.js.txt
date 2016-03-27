/*
 Demonstaration 
 */
var makeComparisonAndWriteResult = require('../compare_and_write');

 var A3 = require('./stack');
 var F3 = {"size":0};
 var A4 = require('./stack');
 var C4 = {el: 1};
 var F4 = {};
 var A5 = require('./stack');
 var F5 = {"size":1};
 var A6 = require('./stack');
 var F6 = {"el":100};
 var A7 = require('./stack');
 var F7 = {"size":1};
 var A8 = require('./stack');
 var F8 = {"el":1};
 var A9 = require('./stack');
 var F9 = {"el":100};
 var A10 = require('./stack');
 var F10 = {"el":1};
 var A11 = require('./stack');
 var F11 = {"size":0};
A3.size.call(this, function(err, data){
  if(err)  return(err, null);
  if(makeComparisonAndWriteResult(F3, data, '||', 'stack size', 'demo/demo.xlsx', 'F3')){
    F3 = data;
  };
  A4.push.call(this, C4, function(err, data){
    if(err)  return(err, null);
    if(makeComparisonAndWriteResult(F4, data, '|', 'stack push', 'demo/demo.xlsx', 'F4')){
      F4 = data;
    };
    A5.size.call(this, function(err, data){
      if(err)  return(err, null);
      if(makeComparisonAndWriteResult(F5, data, '||', 'stack size', 'demo/demo.xlsx', 'F5')){
        F5 = data;
      };
      A6.top.call(this, function(err, data){
        if(err)  return(err, null);
        if(makeComparisonAndWriteResult(F6, data, '|', 'stack top', 'demo/demo.xlsx', 'F6')){
          F6 = data;
        };
        A7.size.call(this, function(err, data){
          if(err)  return(err, null);
          if(makeComparisonAndWriteResult(F7, data, '||', 'stack size', 'demo/demo.xlsx', 'F7')){
            F7 = data;
          };
          A8.top.call(this, function(err, data){
            if(err)  return(err, null);
            if(makeComparisonAndWriteResult(F8, data, '||', 'stack top', 'demo/demo.xlsx', 'F8')){
              F8 = data;
            };
            A9.top.call(this, function(err, data){
              if(err)  return(err, null);
              if(makeComparisonAndWriteResult(F9, data, '||', 'stack top', 'demo/demo.xlsx', 'F9')){
                F9 = data;
              };
              A10.pop.call(this, function(err, data){
                if(err)  return(err, null);
                if(makeComparisonAndWriteResult(F10, data, '||', 'stack pop', 'demo/demo.xlsx', 'F10')){
                  F10 = data;
                };
                A11.size.call(this, function(err, data){
                  if(err)  return(err, null);
                  if(makeComparisonAndWriteResult(F11, data, '||', 'stack size', 'demo/demo.xlsx', 'F11')){
                    F11 = data;
                  };

                });
              });
            });
          });
        });
      });
    });
  });
});
