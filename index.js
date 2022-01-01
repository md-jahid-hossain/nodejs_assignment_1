const express = require('express')
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')

const app = express()
app.use(express.json())

app.use(userRouter)
app.use(productRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Listen on port ${PORT}`))
