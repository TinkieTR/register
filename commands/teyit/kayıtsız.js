const { MessageEmbed } = require('discord.js');
const config = require("../../tantrumayarlamalar.json");
const emoji = require("../../tantrum-emoji.json");
const rol = require("../../tantrum-rol.json");
const kanal = require("../../tantrum-kanal.json");

exports.run = (client, message, args) => {

if(message.member.roles.cache.has(config.commander) || message.member.hasPermission('ADMINISTRATOR')) {
let victim = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!victim || message.mentions.members.size < 1 && isNaN(args[0])) {
message.delete({timeout: 5000})
return message.channel.send(`Örnek Kullanım: \`${config.prefix}${this.help.name} @Tantrum\`
Komut Açıklaması: \`${this.help.description}\``).then(msg => msg.delete({timeout: 5000}))
}

victim.roles.cache.has(rol.booster) ? victim.roles.set([rol.booster, config.kayıtsız_rol]).catch() : victim.roles.set([config.kayıtsız_rol]).catch()
victim.setNickname(`${config.kayıtsız_tag} ${config.kayıtsız_isim}`).catch()
message.delete({timeout: 5000})
return message.channel.send(`${victim} kullanıcısı kayıtsıza atıldı.`).then(msg => msg.delete({timeout: 5000}))
} else {
message.delete({timeout: 5000})
return message.channel.send(`Bu komutu kullanmak için \`${rol.registery}\` rolüne sahip olmalısın.`).then(msg => msg.delete({timeout: 5000}))
}
  

};


exports.conf = {
  aliases: ['ks'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtsız',
  description: 'Belirlenen kullanıcıya kayıtsız rolleri verir.',
  usage: 'kayıtsız'
};