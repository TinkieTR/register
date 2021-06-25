const Discord = require('discord.js');
const config = require('../../tantrumayarlamalar.json')


exports.run = (client, message, args) => {

  if(message.author.id !== config.tantrum) return;
  message.channel.send(`\`${client.ws.ping}\` ms`)};


exports.conf = {
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ping',
  description: 'Botun gecikmesini gösterir.',
  usage: 'ping'
};