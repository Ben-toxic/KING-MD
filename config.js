const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/Ben-toxic/TOXIC-BOT-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '254719485000'
global.devs = '254719485000';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐵𝛯𝛮 BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'BEN' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VxMkhMTk9Zd0hZT2JudldZLzF3Zkd6NEZDbjFUck1OTE5aZGZzbk5VUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickRickpUMHhUR2pJSzNkVUIwQzVEcmcwWllOZHd5RkhhcW13STM4Q2ZoOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTEgyZ3VUdFpVdE9BKzB2V2pBUmsxQzMzRFlzcHBIclNXYXFOVXdDY1VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQzBPOWhBa09KYWQ5N3NweXhFNDUzbUt0QTZQd2pFQ2JoNm9YNUQyQlhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGQzVCMmVrMzlMUWZUOVNNNVB6NE9BZkZLb2RwYU1CY1FKekFJTnIvVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ1aTdqU1RoZ0FXczU2ZisrU082SmcyeW9ERHFidWcrSjF2SXNIVUI1U0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BXZEtBRmNDK0s1Lzc2clNqV0VWblgveXZseXJISXl2SkxFSEdlckkyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05VaWFpc1ZPdG5RbklFSDVQVDRnclF6aGZDVTRSYTBPQWptdkFoTVpVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF4bG5JYlR2aXcyK0pmWTRqdkJyQlJqTVZUVHBOMG03a2l4N3pRNy9hWG1NNGVRRHJzNmoxME8wMnlNQkRhNFdDZlZxemtYOFErWUZVa09tWTJxb0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJoS3FVUVNFdEtLU25iZngvV1lvMytxZXg0ZzlLSDNEeldFR2ZlR2lwWjhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMN3VSRFFfN1FIZWl4LWhrMGo3Y3NRIiwicGhvbmVJZCI6IjRkNTVhOGRiLTMxNmMtNDU0Ni05YzE5LTU4MTk4Yzk1NDBkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqbnhwUSt5THI4NUx6Tk5GeDBod3Q5VHBrUk09In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcxZlZZZ0VqUCsrbWlQQUFyd04yRGk2MytLST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tqZXV2d0hFS2Y4NExRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imo2OHZ6aGRGeDFRWjNBNVN0dmJ0ZktwZ2hOUVlySnpUV3NHNlBIUzhIQ1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdNd203WXlRc1ppallzclIwSFBhRmcrVmsrQ1Q2UW45RG0xVDNLd0VpcEZFZFBONlptODg3ekRrTHpueG54bDBWQ2dvVkw0WENVMXppd1JuS3VaV0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhTkU4aXA2UEw5OUMvZ2dpMkZTSFRKbWcwYlJIemFreW5CSTRieGFwT2RYTVozNWEzdWViSGFqcmRqRmZkcXR0Y1JnUUd3VkdoV1N4ZXdWWVAvSERDUT09In0sIm1lIjp7ImlkIjoiMjU0NzQ2MDI4NzA4OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRFIgQkVOIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc0NjAyODcwODo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkrdkw4NFhSY2RVR2R3T1VyYjI3WHlxWUlUVUdLeWMwMXJCdWp4MHZCd2sifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEyNTM0Mjh9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
