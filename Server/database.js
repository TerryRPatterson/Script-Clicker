const jwt = require("jsonwebtoken");
const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
pgp.pg.defaults.ssl = true;
const DIALOGUE = "DIALOGUE";
const COMBAT = "COMBAT";

// Test Data
let encounters = [
  [
    {
      type: DIALOGUE,
      speaker: "Narrator",
      body: "You find yourself in a forest."
    },
    {

      type: DIALOGUE,
      speaker: "You",
      body: "I'm in a forest!"
    }
  ],
  [
    {
      type: COMBAT,
      enemy: {
        name: "Goblin",
        health: 5,
        attack: 1
      },
      loot: {
        1: 1
      }
    }
  ]
];

let findUserByEmail = async email => {
  let queryString = `SELECT id, username, pass FROM users WHERE email = '${email}';`;
  let user = await db.one(queryString);
  return user;
}

let getEncounter = async (req, res) => {
  let id = req.params.id;
  let queryString = "SELECT encounter_list FROM encounters WHERE id = $1;";
  let { encounter_list } = await db.one(queryString, id);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(encounter_list));
};

let loadData = async (req, res) => {
  let { authorization: Bearertoken } = req.headers;
  let token = Bearertoken.split(" ")[1];
  let userId = jwt.verify(token, process.env.SIGNATURE).userId;
  let queryString =
    `SELECT c.encounter_id, c.encounter_progress, i.items, u.username, u.id as user_id, c.health, c.id as char_id, c.name as char_name
    FROM characters c
      JOIN users u
        ON c.user_id = u.id
      JOIN inventories i
        ON c.inventory_id = i.id
    WHERE u.id = $1;`;
  let result = await db.one(queryString, userId);
  let data = {
    currentEncounter: [{ type: "LOADING" }],
    currentEncounterID: result.encounter_id,
    currentEncounterProgress: 0,
    inventory: JSON.parse(result.items),
    player: {
      name: result.username,
      id: result.user_id
    },
    character: {
      health: result.health,
      id: result.char_id,
      name: result.char_name
    }
  };
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(data));
};

module.exports = {
  findUserByEmail,
  getEncounter,
  loadData
};
