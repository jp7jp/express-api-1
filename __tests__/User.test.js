const User = require('../models/User');
const { factory } = require('../test_helpers');
const request = require('supertest');
const app = require('../app');

describe('User', function() {
  it('should list users', done => {
    let createdUsers;
    return factory.insert('User', 5)
      .then(users => createdUsers = users)
      .then(() =>
        request(app)
          .get('/users')
          .expect(200)
      )
      .then(response => {
        const users = response.body;
        expect(users.length).toBeGreaterThanOrEqual(createdUsers.length);

        expect(createdUsers.every(created =>
          users.find(user => created.email === user.email)
        )).toBe(true);

        done();
      });
  });
});
