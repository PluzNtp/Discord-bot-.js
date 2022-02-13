const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

var version = '0.01';
///Help var
var basic   = 'basic :placard:';

var music   = 'music :guitar:' ;
                 
               

client.once('ready' , () => {
    console.log('ur boi is onlineeeeeeee');
});
///prefic check
client.on('message', message =>{
     if(!message.content.startsWith(PREFIX) || message.author.bot) return;

     const args = message.content.slice(PREFIX.length).split(/ +/);
     const command = args.shift().toLowerCase();
     /// command
     if(command === 'status'){
         client.commands.get('ping').execute(message, args);
	 } 
     if(command === 'help'){
         client.commands.get('help').execute(message, args);
     {
});
client.login(process.env.token);