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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNlSFJBUU13RDVCZGM3U2xQc05MYUsvSDJUOEtHSERpbWJvK3hxdzBtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekZvMXd4c0xITVprK1Bxa0VaNk4vM3Z0QUl4ekFlRWxSN0R2eUx6ZXVSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T3BsYm5sRWtZejBST2V2MEhyUGwwWHgyUHRnbXJ5TUtGNnpucmRka2tZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsWldwb0VTUWJYL2hoRzh1K1pwUFhEbUV4NUZPS3BPUURDYncyRDZ0RVcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDZmpyTEU2aFlUS2o1NzJpQWJJODlyL3dNOGRXQ0thenIwbDgrMldNVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5MQkYwbEZRWkpWR3JkaWtMcHFhRnhYTWdnY2FsOFArU0lSMGJ6azRRbWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFnWDExLzZ1bldUTkxIcXloVkg3VGtYTFN6dHFTQ1lyRzJKU1BNYjltZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXBvVDF3M2ppckxyQ1BWZHJ6elBTdlkyMmtyY1Zzbm16MjVSNWhGc21Edz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZEUUhIemRFd0JuUGdqeUFOa1NuV2JkS0JRbGFMUUJFZ0tWdVdkYjUwZG5qZ1ZKVlFsZnExZmx4TGJTUEc3c1A0Qng2azBvNTMvVm5DTzRMUVluTmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6Ii94dkRDVEdGR3B5OEl2UXVjT2pMWFZkdkhlcXZYTDFLMkZjV1M0WWdiOW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Indwdk9oNkFOUllLM3pUNUMxWE4yTFEiLCJwaG9uZUlkIjoiNDI3YzZmYmUtMTZlZC00MjFhLTgwNGEtYTM0Y2IyMjYzMjcwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIxT3FNNk84WWVSMXRWWiswcVhvbDNOOGlyWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRXNFZ2l3OW9paFA1SmdzdHJsOFN4Z3JMOEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVlUTVRaNEsiLCJtZSI6eyJpZCI6IjkxOTA2NDU2MDg0MDo2MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwkIyA04TqjY/guKPKnOKGpuKGpuKGpuKGpuKGpiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTS9scDdrSEVQdjI5YlFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3JYckt5Mk50YVA2cjRPMUhNeis2ajhmRjNnV2I1ZTY2NUYzMk5lMHlGTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTWRWZDN6bkl1eWJ0OTJ0WE1YZjZwdGlaL3ErTGlWb3VmZ2VjQTV4dG1Ic2JvaVIyZTUycERWZzZBbWlYNG4yRVh3ZksyNVFBQjMwSGxCcnk4YlQ3QVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhFdDZ2bFBmWG9idE1YM1NRNysvUElGQkdRTWsxZFJNUWw2NTRPWE9PdGd0ZldhQnBob1Ivcy9ESFBSYjViMDZqNXBuMG9pWDlrbjVDNzR4MlZEVmpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5MDY0NTYwODQwOjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ2MTZ5c3RqYldqK3ErRHRSek0vdW8vSHhkNEZtK1h1dXVSZDlqWHRNaFQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1OTY4MDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFlZIn0="
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
