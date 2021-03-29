module.exports= {
	name: 'ping',
	description: "MCW Ping Command",
	execute(message, args){
		message.channel.send('Pong! *Blazing fast*, right!?');
	}
}