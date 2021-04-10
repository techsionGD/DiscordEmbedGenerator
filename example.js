const Discord = require("discord.js")
const embed = require("../db/embed")

module.exports.run = async (client, message, prefix) => {
    embed(message, "Testing complete!", settings.colors.green)
}
module.exports.config = {
    name: "test",
    aliases: ["tst"],
    description: "A test command",
    usage: "test",
    category: "Info",
    developer: true,
    permission: "all",
}
