import TelegramBot from "node-telegram-bot-api";
import logic from "./index.js"; // Asumiendo que "index.js" exporta logic
const token = "7416766942:AAHKbW9Rdnz1oBfArcyxhW1f4EpvwzUYumw";

const activateBot = () => {
    	const bot = new TelegramBot(token, { polling: true });
	bot.onText(/\/start/, (msg) => {
	try{
		const sensorResponse = logic.readSensor()
           	 bot.sendMessage(
                	msg.chat.id,
                	`Hola, bienvenid@. \n La <b>Temperatura</b> actual es: ${sensorResponse.temperature.toFixed(2)}°C \n` +
                	`y la <b>Humedad</b> es del ${sensorResponse.humidity.toFixed(1)}%.`,
                	{ parse_mode: "HTML" }
            	);
	}catch(err){bot.sendMessage(msg.chat.id, "Lo sioento ha habido un error")
        }});
};

export default activateBot;


