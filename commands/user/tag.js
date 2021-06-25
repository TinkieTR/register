const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../tantrumayarlamalar.json");
const emoji = require("../../tantrum-emoji.json");
const rol = require("../../tantrum-rol.json");
const kanal = require("../../tantrum-kanal.json");

exports.run = (client, message, args) => {  
    message.channel.send(`${config.tag}`) 
};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Sunucu tagını atar.',
  usage: 'tag'
};