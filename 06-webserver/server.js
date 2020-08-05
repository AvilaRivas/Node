const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));
 
// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Victor',
//         edad: 32,
//         url: req.url
//     }

//     res.send(salida);
//   //res.send('Hello World')
// })

// app.get('/data', (req, res) => {
//     res.send('Hola data');
// })
 
app.listen(3000, () => {
    console.log('escuchando peticiones en el puerto 3000');
})  