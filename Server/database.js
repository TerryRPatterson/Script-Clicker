const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;

// Test Data
let encounters = [
  [
    {
      type: "dialogue",
      speaker: "Narrator",
      body: "You find yourself in a forest."
    },
    {
      type: "dialogue",
      speaker: "You",
      body: "I'm in a forest!"
    },
    {
      type: "combat",
      enemy: {
        name: "Goblin",
        health: 5,
        attack: 1
      },
      loot: { 1: 1 }
    }
  ]
];

let findUserByEmail = async email => {
  let queryString = `SELECT id, username, pass FROM users WHERE email = '${email}';`;
  let user = await db.one(queryString);
  return user;
}

let getEncounter = (req, res) => {
  let id = req.params.id;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(encounters[id] || null));
}

module.exports = {
  findUserByEmail,
  getEncounter
};
