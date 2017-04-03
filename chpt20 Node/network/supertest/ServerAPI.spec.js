var expect = require('chai').expect
const request = require('supertest');
const expressApp = require('./expressServerAPI.js');
const koaApp = require('./koaServerAPI.js')

describe('expressApp', function() {
  it('GET /user respond with json', function(done) {
    request(expressApp)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('koaApp', function() {
  it('GET / respond with json', function(done) {
    request(koaApp)
        .get('/')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        })
  });
});
