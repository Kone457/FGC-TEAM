const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 7777

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once("ready", () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    const args = message.content.trim().split(/\s+/);
    const command = args[0].toLowerCase();

    switch (command) {
        case "!ping":
            message.reply("¡Pong! 🏓");
            break;

        case "!hola":
            message.reply(`¡Hola, ${message.author.username}! 😊`);
            break;

        case "!help":
            message.reply("Comandos disponibles: `!ping`, `!hola`, `!help`.");
            break;

        default:
            if (command.startsWith("!")) {
                message.reply("Comando no reconocido. Usa `!help` para ver los comandos disponibles.");
            }
            break;
    }
});

client.login(process.env.TOKEN);
