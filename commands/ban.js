const Discord = require("discord.js")

module.exports.run = async (bot,message,args) =>{
    let nokUserEmbed = new Discord.RichEmbed()
        .setDescription("Error!")
        .addField(`Uh oh.`,`Hey ${message.author}, you didn't mention someone.`)
        let bUser = message.guild.member(message.mentions.users.first())
        if(!bUser) return message.channel.send(nokUserEmbed)
        let breason = args.join(" ").slice(22)

        let noReasonEmbed = new Discord.RichEmbed()
        .setDescription("Error!")
        .addField(`Uh oh.`,`Hey ${message.author}, you didn't give a reason.`)
        if(!breason) return message.channel.send(noReasonEmbed)

        let noperms = new Discord.RichEmbed()
        .setDescription("Error!")
        .addField(`Uh oh.`,`Hey ${message.author}, you can't do that.`)
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(noperms)
        if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(noperms)

        let bEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .addField("Banned User", `${bUser}`)
        .addField("Reason",`${breason}`)
        .addField("Banned By",`${message.author}`)

        message.guild.member(bUser).ban(breason)
        return message.channel.send(bEmbed)

}


module.exports.help = {
    name: "ban"
}