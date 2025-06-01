const { Sequelize, DataTypes } = require('sequelize');
const movieModel = require('./models/movieModel');
// Initialize Sequelize
const sequelize = new Sequelize(
  'postgresql://postgres.rsgxksinuesquzmwolfj:abacodehanu@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres'
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('❌ Unable to connect to the database:', err);
  });

// Define db object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = movieModel(sequelize, DataTypes);
// migrate code
sequelize.sync({ alert: false }).then(() => {
  console.log('migrate vayo hai ta ');
});
module.exports = db;
