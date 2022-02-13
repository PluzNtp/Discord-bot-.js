const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '+';


client.once('ready' , () => {
    console.log('ur boi is onlineeeeeeee');
});
///prefic check
client.on('message', message =>{

     let args = message.content.substring(PREFIX.length).split(" ");
     ///basic commands
     switch(args[0]){
         case 'status': ///input text 
            message.channel.send('🟢 online');///output
            break;
         case 'ping':
            message.reply('');
            break;
         case 'botโง่':
            message.channel.send('มึงอะโง่');
            break;
         case 'โง่':
            message.channel.send('มึงอะโง่');
            break;
         case 'info':
             if(args[1] === 'version'){
                  message.channel.send('Version 1.0.1');
             }else{
                  message.channel.send('invalid command')
             }
             break;
         case'help':
             message.channel.send()
     }
});
client.login(process.env.token);