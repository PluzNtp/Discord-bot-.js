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
         case 'ta':
            message.reply('this is ta in 5 langauge| ta (eng) | ต๊ะ (ไทย)| 他 (chinese)|er (german)|il (french) ');
            break;
         case 'botโง่':
            message.channel.send('มึงอะโง่');
            break;
         case 'โง่':
            message.channel.send('มึงอะโง่');
            break;
         case'help':
             message.channel.send('')
         default:
            message.channel.send('invalid command use +help // วิธีการใช้ +help')
     }
});
client.login(process.env.token);