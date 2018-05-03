Welcome to Request Quest! A turn based rpg.


Api

  When running the server a few api options are avaible to you:

    /auth/register - POST payload: {Email, username , password} returns json web token

    /auth/login - POST payload: {Email or username, password} returns json web token

    /api/new - POST payload: {character name as name} authorization: "Bearer {json web token}" returns intial save

    /api/load - GET authorization:"Bearer {json web token}" returns current save game

    /api/save - PUT authorization:"Bearer {json web token}" returns nothing

    /api/encounter/:id - GET authorization: "Bearer {json web token}" return the encounter array

    /api/item/:id GET authorization: "Bearer {json web token}" return the object information


Save Games Should be formatted like:

    {

      currentEncounter:[
      {
          type: "dialogue" | "combat",
          if "dialogue":
            speaker: Name of Speaker,
            body: Text of statement
          if "combat":
            enemy:"Enemy Object",
            loot:object of ids
      }
      ],

      currentEncounterID: 0,

      currentEncouterProgress:0,

      inventory: {
      object key id value quantity
      },

      player:{

        name:null,

        id:null

      },

      character:{

        health:0,

        id:null,

        name:null

      }

};
