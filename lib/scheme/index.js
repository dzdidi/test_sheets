var scheme = require('./scheme');
var order = require('./order');
var executionScheme = require('./execution_scheme');

if (process.env.NODE_ENV === 'testing') {
  module.exports = {
    schema: scheme,
    order: order,
    executionScheme: executionScheme,
    scheme: function(sheet) {
      var generalScheme = scheme.createScheme(sheet);
      var orderScheme = order.makeOrder(sheet, generalScheme);

      return executionScheme.create(generalScheme, orderScheme);
    }
  };
} else {
  module.exports = function(sheet) {
      var generalScheme = scheme.createScheme(sheet);
      var orderScheme = order.makeOrder(sheet, generalScheme);

      return executionScheme.create(generalScheme, orderScheme);
  };
};
