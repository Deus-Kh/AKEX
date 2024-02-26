const express = require('express');
const sendEmailRoute = require('./routes/sendEmail')
const apiRoute = require('./routes/api')
const bodyParser = require('body-parser');
require('dotenv').config()

const PORT = process.env.HOST_PORT || 5005;

const app = express();

app.get('/', (req, res,) => {
  res.redirect('http://localhost:3000')
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Թույլատրում է հարցումները
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Թույլատրված HTTP-մեթոդները
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Թույլատրված header-ները
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());

app.use('/send-email', sendEmailRoute)

app.use('/api', apiRoute)

app.listen(PORT, () => console.log(`App has been started on ${PORT} port`))