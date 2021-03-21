const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false, // gets rid of deprecation message
    useUnifiedTopology: true // uses new server discover and monitoring engine
})
