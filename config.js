//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/a858e965e25060d93e9c8.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Akash:akash@cluster0.ilcd2ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1";
global.website = process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg";
global.devs = "919064560840";
global.sudo = process.env.SUDO || "919064560840";
global.owner = process.env.OWNER_NUMBER || "919064560840";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZjVTZPVTkrVmpscm1BU3BpTkFFRW56L2t1ZmJNemt4eDIyaTRSNlhuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamxGVUgxZmN2UW1HYi9DcitGQnFQczVHZ0d5U09iOUNaL3BWSmt4SGJ3bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRFRxY1ZuOW1uZkZMQmNTMGFFR1UwRnZ1TS93cWs1ZlV3cmtseGdydEdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMWFI1Si9LZnlLdU8ycE83eXdGcitKR2pzenVKTTBObE5NN0VaaFliMDBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJeUxJQlNTck02T2VuenNiUDJHMTJNcy9JU1BqbDZUSDFXbW0vREMwbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml3ck41QjVtbnRSb2RMOUNJMU14M2Mya2Ftd3FKTEMrSk00LzBxNSszVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Y1V2RqUE1TRUF6U2NXUXdpczVneDM3VUMzUlU2UWtMaGl1YWRnb2dHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDVwaGxPc3ZHMnZSN2xQbFBRcjV5OWZrSFZldWNUZDhPSE9FS1JGeDdCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjU05FK2J6V1JsMDF0RUp5OEtxRE9xZFdicWZCUklvNHdoTjFIMEd0dFE1aENSWDRsbFpSdTdWTWtTb2ZraWtXQTBrZFZib1JDcnNDRkZjeHppakFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiIrdDNVOHRzdW9RYzBFek9XdkVsMjI5S3Z0ZFR1dy92Q1FvR3RQODI5SnQwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTA2NDU2MDg0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNUE4MjAxOTBERTBGNTRCMEMxQzQzNERDMkU4NzlGMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTI0OTY2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTkwNjQ1NjA4NDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDkzOEQzMDE0RTk1MTY3ODQwQjI3M0U5NjNFMThDNEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjUyNDk2OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQ0xiWkhMTjhUaVd4R2ZUbWRUR3Y0USIsInBob25lSWQiOiJjNTFjMzQ3Ni02MmQyLTQwNTItODE3YS0wOTg3YzNlMzU3MjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzM0aHg2MkRKR1ZxanRoUjlXanY0di9lcUJzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI4NFNSRUlnVllBc3p4dHZlK215Y2ZFRGFQOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCWjdTODdaRiIsIm1lIjp7ImlkIjoiOTE5MDY0NTYwODQwOjcwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCQjIDThOqNj+C4o8qc4oam4oam4oam4oam4oamIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUERpbFVRbHNxdXRRWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrOTArK1hPSEdURHpXVitBNS9FSVJlZ1FGcWR6OC91ZUdWWWo0Vzk2OXo0PSIsImFjY291bnRTaWduYXR1cmUiOiJ2Njd5RmxlSmVUalNPQStJWjZnSUxDUVlBTnUyUERYOExJbnk2Ym9OOUR3NXNnTXBhcHl6TVpoMlZscDVvTGlxbElwZENIb0lneldwbW1yaUJsV2JCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidm9hMi9sY1FHVnZEcHAvczlLcEZidHRzOFhRL0w1U1k3bm9qMDRycU1waGEwVnd6NS8zVWwvWGo5cXdQdm0zSW93SjQzekllNUtqb1hKMDNQUytUQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkwNjQ1NjA4NDA6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWlBkUHZsemh4a3c4MWxmZ09meENFWG9FQmFuYy9QN25obFdJK0Z2ZXZjKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjUyNDk2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHVm4ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𐌀ӄꍏรʜ↦↦↦↦↦😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𐌀ӄꍏรʜ↦↦↦↦↦-𝐕2",
  ownername: process.env.OWNER_NAME || "𐌀ӄꍏรʜ↦↦↦↦↦",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
