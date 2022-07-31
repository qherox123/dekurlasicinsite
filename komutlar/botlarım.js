const Discord = require('discord.js')
const util = require('util');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (db.has('botlar')) { 
        if (db.has(`kbotlar.${message.author.id}`)) {   
         for(var i = 0; i < Object.keys(db.fetch('botlar')).length; i++) {
         var id = Object.keys(db.fetch('botlar'))[i]
          if (db.fetch(`botlar.${id}.sahipid`) === message.author.id)   {
           var isim = db.fetch(`botlar.${id}.isim`)
           const botların = new Discord.RichEmbed()
           .setDescription(isim)
           message.channel.send(botların)
          }
   }
 } else {
  message.channel.send("Botun bulunmamaktadır.")
 }
} else {
  message.channel.send("Sistemde bot bulunmamaktadır.")
}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["bots"],
	permLevel: 0,
	kategori: 'yapımcı'
}

exports.help = {
	name: 'botlarım',
	description: 'Yazılan kodu çalıştırır.',
	usage: 'eval [kod]'
}