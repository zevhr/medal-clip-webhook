const Discord = require('discord.js');

module.exports = {
	name:'commands',
	description: "Commands Command lolololol",
	execute(message, args) {
		const commandsEmbed = new Discord.MessageEmbed()
		.setColor('#8c000c')
		.setTitle('Medal Clip Webhook Commands')
		.setURL('https://awexxx.github.io/medal-clip-webhook')
		.setDescription('Current commands for this bot:\nmcw!help - Displays information about this bot\nmcw!ping - Lets you know if the bot is alive!')
		.setThumbnail('https://cdn.medal.tv/assets/img/avatars/default.png')
		.setFooter('Medal Clip Webhook Discord Bot')

		message.channel.send(commandsEmbed);
	}
}