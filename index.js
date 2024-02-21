const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const API_KEY = 'YOUR_API_KEY';

app.post('/track', (req, res) => {

  console.log(req)
  console.log(req.body)
  res.sendStatus(200);
});
app.get('/track', (req, res) => {

  console.log(req)
  res.sendStatus(200);
});

let server = app.listen(3000, () => {
  console.log('Listening on port %d', server.address().port);
});
