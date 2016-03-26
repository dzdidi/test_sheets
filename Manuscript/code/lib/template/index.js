if (process.env.NODE_CASE === 'xlsx_out') {
  var template = require('./template_for_xlsx');
} else {
  var template = require('./template_for_notification');
};

module.exports = template;
