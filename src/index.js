const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const { createConnection } = require('mongoose')

const app = express()
const port = process.env.PORT

//console.log(process.env)

// const multer = require('multer')
// const upload = multer ({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {

//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))

//         }
//         cb(undefined, true)

//         // 3 ways for callback function
//         // cb(new Error('File must me a ...')) // error message to user
//         // cb(undefined, true) // fail
//         // cb(undefined, false) //do nothing


//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('find my middleware')

// }
// app.post('/upload', auth, upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     // Example sends Json error message 
//     res.status(400).send({ error: error.message })
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})
