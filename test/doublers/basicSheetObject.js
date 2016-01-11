module.exports = {
  Sheets:{
    Sheet1:{
      A1:
       { t: 's',
          v: 'Here should be scenario name',
          r: '<t>Here should be scenario name</t>',
          h: 'Here should be scenario name',
          w: 'Here should be scenario name'
        },
      A2:
        { t: 's',
          v: 'module_under_test.js',
          r: '<t>module_under_test.js</t>',
          h: 'module_under_test.js',
          w: 'module_under_test.js',
          l:
            { _id: 'rId1',
              ref: 'A2',
              Target: 'http://module_under_test.js',
              Rel: [Object]
            }
          },
       A3:
        { t: 's',
          v: 'module_under_test',
          r: '<t>module_under_test</t>',
          h: 'module_under_test',
          w: 'module_under_test'
        },
       B3:
        { t: 's',
          v: 'method1',
          r: '<t>method1</t>',
          h: 'method1',
          w: 'method1'
        },
       C3:
        { t: 's',
          v: 'input1',
          r: '<t>input1</t>',
          h: 'input1',
          w: 'input1'
        },
       D3:
        { t: 's',
          v: 'input2',
          r: '<t>input2</t>',
          h: 'input2',
          w: 'input2'
        },
       E3: { t: 's', v: '|', r: '<t>|</t>', h: '|', w: '|' },
       F3:
        { t: 's',
          v: 'output1',
          r: '<t>output1</t>',
          h: 'output1',
          w: 'output1'
        },
       G3:
        { t: 's',
          v: 'output2',
          r: '<t>output2</t>',
          h: 'output2',
          w: 'output2'
        },
       A4:
        { t: 's',
          v: 'module_under_test',
          r: '<t>module_under_test</t>',
          h: 'module_under_test',
          w: 'module_under_test'
        },
       B4:
        { t: 's',
          v: 'method2',
          r: '<t>method2</t>',
          h: 'method2',
          w: 'method2'
        },
       C4:
        { t: 's',
          v: 'input1',
          r: '<t>input1</t>',
          h: 'input1',
          w: 'input1'
        },
       D4:
        { t: 's',
          v: 'input2',
          r: '<t>input2</t>',
          h: 'input2',
          w: 'input2'
        },
       E4: { t: 's', v: '|', r: '<t>|</t>', h: '|', w: '|' },
       F4:
        { t: 's',
          v: 'output1',
          r: '<t>output1</t>',
          h: 'output1',
          w: 'output1'
        },
       G4:
        { t: 's',
          v: 'output2',
          r: '<t>output2</t>',
          h: 'output2',
          w: 'output2'
        },
       A5:
        { t: 's',
          v: 'module_under_test',
          r: '<t>module_under_test</t>',
          h: 'module_under_test',
          w: 'module_under_test'
        },
       B5:
        { t: 's',
          v: 'method3',
          r: '<t>method3</t>',
          h: 'method3',
          w: 'method3'
        },
      C5: { t: 'n', v: 1, w: '1' },
      D5: { t: 'n', v: 2, w: '2' },
      E5: { t: 's', v: '|', r: '<t>|</t>', h: '|', w: '|' },
      F5: { t: 'b', v: true, w: 'TRUE' },
      G5: { t: 'b', v: false, w: 'FALSE' },
      '!ref': 'A1:G6'
    },
  },
  invocationCells: ['E3', 'E4', 'E5'],
  objectsUnderTest: ['A3', 'A4', 'A5'],
  methodsUnderTest: ['B3', 'B4', 'B5'],
  inputParameters: ['C3', 'C4', 'C5', 'D3', 'D4', 'D5'],
  outputParameters: ['F3', 'F4', 'F5', 'G3', 'G4', 'G5']
}