const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
const indexRoute = require('./routes/index')

app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/public')))

app.use('/', indexRoute)

app.listen(PORT, () => console.log(`Listening on http://[::]:${PORT}`))
