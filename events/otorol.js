const {MessageEmbed} = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const config = require('../tantrumayarlamalar.json')
const db = require('quick.db')

module.exports = async member => {

member.setNickname(`${config.kayıtsız_tag} ${config.kayıtsız_isim}`).catch()
member.roles.add([config.kayıtsız_rol]).catch()
};