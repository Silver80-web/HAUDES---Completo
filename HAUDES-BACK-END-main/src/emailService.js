// Importar módulos necesarios
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // Tu dirección de correo
    pass: process.env.EMAIL_PASS  // Tu contraseña de correo o app password
  }
});

// Función para enviar correos
const sendEmail = (req, res) => {
  console.log('Datos recibidos:', req.body, req.files); // Verifica los datos aquí
  const { lista, emailBody } = req.body; // 'lista' es el nombre del select, 'body' es el mensaje
  const to = Array.isArray(lista) ? lista.join(', ') : lista; // Si 'lista' es un array de correos, únelos en una cadena
  const attachments = req.files.map(file => ({
    filename: file.originalname,
    content: file.buffer
  }));

  // Configurar los detalles del correo
  const mailOptions = {
    from: `Servicios escolares ${process.env.EMAIL_USER}`,
    to: to, // Destinatarios
    subject: "Notificación de la Herramienta Auxiliar de Dirección Escolar",
    text: emailBody, // Cuerpo del correo
    attachments // Archivos adjuntos
  };
    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).json({ message: 'Error al enviar el correo', error: error.message});
      }
      console.log('Correo enviado:', info.response);
      res.json({ message: 'Correo enviado con éxito' });
    });
};

module.exports = sendEmail;