const Discord = require("discord.js")

module.exports.run = async (bot,message,args) =>{
    let bicon = bot.user.displayAvatarURL
        let guilds = bot.guilds.size
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setThumbnail(bicon)
        .setColor("#9900ff")
        .addField("Servers", `in ${guilds} servers!`)
        .addField("Bot Name", `${bot.user.username}`)
        .addField("Created on", `${bot.user.createdAt}`)
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
        return message.channel.send(botembed)
}


module.exports.help = {
    name: "botinfo"
}