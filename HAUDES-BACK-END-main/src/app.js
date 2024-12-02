const express = require("express");
const cors = require("cors");
const multer = require("multer")
const { addStudent, getAllEmails, getStudentsInfo } = require("./controllers/student");
const sendEmail = require("./emailService"); //Importa la función de envío de correos

const app = express();
const upload = multer(); //Configuración básica para manejar archivos (adjuntos al correo)

app.use(express.json()); // For parsing application/json
app.use(cors());
//app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

//Rutas existentes
app.get('/students/emails', getAllEmails);
app.get('/students/info', getStudentsInfo);
app.post('/students', addStudent);
app.post('/send-email', upload.array('attachments'), sendEmail);

module.exports = app;