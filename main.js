const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '+'
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot is online!');
});

client.on("ready", () => {
   client.user.setPresence({ activity:{ name: "[+] ROBLOX!" }})
 })


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/:+/);
    const command = args[0].toLowerCase(); //args.shift().toLowerCase();
 

    if(command === 'group'){
        client.commands.get('group').execute(message, args);
    }   else if(command === 'kick'){
            client.commands.get('kick').execute(message, args)
    }   else if(command === 'ban')
        client.commands.get('ban').execute(message, args);            
});
    
              

        client.login('ODM2OTE1NzYwMDA5NDQ1Mzc3.YIk8ig.o_JtQkgu1PDa7hvXjxNSZRE7LAw');