const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const USD = require('./rates/USD.json')
const AMD = require('./rates/AMD.json')
const PORT =   5005;

const app = express();
app.get('/',(req,res)=>{
  res.send('hell')
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Разрешить запросы от всех источников
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Разрешенные HTTP-методы
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Разрешенные заголовки
    next();
});
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'deus.kh05@gmail.com',
        pass: 'emat zxwi qdri nzks'
      }
    });
  
    const mailOptions = {
      from: 'Exchange App',
      to,
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
app.get('/rates/AMD',(req,res)=>{
  res.type('json')
  res.status(201)
  res.send(AMD)
})
app.get('/rates/USD',(req,res)=>{
  // res.type('json')
  res.type('application/json')
  res.status(201)
  res.send('hello')
})


app.listen(PORT, ()=> console.log(`App has been started on ${PORT} port`))