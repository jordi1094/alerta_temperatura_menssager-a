const activateBot = (telegrambot, token, sensorResponse) { 
	const  bot = new  telegrambot(token, {polling: true})
	bot.onText(/\/start/, (msg) => {
	bot.sendMessage(msg.chat.id, `Hola, bienvenid@. \n la <b> Temperatura</b> actual es: ${sensorResponse.temperature.toFixed(2) ªC}  \n 
	y la <b> humedad</b> es del${sensorResponse.humidity.toFixed(0)%.` 
}
