const sensor = require('node-dht-sensor').promises;

async function readSensor() {
	try { 
		const res = await sensor.read(22,2);
		console.log(`Temperatura: ${res.temperature.toFixed(2)}ªC.`)
		console.log(`Humedad: ${res.humidity.toFixed(2)}%`)
	}
	catch(err){
		console.error('failed to red sensor', err);
	}
}
readSensor();


