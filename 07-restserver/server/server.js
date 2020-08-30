require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');






// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);
// console.log(process.env.URLDB);

mongoose.connect(process.env.URLDB, 
                {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true , useNewUrlParser: true, useCreateIndex: true}, 
                (err, res) => {
  if( err) throw error;
  console.log("Base de datos ONLINE");
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${process.env.PORT}`);
})


