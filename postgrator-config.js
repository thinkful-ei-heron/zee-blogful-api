require('dotenv').config();

module.exports = {
  'migrationsDirectory': 'migrations',
  'driver': 'pg',
  'connectionString': (process.env.NODE_ENV === 'test')
    ? process.env.TEX_DB_URL 
    : process.env.DB_URL,
};