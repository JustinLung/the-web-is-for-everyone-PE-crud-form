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
    const type = JSON.stringify(req.body)
    const options = {
      method: 'POST',
      body: type,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log(options)
    fetch('https://scrollbook.api.fdnd.nl/v1/category', options)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('Oops, something went wrong.')
      })
    res.render('index', {
      title: 'Scrollbook CRUD | Category',
      message: 'Category has been inserted, add another one.',
    })
  })

module.exports = router
