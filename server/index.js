const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { handleErrors } = require('./middlewares/handleErrors')
const { handleNotFound } = require('./middlewares/handleNotFound')

const app = express()
const port = process.env.PORT || 3200

require('./mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (_, res) => {
    return res.status(200).send('<h1>welcome to backend</h1>').end()
})

app.use('/api', require('./routes/index.routes'))

// handle the url if this hasn't exist
app.use(handleNotFound)

// handle errors
app.use(handleErrors)

app.listen(port, () => {
    console.log('listen on port', port)
})