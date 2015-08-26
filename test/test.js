var upto4095 = require('../'),
  chai = require('chai'),
  expect = chai.expect;


describe('up-to-4095', function () {
  it('should return num', function () {
    upto4095(require('fs').readFileSync('./fixture/test.css', 'utf8'), function (err, res) {
      expect(res).to.equal(-2);
    });
  });
});
