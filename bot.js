require('dotenv').config();
const tmi = require('tmi.js');
const fs = require('fs');
const path = require('path');

const client = new tmi.Client({
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH
  },
  channels: [process.env.TWITCH_CHANNEL]
});

let chatteurs = {};

client.connect();

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const username = tags['display-name'] || tags['username'];
  if (!username) return;

  chatteurs[username] = (chatteurs[username] || 0) + 1;

  const top10 = Object.entries(chatteurs)
    .map(([name, messages]) => ({ name, messages }))
    .sort((a, b) => b.messages - a.messages)
    .slice(0, 10);

  const filePath = path.join(__dirname, 'public', 'top_chatteurs.json');
  fs.writeFileSync(filePath, JSON.stringify(top10, null, 2));
});
