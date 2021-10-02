const Discord = require('discord.js')
const client = new Discord.Client()
const token = require('./config.json').token
const prefix = require('./config.json').prefix

client.once("ready", () => {
    console.log("bot is ready")
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
        message.channel.send("pong!")
    } else {
        message.channel.send("Wrong command!")
    }
})

client.login(token)