const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="uzairhussain121212@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "48459235598";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_54_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrR1gyc0hTb3FTSWxad3hRR2FvYm5VdFp4a0RUVkJ1Q0lCV2pGYTFBb3F3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4NDU5MjM1NTk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRjNGODk3MjVBQzg2Q0ZGREI5RDVEOEI4NzZGMTBFMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4NDA4NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODQ1OTIzNTU5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDhGM0ZGMEQyNDYxQkZEMjRBRjJEQzE1MURERDE4QTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODQwODUxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRxREFETjVmU2JhTmhiREY1QjVsOEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzhhYWIwYjgtZTk5Mi00NDAzLTk0ZGMtYjk1ZTMxMjU4Yzg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMTExLFxuICAgICAgMjEwLFxuICAgICAgMjI3LFxuICAgICAgMjUwLFxuICAgICAgOTYsXG4gICAgICAyMDYsXG4gICAgICA4MyxcbiAgICAgIDk4LFxuICAgICAgMTc2LFxuICAgICAgMTI4LFxuICAgICAgOTIsXG4gICAgICA0NSxcbiAgICAgIDIwMixcbiAgICAgIDQ5LFxuICAgICAgMjEsXG4gICAgICAzOSxcbiAgICAgIDkyLFxuICAgICAgMTcyLFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDM3LFxuICAgICAgNTUsXG4gICAgICAyNTEsXG4gICAgICAxNDMsXG4gICAgICA5MyxcbiAgICAgIDk0LFxuICAgICAgMTMwLFxuICAgICAgMTcxLFxuICAgICAgMTE5LFxuICAgICAgMjU1LFxuICAgICAgMTI5LFxuICAgICAgMTc5LFxuICAgICAgMjA1LFxuICAgICAgOTgsXG4gICAgICA4MyxcbiAgICAgIDE3MSxcbiAgICAgIDI0OSxcbiAgICAgIDU5LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOE5DUFEzTkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ4NDU5MjM1NTk4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMjk1Njc5MzU0MDY1Mjo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFsaSBIYW16YVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092b3VMOEhFSTd1d2JVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidm4wMmM4eEJtS3plcis3RWpYQ3RLNitqbHBzRkZOVGFnakhGd21OTnp5VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMTzBtWGxDNXRCQmp2VGJDa29RS2tYWnE5aExPT3VNeE1QMVJ5SjJTS1QxdHFrQkVselVzSVdQaFlrY2R5SmtPRjdpMnBMSURXN09sbzBtOEx4Ym9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNVkNQZit3aHpwVkMvejBST3pMbWdlZG0xeUlxWFQ2QWkzMTllbWJaSEpRSlFGOStscUJsd2NPSWxMUktpd2VQay92UkFWRmQvYk1kcWJ5aVZmRWRndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0ODQ1OTIzNTU5ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4NDA4NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMSmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxKaC5qc29uIjogIntcImtleURhdGFcIjpcIktDSitSUkF6Y25QdFQ5OE1zQ2oyaTg3M280Rm9kb1UxVFVQT2dDR1ZSdms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxMjA5OTY5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjI5NDE0NzM1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Shadow bot",
  ownername:process.env.OWNER_NAME|| "Uzair",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
