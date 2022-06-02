require('./models/User');
require('./models/Places');
require('./models/Books');
require('./models/Movies');
require('./models/Concerts');
require('./models/Events');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const lifeRoutes = require('./routes/lifeRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(lifeRoutes);

const mongoUri = '*******';
if (!mongoUri) {
  throw new Error(
    `Mongo key not set`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
