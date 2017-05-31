const express = require('express');
const router = require('./routes.js');

const app = express()
 
app.set('view engine', 'pug')
app.use( router ); 
app.use( express.static('public') );

app.listen(3000, function () {
  console.log('PWA listening on port 3000!')
})