const Discord = require("discord.js")

module.exports.run = async (bot,message,args) =>{
    return message.channel.send(":wave:")
}


module.exports.help = {
    name: "hello"
}