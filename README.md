Welcome to Request Quest! A turn based rpg.


Save Games Should be formatted like:

{

  currentEncounter:[],

  currentEncounterID: 0,

  currentEncouterProgress:0,

  inventory: [],

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

Api

  When running the server a few api options are avaible to you:

    /api/create - POST payload: {Email, username , password} returns json web token

    /api/login - POST payload: {Email or username, password} returns json web token

    /api/new - POST payload: {character name as name} authorization: "Bearer {json web token}" returns intial save

    /api/load - GET authorization:"Bearer {json web token}" returns current save game

    /api/save - PUT authorization:"Bearer {json web token}" returns nothing
