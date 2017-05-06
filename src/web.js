// Dependencies
var express = require('express')
var morgan = require("morgan")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var path = require("path")
var cors = require("cors");
var unirest = require('unirest');

var config = require('./config')
var apiRouter = require("./infrastructure/routers/apiRouter")

var app = express()

// Settings
app.set('port', config.port)
app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.json())

// Conectar a mongodb
mongoose.connect(config.mongo_url, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la BD: ${err}`)
    }
    console.log('Conexión a la base de datos establecida!')
    // Start Server
    app.listen(app.get('port'), function () {
        console.log('Node app is running on port', app.get('port'))
    });
})

// Rutas del API
app.use("/api", apiRouter)

if (Request::is("api/*")) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");
}

// Error 404
app.use(function(req, res, next){
    res.status(404)

    // respond with html page
    if (req.accepts('html')) {
        return res.send("Página no encontrada")
    }

    // respond with json
    if (req.accepts('json')) {
        return res.json({ error: 'Recurso no encontrado' })
    }

    // default to plain-text. send()
    return res.type('txt').send('Not found')
})




/*// Define JSON File
var fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("data/botpress-messenger.profiles.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
//res.send("jsonContent:", jsonContent.usuario_uno.first_name);

/!*unirest.post('http://megbot.wtf/api')
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({ "firstName": "otroNombe", "lastName": "otroApellio", "email": "otomail@gmail.com" })
    .end(function (response) {
        console.log(response.body);
    });*!/*/