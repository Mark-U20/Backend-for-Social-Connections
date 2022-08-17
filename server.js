const express = require('express');
const db = require('./config/connections');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', userRoutes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});