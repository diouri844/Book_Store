// get the url connexion to mongodb from .env file :

//import mongodb module : mongose :
const mongodb = require('mongoose');


const makeConnexion = ()=>{
	// make connexion to mongodb :
	mongodb.connect(
    "mongodb+srv://chopen844:chopen@844@cluster0.xi6i7kt.mongodb.net/?retryWrites=true&w=majority"
  )
	.then((response)=>{
		// connecion success :
		console.log("connected to mongodb ");
	})
	.catch((error)=>{
		console.error(" connexion error ", error);
	});
}

module.exports ={ makeConnexion };
