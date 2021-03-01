const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

/** Setup für handlebars */
// welcher Engine: 
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
/** setup fertig von handlebars */

/** Stylesheets und Bilder */
// Name vom Order wo stylesheet liegt:
app.use(express.static('public'))
// Name vom Order wo Bilder liegen:
app.use(express.static('images'))

app.get('/', (req, res) => {
  // hier wird die Datei start angezeigt, die wir mit handlebars bauen dargestellt werden: 
  res.render('start')
})

app.get('/about', (req,res) => {
  // wir holen daten vom daten bank und verwenden sie hier: 
  res.render('about', {
    name: 'Anne',
    stadt: 'Berlin',
    hobbies: ['joggen', 'tanzen', 'stricken']
  })
})

app.get('*', (req,res) =>{
  res.render('nichtGefunden')
})

app.listen(3000, () => console.log('Server läuft auf 3000'))