const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=CipmTCAb#vVwjkwgqOchOjJuSjp7jAEzbJLTnTm34HUANRYqvgiQ",
MONGODB: process.env.MONGODB || "mongodb+srv://chamodsadasaragithub215055:XT6EnloAMb8r8Aly@cluster0.r6rgu.mongodb.net/",//enter mongo db url
};
