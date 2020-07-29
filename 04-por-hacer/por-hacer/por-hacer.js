const fs = require('fs');

let listadoPorHacer =[];

const guardarBD =() => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json',data, (err) => {
        if(err) throw new Error(err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');   
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarBD();
    return porHacer;
}

module.exports = {
    crear
}