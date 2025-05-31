const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "vAJQhABQ#30q3HSw1nfYr9MZtMEFq-_9luIm9xN_Z0CO5AT7jZ1Q", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 BOT Is Alive Now😍*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyDOoEfZKwArn2Bl87NI9kk--JsVzoUIoUg", // Add Gemini API key here
  REMOVE_BG_API_KEY:"y1iCuVyPeUJkT1B7jZAmpg9S", // Add removebg API key here
  WEATHER_API_KEY: "968f4f3b63a9426a8c963520253105", // Add your weather API key here
  BOT_OWNER: "IMALSHA RANDIP", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94711683227"], // Replace your bot owner number here (same as bot owner number)
  AUTO_READ_STATUS: "true", // Turn on or off auto read status from here
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.OWNER_NUMBER
    ? process.env.OWNER_NUMBER.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
