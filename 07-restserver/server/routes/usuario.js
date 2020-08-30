const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Usuario = require('../models/usuario')
const app = express();

app.get('/usuario', function (req, res) {
    let desde = Number(req.query.desde) || 0;
    let limite = Number(req.query.limite) || 5;
    Usuario.find({estado:true}, 'nombre email role estado google img')
        .skip(desde)
        .limit(limite)
        .exec()
        .then(async (data)=>{
            let count=await Usuario.count({estado:true});
            res.json({
                ok:true,
                count,
                data
            });
        })
        .catch(err => {
            res.status(400).json({
                ok:false,
                err
            });
        })
})
  
app.post('/usuario', function (req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role

    });

    usuario.save((err, usuarioDB) => {
        if(err) {
            res.status(400).json({
                ok: false,
                err
            });
        } else {
        res.json({
            ok: true,
            usuario: usuarioDB
        }); }
    });
})

app.put('/usuario/:id', function (req, res) {
    console.log('PUT usuario');
    let id= req.params.id;
    let body = _.pick(req.body, ['nombre','email','img','role','estado']);

    Usuario.findOneAndUpdate(id, body, {new: true, runValidators: true},  (err, usuarioDB) => {
        if(err) {
            res.status(400).json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                usuario: usuarioDB
            });
        }
    });
})

app.delete('/usuario/:id', function (req, res) {
    let id = req.params.id;
    let cambiaEstado = {
        estado:false
    };
    Usuario.findOneAndUpdate(id, cambiaEstado, {new: true}, (err, usuarioBD) => {
        if(err){
            res.status(400).json( {
                ok: false,
                err
            })
        } else {
            res.json({
                ok: true,
                usuario: usuarioBD
            });
        }
    })
})


module.exports = app;