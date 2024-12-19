const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Request body is empty' });
  }
  next();
});
app.post('/data', (req, res) => {
  try {
    console.log(req.body);
    res.send('Data received');
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: 'Invalid JSON payload' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});