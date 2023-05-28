'use strict';
const BootBot = require('bootbot');
require('dotenv')

const bot = new BootBot({
    accessToken: process.env.accessToken,
    verifyToken: process.env.verifyToken,
    appSecret: process.env.appSecret
});

bot.on('message', (payload, chat) => {
    const text = payload.message.text;
    chat.say(`Echo: ${text}`);
});

bot.start();