const telegramBot = require('node-telegram-bot-api');
const token = '7416766942:AAHKbW9Rdnz1oBfArcyxhW1f4EpvwzUYumw'

const bot = new telegramBot(token,{polling: true});
console.log('bot activated')

bot.on('message',(msg) => {
var Hi = "hi"
	if(msg.text.toString().toLowerCase().indexOf(Hi) === 0){
		console.log('message recived')
		bot.sendMessage(msg.chat.id,'Hello dear user');
	}
});

bot.on('message',(msg) => {
	bot.sendMessage(msg.chat.id,'welcome');
	console.log(msg.chat.id)
});
