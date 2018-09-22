const Discord = require("discord.js")

module.exports.run = async (bot,message,args) =>{
    let nokUserEmbed = new Discord.RichEmbed()
        .setDescription("Error!")
        .addField(`Uh oh.`,`Hey ${message.author}, you didn't mention someone.`)
        let kUser = message.guild.member(message.mentions.users.first())
        if(!kUser) return message.channel.send(nokUserEmbed)
        let kreason = args.join(" ").slice(22)

        let noReasonEmbed = new Discord.RichEmbed()
        .setDescription("Error!")
        .addField(`Uh oh.`,`Hey ${message.author}, you didn't give a reason.`)
        if(!kreason) return message.channel.send(noReasonEmbed)

        let noperms = new Discord.RichEmbed()
        .setDescription("Error!")
        .addField(`Uh oh.`,`Hey ${message.author}, you can't do that.`)
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noperms)
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(noperms)

        let kEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .addField("Kicked User", `${kUser}`)
        .addField("Reason",`${kreason}`)
        .addField("Kicked By",`${message.author}`)

        message.guild.member(kUser).kick(kreason)
        return message.channel.send(kEmbed)

}


module.exports.help = {
    name: "kick"
}