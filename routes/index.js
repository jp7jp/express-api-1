const UsersController = require('../controllers/UsersController');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello!');
  });

  app.get('/oi', (req, res) => {
    res.send('Oi!');
  });

  app.get('/users', UsersController.index);
  app.post('/users', UsersController.create);
  app.get('/users/:id', UsersController.show);
  app.put('/users/:id', UsersController.update);
  app.delete('/users/:id', UsersController.delete);
}
