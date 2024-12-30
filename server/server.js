const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const errorHandler = require('./middlewares/errorHandler')
const { PORT } = require('./config/port')
const { DB_URL } = require('./config/database')
const cors = require('cors')

async function main() {
    await mongoose.connect(DB_URL)
}
main().catch(err => console.log(err.message))

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/images', express.static(path.join(__dirname, 'public', 'img')))
app.use('/', require('./routes/root'))
app.use('/electronics/mobiles', require('./routes/api/mobileRoute'))
app.use('/upload', require('./routes/api/uploadRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`App is running in the port ${PORT}`)
})