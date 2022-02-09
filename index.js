 const express = require('express')
const app = express()
const port = 3000

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server online")
})

app.listen(port, () => {
    console.log(`API listening on port ${port}`)
})
