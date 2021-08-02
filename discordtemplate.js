const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '[INSERT PREFIX HERE]';

client.once('ready', () => {
    console.log('[BOT NAME] is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)  return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'command1'){
        message.channel.send('[TYPE RESPONSE HERE]');
    } else if  (command == 'help'){
        message.channel.send('Commands: [INSERT COMMANDS HERE');
    } 
});

client.login('[INSERT TOKEN HERE]');
