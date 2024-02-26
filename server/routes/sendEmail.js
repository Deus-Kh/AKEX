const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
    const { subject, text } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'deus.kh05@gmail.com',
        pass: 'emat zxwi qdri nzks'
      }
    });
  
    const mailOptions = {
      from: 'Exchange App',
      to:"deus.kh05@gmail.com",
      subject,
      text
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });

module.exports = router;