const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

let findUserByEmail = async email => {
  let queryString = `SELECT id, username, pass FROM users WHERE email = '${email}';`;
  let user = await db.one(queryString);
  return user;
}

module.exports = {
  findUserByEmail
};
