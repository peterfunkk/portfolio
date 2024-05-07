const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
require('ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
    console.log(`Servidor Express corriendo en http://localhost:${port}`);
  });