const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

// ===============================
// EXPRESS SERVER
// ===============================

const app = express();

app.get("/", (req, res) => {
res.send("Big Deal Bot is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("🌐 Server running on port ${PORT}");
});

// ===============================
// DISCORD CLIENT
// ===============================

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent
]
});

// ===============================
// READY EVENT
// ===============================

client.once("clientReady", () => {
console.log("🔥 Bot Ready: ${client.user.tag}");
});

// ===============================
// MESSAGE COMMANDS
// ===============================

client.on("messageCreate", async (message) => {

if (message.author.bot) return;

// PING
if (message.content === "!ping") {
message.reply("🏓 Pong!");
}

// HELP
if (message.content === "!help") {
message.reply("📌 Commands: !ping !help");
}
});

// ===============================
// ERROR HANDLER
// ===============================

process.on("unhandledRejection", error => {
console.log("Unhandled promise rejection:", error);
});

process.on("uncaughtException", error => {
console.log("Uncaught exception:", error);
});

// ===============================
// LOGIN
// ===============================

client.login(process.env.TOKEN);
