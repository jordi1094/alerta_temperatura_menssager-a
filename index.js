import logic from  './logic/index.js';

const firstTry = async () => {
  try{	
	logic.activateBot()
} catch (err) {
	console.log(err.message);
  }
};

firstTry();
