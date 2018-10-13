// server.js
const express        	= require('express');
const bodyParser     	= require('body-parser');
const cors 				= require('cors')
const app            	= express();
const interactionService = require('./app/services/interactionService');

var port = Number(process.env.PORT || 5858);

var admin = require('firebase-admin');

var serviceAccount = require('./private.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://app-core-6d96d.firebaseio.com"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors()); 

app.use((req, res, next) => {
    console.log("Telemetría a futuro para rutas " + req.path);
    next();
});

require('./app/routes')(app);

app.use((req, res, next) => {
    console.log("Telemetría a futuro para final de req " + req.path);
    interactionService.saveIntercation(req, res);
    next();
});

app.listen((port), () => {
	console.log('Se está ejecutando en el puerto: ' + port);
});     
          