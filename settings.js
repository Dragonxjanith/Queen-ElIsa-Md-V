//========================================================================================================================
//          QUEEN ELISA WHATSAPP BOT
// [TQ FOR
//   PASIDU
//   SANUWA
//    ISURU
//
//
//
//============================================================



const fs = require('fs')
const chalk = require('chalk')


global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['94715166712'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94715166712'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Dark Maker' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'


global.mess = {
    success: process.env.SUCCESS_MSG || '✅ Done!',
    admin: process.env.ADMIN_MSG || 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin !',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: process.env.WAIT_MSG || 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = process.env.EXTRA_API || 'dd79-1aeb-21a3'
global.LANG = 'EN'
global.BOT_LANGUAGE = "EN"
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}
global.HEROKU = {
    API: process.env.HEROKU_API,
    NAME : process.env.APP_NAME,
    STATUS : true
}
global.VOICE_REPLY = 'true'
global.owner= [process.env.OWNER_NUMBER] || ['94715166712'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.alivelogo = process.env.ALIVE_LOGO || `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive = process.env.ALIVE_MESSAGE
global.cap = process.env.CAPTION
global.AUTO_BIO = process.env.AUTO_BIO || 'on'
global.INBOX_BLOCK = process.env.INBOX_BLOCK || 'off'
global.AUTO_REACT = process.env.AUTO_REACT || 'true'
global.ANTI_BADWORD = process.env.ANTI_BADWORD || 'true'
global.botnma = process.env.BOT_NAME || 'ＱＵＥＥＮ ＥＬＩＳＡ Ｖ2' 
global.ownernma = process.env.OWNER_NAME || 'ＭＲ.ＮＩＭＡ' 
global.packname = process.env.STICKER_PACK_NAME || 'ඉදලා ගිය උන්ට පින් පිනිස #bye' 
global.author = process.env.STICKER_AUTHOR_NAME || 'ස්ටිකර් හැදුවේ Mr.Nima' 
global.antilink = process.env.ANTI_LINK || 'true'
global.WELCOME_MSG = process.env.WELCOME_MSG
global.GOODBYE_MSG = process.env.GOODBYE_MSG
global.INBOX_BLOCK_MSG = process.env.INBOX_BLOCK_MSG || 'BLOCK !!!'
global.BLOCK_CHAT = 'setgrp'
global.BLOCK_CALL = process.env.BLOCK_CALLERS || 'false'
global.SEND_WELCOME = process.env.SEND_WELCOME_MASSAGE || 'true'
global.OWNER_REACT = '💻'
global.BAD_KICK_MSG = process.env.BAD_KICK_MASSAGE || '*Bad word detect !*'
global.BUTTON1 = process.env.DISPLAY_BUTTON_1 || '𝙶𝚒𝚝𝚑𝚞𝚋'
global.BUTTON2 = process.env.DISPLAY_BUTTON_2 || '𝚈𝚘𝚞𝚝𝚞𝚋𝚎'
global.BUTTON1_URL = process.env.BUTTON_1_URL || 'https://github.com/darkmakerofc/'
global.BUTTON2_URL = process.env.BUTTON_2_URL || 'https://youtube.com/c/MRNIMAOFC'
global.ADD_MSG = process.env.ADD_MASSAGE || ' ' 
global.KICK_MSG = process.env.KICK_MASSAGE || ' ' 
global.SONG_DOWN = process.env.SONG_DOWNLOAD || ' ' 
global.SONG_UP = process.env.SONG_UPLOAD || ' '
global.LINK_KICK_MSG = process.env.LINK_KICK_MASSAGE || ' '
global.SESSION = process.env.SESSION || ' '
global.BLOCK_CHAT = process.env.BLOCK_CHAT || ' '
global.SUDO = process.env.SUDO || ' '

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
