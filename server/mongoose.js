const mongoose = require('mongoose')

const url = `mongodb://localhost:27017/calendarDb`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('mongodb is connected'))
.catch((err) => console.error(err))