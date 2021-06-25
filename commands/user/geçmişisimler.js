const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const kdb = new db.table("kullanici");
const config = require("../../tantrumayarlamalar.json");
const emoji = require("../../tantrum-emoji.json");
const rol = require("../../tantrum-rol.json");
const kanal = require("../../tantrum-kanal.json");

exports.run = (client, message, args) => {

let no = emoji.no; 
let yes = emoji.yes;

let embed = new Discord.MessageEmbed().setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

let dlr = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let veri = db.fetch(`isim.${dlr.id}`)

let data = kdb.get(`kullanici.${dlr.id}.isimler`)

if(!data) {
message.delete({timeout: 5000})
return message.channel.send(hembed.setDescription(`${dlr} kullanıcısının herhangi bir isim kaydı bulunmamakta.`)).then(msg => msg.delete({timeout: 5000}))
}
data = data.reverse()

    message.channel.send(embed.setDescription(`
${dlr} kullanıcısının **${veri}** adet isim kaydı bulundu.

${data.map((value, index) => `\`${value.name}\` > [<@&${value.gender}>]`).slice(0,30).join('\n')}
      `))

};

exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "isimler",
  description: '',
  usage: ''
};