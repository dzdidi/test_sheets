module.exports = {
  create: create,
}

function create(scheme, order) {
  var result = order.slice();
  for (line in order) {
    if (Array.isArray(order[line])) {
      result[line] = create(scheme, order[line]);
    } else {
      result[line] = scheme[order[line]];
    }
  };
  return result;
};
