const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const config = require("../../tantrumayarlamalar.json");
const emoji = require("../../tantrum-emoji.json");
const rol = require("../../tantrum-rol.json");
const kanal = require("../../tantrum-kanal.json");

exports.run = (client, message, args) => {

let no = emoji.no; 
let yes =  emoji.yes;
let n = no;
let y = yes;
let tag = config.tag;

let embed = new Discord.MessageEmbed().setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

message.channel.send(embed.setDescription(`
\`>\` Sunucumuzda toplam \`${message.guild.memberCount}\` adet üye bulunmaktadır.
\`>\` Sunucumuzun sesli odalarında \`${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)}\` adet üye bulunmaktadır.
\`>\` Sunucumuzun \`${message.guild.premiumSubscriptionCount}\` **takviye** bulunmaktadır.
\`>\` Sunucumuzun \`${config.tag}\` tagında \`${message.guild.members.cache.filter(m => m.user.username.includes(tag)).size}\` adet üye bulunmaktadır.
`))
};
exports.conf = {
    aliases: ["count", "sayı"],
    permLevel: 0
  };
  
  exports.help = {
    name: "say",
    description: 'Sunucunun istatistiğini atar.',
    usage: 'say'
  };