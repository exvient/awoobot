const Discord = require("discord.js")

module.exports.run = async (bot,message,args) =>{
    let norUserEmbed = new Discord.RichEmbed()
    .setDescription("Error!")
    .addField(`Uh oh.`,`Hey ${message.author}, you didn't mention someone.`)
    let rUser = message.guild.member(message.mentions.users.first())
    if(!rUser) return message.channel.send(norUserEmbed)
    let reason = args.join(" ").slice(22)
    let noReasonEmbed = new Discord.RichEmbed()
    .setDescription("Error!")
    .addField(`Uh oh.`,`Hey ${message.author}, you didn't give a reason.`)
    if(!reason) return message.channel.send(noReasonEmbed)

    let rEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .addField("Reported User", `${rUser}`)
    .addField("Reason",`${reason}`)
    .addField("Reported By",`${message.author}`)


    return message.channel.send(rEmbed)


}


module.exports.help = {
    name: "report"
}