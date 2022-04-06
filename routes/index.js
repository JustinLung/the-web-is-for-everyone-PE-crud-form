const express = require('express')
const router = express.Router()
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

router
  .get('/', (req, res) => {
    res.render('index', {
      title: 'Scrollbook CRUD | Category',
    })
  })
  .post('/', (req, res) => {
    const type = req.body
    const options = {
      method: 'POST',
      body: type,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    fetch('https://scrollbook.api.fdnd.nl/v1/category', options)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err)
      })
  })

module.exports = router
