const express = require('express');
const router = express.Router();

const API_LINK = process.env.API_LINK || "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/"

router.get('/', (req, res) => {
  res.type('json')
  res.status(201)
  fetch(`${API_LINK}currencies/${req.query.id}.min.json`)
    .then(res => res.json()).
    then(txet => res.send(txet))
})
router.get('/currencies', (req, res) => {
  res.type('json')
  res.status(201)
  res.send(require(`../api/currencies.json`));
})
router.get('/currencies.max', (req, res) => {
  res.type('json')
  res.status(201)
  res.send(require(`../api/currencies.max.json`));
})

module.exports = router; 