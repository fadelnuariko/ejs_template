const express = require('express');

const { PORT } = require('./util/config')

app = express()
app.use(express.json())


app.set('view engine', 'ejs')

app.use('/assets', express.static('views/assets'))


app.get('/', (req, res) => {
    res.render('content/index')
})

app.listen(PORT)
