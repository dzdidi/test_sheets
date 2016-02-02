var assert = require('assert');
var compareAndReport = require('../lib/compare_and_report');

describe('Test coverage for compare', function() {
  it('should have compare function', function(done) {
    assert.equal(typeof compareAndReport.compare, 'function');

    done();
  });

  it('should accept three paramters', function(done) {
    assert.equal(compareAndReport.compare.length, 3);

    done();
  });

  it('should deeply compare scheme if last parameter is \'|\'', function(done) {
    var obj1 = {a:1, b:{c: 2, d: {e: 3}}};
    var obj2 = {a:4, b:{c: 5, d: {e: 6}}};
    var obj3 = {a:4, b:{c: 5, d: {f: 6}}};

    assert.equal(compareAndReport.compare(obj1, obj2, '|'), true);
    assert.equal(compareAndReport.compare(obj1, obj3, '|'), false);

    done();
  });

  it('should deeply objects is last parameter is \'||\'', function(done) {
    var obj1 = {a:1, b:{c: 2, d: {e: 3}}};
    var obj2 = {a:1, b:{c: 2, d: {e: 3}}};
    var obj3 = {a:1, b:{c: 2, d: {f: 3}}};
    var obj4 = {a:1, b:{c: 2, d: {e: 6}}};

    assert.equal(compareAndReport.compare(obj1, obj2, '||'), true);
    assert.equal(compareAndReport.compare(obj1, obj3, '||'), false);
    assert.equal(compareAndReport.compare(obj1, obj4, '||'), false);

    done();
  });
});

describe('Test coverage for getDeepKeys', function() {
  it('should have getDeepKeys function', function(done) {
    assert.equal(typeof compareAndReport.getDeepKeys, 'function');

    done();
  });

  it('should accept two paramters', function(done) {
    assert.equal(compareAndReport.getDeepKeys.length, 2);

    done();
  });

  it('should  return deep getDeepKeys', function(done) {
    var obj1 = {a:1, b:{c: 2, d: {e: 3}}};

    assert.deepEqual(compareAndReport.getDeepKeys(obj1, []), ['a', 'b', 'c', 'd', 'e']);

    done();
  });
});
