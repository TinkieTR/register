const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
const kdb = new db.table("kullanici")
const tdb = new db.table("teyitler")
exports.run = (client, message, args) => {
    let x = message.guild.members.cache.filter(x => db.has(`toplam.${x.id}`))

    if(x && x.array().length == 0) {
        const tantrum1 = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.avatarURL)
        .setDescription(`
Kimsenin kayıt puanı bulunmamakta.
        `).setColor('RED')
        .setTimestamp()
        return message.channel.send(tantrum1)
    }
let miktar = args[0]
let obj = []
let tantrum = 0
let tantrum2 = x.sort((a,b) => db.get(`toplam.${b.id}`) - db.get(`toplam.${a.id}`)).map((r, index) => `\`${++tantrum}.\` ${message.guild.members.cache.has(r.user.id) ? message.guild.members.cache.get(r.user.id) : `\`${r.user.tag}\` ( \`Sunucudan Ayrıldı.\` )`} - \`${db.get(`toplam.${r.id}`)}\` Kayıta Sahip`).slice(0, miktar)
const tantrum3 = new Discord.MessageEmbed()
.setTitle(`Teyit Sıralaması`)
.setDescription(tantrum2)
 
.setTimestamp()
return message.channel.send(tantrum3)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['top','top-teyit'],
  permLevel: 0
}
exports.help = {
  name: 'topteyit',
  description: "toplam teyit gösterir",
  usage: 'top'
}