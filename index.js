const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
const token = process.env.token
const botprefix = "/"
const id = "493087484259991563"
bot.commands = new Discord.Collection()
let coins = require("./coins.json")

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

    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        }
    }

    let coinAmt = Math.floor(Math.random() * 1) + 1
    let baseAmt = Math.floor(Math.random() * 1) + 1

    if(coinAmt === baseAmt){
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
        }
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
            if (err) console.log(err)
        })
    }

    let prefix = botprefix
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if(commandfile) commandfile.run(bot,message,args)
})
bot.login(token)
