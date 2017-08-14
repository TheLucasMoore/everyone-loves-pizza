const app = require('express')();

app.get('/', (req, res) => {
  res.send('🍕');
});

app.get('/:nombre', (req, res) => {
  res.send(req.params.nombre.toUpperCase + ' LOVES 🍕!');
});

app.listen(3000, () => console.log('Server running'));
