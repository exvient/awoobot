const Discord = require("discord.js")

module.exports.run = async (bot,message,args) =>{
    let sicon = message.guild.iconURL
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setThumbnail(sicon)
        .setColor("#9900ff")
        .addField("Server Name", message.guild.name)
        .addField("Member Count", message.guild.memberCount)
        .addField("Created On",message.guild.createdAt)
        .addField("You Joined",message.member.joinedAt)
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)

        return message.channel.send(serverembed)
}


module.exports.help = {
    name: "serverinfo"
}