'use strict';
const BootBot = require('bootbot');
require('dotenv').config({ path: './.env' })

const bot = new BootBot({
    accessToken: process.env.accessToken,
    verifyToken: process.env.verifyToken,
    appSecret: process.env.appSecret
});

bot.on('message', (payload, chat) => {
    const text = payload.message.text;

    chat.say(`Vous avez ecris: "${text}"`);
});

// Meeting
bot.hear(['Salut', 'Bonjour', 'hi', 'slt', /Kaiz (Kaiz)?/i], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Bonjour, ${user.first_name}!`).then(() => {
            chat.say('Que puis-je faire pour toi?')
        });
    });
});

bot.start();