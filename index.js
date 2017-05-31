const express = require('express');
const router = require('./routes.js');

const app = express()
const port = process.env.PORT || 3000;
 
app.set('view engine', 'pug')
app.use( router ); 
app.use( express.static('public') );

app.listen(port, function () {
  console.log(`PWA listening on port ${port}!`)
})