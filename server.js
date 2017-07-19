process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/config');

const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
//const configurePassport = require('./config/passport');

const db = configureMongoose();

const app = configureExpress();

//const passport = configurePassport();

app.listen(config.port);

console.log(`Server running at http://localhost:${config.port}/`);

module.exports = app;