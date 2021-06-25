const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const useful = require('useful-tools')
const config = require("../tantrumayarlamalar.json");
const emoji = require("../tantrum-emoji.json");
const rol = require("../tantrum-rol.json");
const kanal = require("../tantrum-kanal.json");

module.exports = member => {
    let durum = new Date().getTime() - member.user.createdAt.getTime() < 1000 * 60 * 60 * 24 * 7;
    let before = new Date().getTime() - member.user.createdAt.getTime()
    let registerkanal = member.guild.channels.cache.find(x => x.id === kanal.register)
    const hesaptarih = useful.tarih(member.user.createdTimestamp)
    {
    return registerkanal.send(`
${member} Sunucumuza hoş geldin. Sunucumuz seninle beraber **${member.guild.memberCount}** kişiye ulaştı.
    
Hesabın \`${hesaptarih}\` tarihinde oluşturulmuş ve \`Güvenli\` gözüküyor.
    
<@&${rol.registery}> rolündeki arkadaşlarımız seninle ilgilenecektir.
    
Tagımızı alıp ses teyit vererek sunucumuza kayıt olabilirsiniz.`)}}