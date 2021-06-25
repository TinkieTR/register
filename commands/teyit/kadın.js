const {MessageEmbed} = require('discord.js');
const config = require("../../tantrumayarlamalar.json");
const emoji = require("../../tantrum-emoji.json");
const rol = require("../../tantrum-rol.json");
const kanal = require("../../tantrum-kanal.json");
const db = require('quick.db')
const kdb = new db.table("kullanici")
const tdb = new db.table("teyitler")

exports.run = async(client, message, args) => {

  let embedtantrum = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('BLACK')

  if(!message.member.roles.cache.has(rol.registery) || message.member.hasPermission('ADMINISTRATOR')) {

    let dlr = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let isim = args[1];
    let yas = args[2];

    if(!dlr || !isim || !yas || isNaN(yas) || message.mentions.members.size < 1 && isNaN(args[0]) || !isNaN(isim) || dlr.id === message.author.id) {
message.delete({timeout: 5000})
return message.channel.send(embedtantrum.setDescription(`Kayıt işlemini gerçekleştirmek için geçerli bir kullanıcı belirtmen gerekmektedir. Örnek Kullanım: [ \`${config.prefix}${this.help.name} @Tantrum İsim Yaş\` ]`)).then(msg => msg.delete({timeout: 10000}))}


    let kadınisim;
if(dlr.user.username.includes(config.tag)) kadınisim = `${config.tag} ${isim.substr(0,1).toUpperCase()+isim.substr(1,isim.length)} | ${yas}`
if(!dlr.user.username.includes(config.tag)) kadınisim = `${config.kayıtsız_tag} ${isim.substr(0,1).toUpperCase()+isim.substr(1,isim.length)} | ${yas}`

    let veri = db.fetch(`isim.${dlr.id}`)
    let isimdata = kdb.get(`kullanici.${dlr.id}.isimler`)
      
if(isimdata) {
db.add(`isim.${dlr.id}`, 1)      

kdb.push(`kullanici.${dlr.id}.isimler`, {
 name: kadınisim,
 gender: message.guild.roles.cache.get(rol.kadın1).id || "Kadın"
})

tdb.push(`teyitler.${message.author.id}.uyeler`, {
  uye: dlr.id,
  gender: message.guild.roles.cache.get(rol.kadın1).id || "Kadın"
})

db.add(`kadın.${message.author.id}`, 1)
db.add(`toplam.${message.author.id}`, 1)


await dlr.roles.remove(config.kayıtsız_rol)
dlr.user.username.includes(config.tag) && !dlr.roles.cache.has(rol.family) ? await dlr.roles.add([rol.kadın1, rol.kadın2, rol.family]).catch() : await dlr.roles.add([rol.kadın1, rol.kadın2]).catch()
await dlr.setNickname(kadınisim).catch()
message.react(emoji.onay)

} else if(!isimdata) {

db.add(`isim.${dlr.id}`, 1)      

kdb.push(`kullanici.${dlr.id}.isimler`, {
 name: kadınisim,
 gender: message.guild.roles.cache.get(rol.kadın1).id || "Kadın"
})

tdb.push(`teyitler.${message.author.id}.uyeler`, {
  uye: dlr.id,
  gender: message.guild.roles.cache.get(rol.kadın1).id || "Kadın"
})

}else{
    message.delete({timeout: 5000})
    return message.channel.send(embedtantrum.setDescription(`Bu komutu kullanmak için \`${message.guild.roles.cache.find(x => x.id === rol.registery).name}\` rolüne sahip olmalısın.`)).then(msg => msg.delete({timeout: 5000}))}};
    

};


exports.conf = {
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kadın',
  description: 'Belirlenen kullanıcıya kadın olarak sunucuya kaydeder.',
  usage: 'kadın'
};