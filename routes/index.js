const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Scrollbook CRUD | Category',
  })
})

module.exports = router
