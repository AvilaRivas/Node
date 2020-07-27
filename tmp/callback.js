// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Victor',
        id //shortcut of - id: id
    }
    console.log('create function');
    if (id === 20){
        callback(`El usuario con id ${id}, no existe en la BD`, usuario);
    }
    else {
        callback(null ,usuario);
    }
    console.log('Create function exit');
}

getUsuarioById(20, (err, usuario) => {
    console.log('callbaCK in');
    if(err) {
        return console.log(err);
    }
    else {
        console.log('Usuario de base de datos', usuario);
    }
    console.log('callbaCK out');
})