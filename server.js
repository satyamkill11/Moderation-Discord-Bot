var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODI2NTE5NjgzMjgwNDA0NTUw.YGNqcA.bXhywRNdGv0kYD6xRZ4-4qWdOxA",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "?help",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "?",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}


