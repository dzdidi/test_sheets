
# Test Sheets
This is a Master Thesis project for implementation of a software for generation of a real-time web-page tests from a provided test sheets.
Official topic name: "Using Test Sheets for Real Time Testing in the case of Figo GmbH"

 Please find general information Test Sheets:
 * [General information](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/)
 * [Basic Test Sheets](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/basic-test-sheets/)
 * [Non-Linear Test Sheets](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/non-linear-test-sheets/)
 * [Parameterized and Higher-Order Test Sheets](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/parameterized-and-higher-order-test-sheets/)

 More information about [Chair of Software Engineering of University of Mannheim](http://swt.informatik.uni-mannheim.de/de/home/)

 ## Installation and use:

 * `npm install -g ./compare_and_write` - to install reporting mechanism
 * `npm install -g xlsx` - to install xlsx connector

 * To run the system call the following command: `node index.js </path/to/test/sheets/directory>`
 * To run test call `npm test`

 * To execute generated files call `node <name_of_the_generated_file>`

 # Conventions for definitions of Test Sheets
Following conventions should be followed for Test Sheet passed verification.
### General
 * Number of columns within one TS should not exceed 26 columns *(from A to Z)*;
 * Invocation delimiters must be allocated within single column the *(aligned to the longest row)*;
 * References to the columns with expected returns columns will take as value actual return value obtained from method execution;
 * References should be defined only to cells in one of the previous row;
 * Order of input parameters is following 1)`credentials`, 2)`pin`, 3)`tan`, 4)`port` (some are optional);
 * Files extensions should be `.xlsx`.

###  Basic Test Sheets
 * file extension .xlsx
 * `A1` cell(optional) - description of the test case;
 * `A2` cell - module under testing with an extension *(.js)*;
 * `A3..n` - name of the class/object under the test;
 * `B3..n` - name of the method from representative class *(same row)* under the test;
 * `C2..n` to **Invocation Column**   - input parameters for representative method *(same row)* under the test;
 * **Invocation Column** - the column for separation of input values from expected output value(s) filled with `|` (pipe)(for comparison by scheme and data types) `||` (two pipes)(for deep comparison - by scheme, data types and values) as a cells values until the last line which includes objects under tests;
 * **Expected Return** - column*(s)* after invocation line.
