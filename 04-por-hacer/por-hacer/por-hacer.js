const fs = require('fs');

let listadoPorHacer =[];

const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json',data, (err) => {
        if(err) throw new Error(err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(x => x.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer.splice(index,1);
        guardarBD();
        return true;
    }
    else {
        return false;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        console.log(index);
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    }
    else {
        return false;
    }
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
    crear,
    getListado,
    actualizar,
    borrar
}