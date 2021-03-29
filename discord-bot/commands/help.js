const Discord = require('discord.js');

module.exports = {
	name:'help',
	description:"embeds!",
	execute(message, args) {
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#8c000c')
		.setTitle('Medal Clip Webhook Help')
		.setURL('https://awexxx.github.io/medal-clip-webhook/gh-pages')
		.setDescription('This bot is made to use with the [Medal Clip Webhook.](https://github.com/awexxx/medal-clip-webhook)\nThis webhook allows users to, without MedalBot, submit clips to a Discord server (if their server owner has it set up to do so).\nYou can navigate over to [the project site](https://awexxx.github.io/medal-clip-webhook/gh-pages) to use this!\nCheck out the [readme](https://github.com/awexxx/medal-clip-webhook) as well, there are a lot of ways you can go about submitting clips!\n\nP.S: Run mcw!commands for all the commands this bot includes :3')
		.setThumbnail('https://cdn.medal.tv/assets/img/avatars/default.png')
		.setFooter('Medal Clip Webhook Discord Bot')

		message.channel.send(newEmbed);

	}
}