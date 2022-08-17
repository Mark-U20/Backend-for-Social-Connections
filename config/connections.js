const mongoose = require('mongoose');
require('dotenv').config();

// Wrap Mongoose around local connection to MongoDB
const url =  'mongodb://localhost:27017/socialNetworkDB';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
