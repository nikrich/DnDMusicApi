
/*!
 * Module dependencies.
 */

var request = require('supertest')
var should = require('should')
var app = require('../server')
// other stuff you want to include for tests

before(function (done) {
  // clear db and other stuff
  done()
})

describe.skip('Users', function () {
  describe('GET /users', function () {
    it('should get categories', function (done) {
      // fill the test
      done()
    })
  })
})

after(function (done) {
  // do some stuff
  done()
})
