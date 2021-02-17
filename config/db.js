const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log('DB Connection error: ', error.message);
    process.exit(1);
  }

  console.log('MongoDB connected');
};

module.exports = connectDB;
