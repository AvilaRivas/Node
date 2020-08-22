require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use( router );
 
app.get('/usuario', function (req, res) {
  res.json('Get usuario')
})

app.post('/usuario/:id', function (req, res) {
  console.log('POST usuario')
  let body = req.body;
  if(body.nombre === undefined){
    res.status(400).json({
      ok: false,
      mensaje: 'Nombre es necesario'
    });
  }
  else {
    res.json({
      persona: body
    });
  }
})

app.put('/usuario/:id', function (req, res) {
  console.log('PUT usuario');
  let id= req.params.id;
  res.json({
    id
  });
})

app.delete('/usuario', function (req, res) {
  console.log('Delete usuario')
})
 
app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${process.env.PORT}`);
})