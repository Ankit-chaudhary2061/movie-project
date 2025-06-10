const { Sequelize, DataTypes } = require('sequelize');
const bookModel = require('./models/bookModel'); // <-- Make sure folder is 'models', not 'model'

const sequelize = new Sequelize(
  'postgresql://postgres.rsgxksinuesquzmwolfj:abacodehanu@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres'
);

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('❌ Unable to connect to the database:', err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books = bookModel(sequelize, DataTypes);

sequelize
  .sync({ alter: false })
  .then(() => {
    console.log('✅ Database synchronized');
  })
  .catch((err) => {
    console.error('❌ Error during DB sync:', err);
  });

module.exports = db;
