const express = require('express');
const app = express();
const mysql = require('mysql2');
//motor de plantilla
const hbs = require('hbs');
//encontrar archivos
const path = require('path');
//para enviar mails
const nodemailer = require('nodemailer');
//variable de entorno
require ('dotenv').config();

//Configuramos el puerto
const PORT = process.env.PORT || 9000;

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//configuramos el motor de plantillas de HBS
app.set('view engine', 'hbs');
//configuramos la ubicacion de las plantillas
app.set('views', path.join(__dirname, 'views'));
//configuramos los parciales de los motores de plantillas
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//conexion a la base de datos
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
})

conexion.connect((err) =>{
    if(err) throw err;
    console.log(`Conectado a la Database ${process.env.DATABASE}`)
})

//rutas de la aplicacion
app.get('/', (req, res) =>{
    res.send('Bienvenido a la App Completa')
})

//servidor a la escucha de las peticiones
app.listen(PORT, () =>{
    console.log(`Servidor trabajando en el Puerto ${PORT}`)
});

console.log();