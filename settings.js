/*
› Create By Zora
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['+96171350883','+96171350883','+96171350883'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['+96171350883'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '+96171350883' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Zora' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'Zora Bot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Zora' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = '@VEOEDITING'
global.ig = '@nozex___'
global.mygc = '+96171350883'
global.tiktok = '@.nozex'
global.email = 'zora223ak@gmail.com'
global.region = 'Lebanon'

//—————「 Set Wm 」—————//
global.packname = 'Zora' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Zora' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
/*global.veloriy = fs.readFileSync('./image/chika.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://images.app.goo.gl/oUZzupRNqJzWvgSh7'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://images.app.goo.gl/QMXnPSdsgxPiaDYcA'
global.fluming = 'https://images.app.goo.gl/9gep42vBeAzYrkd77'
global.flarun = 'https://images.app.goo.gl/tw5m6b33parfBjS47'
global.flasmurf = 'https://images.app.goo.gl/BtpkuvCwWVVMityC9'

//—————「 Set Prefix 」—————//
//gausah di apa² in/
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Done._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
