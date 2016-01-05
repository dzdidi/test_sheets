# Test Sheets
This is a Master Thesis project for implementation of a software for generation of a real-time web-page tests from a provided test sheets.
Official topic name: "Using Test Sheets for Real Time Testing in the case of Figo GmbH"

 Please find general information Test Sheets:
 * [General information](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/)
 * [Basic Test Sheets](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/basic-test-sheets/)
 * [Non-Linear Test Sheets](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/non-linear-test-sheets/)
 * [Parameterized and Higher-Order Test Sheets](http://swt.informatik.uni-mannheim.de/de/research/research-topics/test-sheets/parameterized-and-higher-order-test-sheets/)

 More information about [Chair of Software Engineering of University of Mannheim](http://swt.informatik.uni-mannheim.de/de/home/)

 ##Planned Use Case
 Test Sheets defined by users (clients or employees without development background) will be used for real-time testing of banking web page scraping scripts. Tests themselves will be applied for identification of layout changes on a target page before any interaction will appear to avoid errors and minimize the time of scripts correction.

Execution stages:
 - Automated transformation of Test Sheets into JavaScript tests;
 - Scheduled task for running tests on web pages;
 - Developer notification.

 # Conventions for definitions of Test Sheets
Following conventions should be followed for Test Sheet passed verification.
##  Basic Test Sheets
 * file extension .xlsx
 * `A1` cell(optional) - description of the test case;
 * `A2` cell - module under testing with an extension *(.js)*;
 * `A3..n` - name of the class/object under the test;
 * `B3..n` - name of the method from representative class *(same row)* under the test;
 * `C2..n` to **Invocation Column**   - input parameters for representative method *(same row)* under the test;
 * **Invocation Column** - the column for separation of input values from expected output value*(s)* filled with `|` (pipe) as a cells values until the last line which includes objects under tests;
 * **Expected Return** - column*(s)* after invocation line.

 ## Non-Linear Test Sheets
  Same convention as for Basic Test Sheets plus following conventions for
Behaviour Specification:
  * `N`-th row - the row for separation of test definitions from the test behaiour. Filled with `_` (underscore) until the last column of expect values *(excluding invocation column)*
  * `N+1`-th row - Starting state. Starts with `->` following space separated integers which represent testing steps which should be executed first;
  * `N+2`-th row - Intermediate state. Each cell of this row should satisfy following syntax requirements: **guard** `->` following space separated integers which represent testing steps which should be executed if condition within guard is `true`. One of which should be equal to `N+3` which represents the final state;
  * `N+3` - Final state. Empty line showing end of testing process.

Syntax for **guard**:
 `[#N <condition> <value | link to the cell>]`, where:
 * `#N` - number of times row `N` has already been executed within current test;
 * `<condition>` - conditional operator (`>`, `>=`, `<`, `<=`, `==`, `!=`)
 * `<value | link to the cell>` - value or link to the cell with value which should be compared.
  ## Parameterized and Higher-Order Test Sheets
  Lower order test sheets can belong to Basic of Non-Linear types of Test Sheets and respectively follow conventions, with next additional option:
  * Input and/or output cells can contain parameters `?[B-Z]+` which represent the value of cells within the representative column of **Higher-Order Test Sheet**
  * Rows `1` and `2` should follow conventions for Basic Test Sheet;
  * Cells starting from second row inside of `[B-Z]` columns should contain values which will replace parameters inside of Parameterized Test Sheet.
