const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
const token = "NDkzMDg3NDg0MjU5OTkxNTYz.Dof3Vw.PzmSzVu8yfU18eHTDYU3aUx8S8s"
const botprefix = "/"
const id = "493087484259991563"
bot.commands = new Discord.Collection()
const fs = require("fs")
fs.readdir("./commands/",(err,files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    jsfile.forEach((f,i) => {
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props)
    return console.log("oof")
})
})
bot.on("ready",async () => {
    console.log("Awoo")
    let guilds = bot.guilds.size
    bot.user.setActivity(`${guilds} servers, use /help`, {type: "WATCHING"})
})
bot.on("message", async message => {
    if(message.author.bot) return
    if(message.channel.type == "dm") return
    let prefix = botprefix
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if(commandfile) commandfile.run(bot,message,args)
})
bot.login(token)