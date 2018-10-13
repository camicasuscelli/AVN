const firebase = require('firebase-admin');
const database = firebase.database();

module.exports = {
	saveData: function(data) {
		try {
			var ref = database.ref('/session/' + data.token_id);
			return ref.set(data);
		}
		catch(err) {
			throw new Error("Error al guardar los datos");
		}
	}
};