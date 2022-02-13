module.exports = {
	name:'help',
	description:"this is a ping command!",
	execute(message, args, Discord) {
		 const newEmbed = new Discord.MessageEmbed()
		     .setColor(0x46CDDA)
             .setTitle('Help')
             .addField('Basic Commands',basic)
             .addField(
			     {name:'Rule 1', value: 'be nice'},
			     {name:'Rule 2', value:  'follow'},
			 )
             message.channel.send(newEmbed);

	}

}