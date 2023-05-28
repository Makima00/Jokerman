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

bot.on('message', (payload, chat) => {
    console.log('A text message was received!');
});

bot.on('attachment', (payload, chat) => {
    console.log('An attachment was received!');
});

bot.on('postback:HELP_ME', (payload, chat) => {
    console.log('The Help Me button was clicked!');
});

bot.start();