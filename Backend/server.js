const express = require('express');
const cors = require('cors');
const routes = require('./routes/api');
const db = require('./models/db');
const config = require('./config/config.json'); 

const app = express();
const port = config.port; 

app.use(cors());
app.use(express.json());
app.use('/api', routes); 

db.connect()
  .then(() => {
    console.log('Database connected');
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });