const { Discord, MessageEmbed } = require('discord.js');
const config = require("../tantrumayarlamalar.json");
const emoji = require("../tantrum-emoji.json");
const rol = require("../tantrum-rol.json");
const kanal = require("../tantrum-kanal.json");
  
if (oldUser.username !== newUser.username) {
if (newUser.username.includes(config.tag) &&!client.guilds.cache.get(config.SunucuID)
.members.cache.get(newUser.id).roles.cache.has(rol.family)) 

{
     
await client.guilds.cache.get(config.SunucuID).members.cache.get(newUser.id).roles.add(rol.family);
  
await client.guilds.cache.get(config.SunucuID).members.cache.get(newUser.id).setNickname(client.guilds.cache.get(config.SunucuID).members.cache.get(newUser.id).displayName.replace(config.kayıtsız_tag, config.tag));
channel.send(`${newUser} adlı kullanıcı tagımızı aldığı için <@&${rol.family}> ekip rolünü verdim.`);

}

if (!newUser.username.includes(config.tag) &&client.guilds.cache.get(config.SunucuID).members.cache.get(newUser.id).roles.cache.has(rol.family))

await client.guilds.cache.get(config.SunucuID).members.cache.get(newUser.id).roles.remove(rol.family);
  
await client.guilds.cache.get(config.SunucuID).members.cache.get(newUser.id).setNickname(client.guilds.cache.get(config.SunucuID).members.cache.get(newUser.id).displayName.replace(config.tag, config.kayıtsız_tag));
channel.send(`${newUser} adlı kullanıcı tagımızı aldığı için <@&${rol.family}> ekip rolünü aldım.`);
};