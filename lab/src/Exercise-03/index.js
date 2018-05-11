
const express = require('express')
const app = express()

 app.set('view engine', 'ejs')
 
 app.get('/', function (req, res) {
    res.render('index')
 })

 app.get('/name', function (req, res) {
    res.send('Hello Name!')
  })

  app.get('/about', function (req, res) {
    res.send('Hello Name!')
  })

 
 app.listen(3030, function () {
   console.log('listening on port 3030!')
 })


// GET
// app.get('/', (req, res)=> {
//     res.send('Hello World!')
//   })
//   // name route path, defines another endpoint '/name'
//   app.get('/name', (req, res)=> {
//      res.send('Hello Name!')
//    })
//   app.listen(8080, function () {
//     console.log('listening on port 3030!')
//   })

//POST
//   app.post('/', function (req, res) {
//     res.send('Hello World!')// posting "Hello World!" to root URL
//   })
//   app.listen(8080, function () {
//     console.log('listening on port 8080!')
//   })

