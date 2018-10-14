const firebase = require('firebase-admin');
const database = firebase.database();

module.exports = {
    saveIntercation: function(req, res) {
        var ref = database.ref('/interaction/' + req.path.split('/')[1] + '/' + Date.now());
        return ref.set({
            reqMethod : req.method,
            reqBody: req.body || "No body"
        });
    }
};