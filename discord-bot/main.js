const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'mcw!';

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('The Medal Clip Webhook Bot is now ready!');
	client.user.setActivity("mcw! messages!", { type: "LISTENING"})	
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	
	} else if (command === 'help'){
		client.commands.get('help').execute(message, args);

	} else if (command === 'link'){
		message.channel.send('https://awexxx.github.io/medal-clip-webhook/gh-pages')
	
	} else if (command === 'commands'){
		client.commands.get('commands').execute(message, args);
	}
});

client.login('your-token-here');