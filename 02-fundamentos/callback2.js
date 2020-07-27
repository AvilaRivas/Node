let empleados = [{
    id: 1,
    nombre: "Victor"
},
{
    id: 2,
    nombre: "karla"
},
{
    id: 3,
    nombre: 'Jonathan'
}];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    if(!salarioDB){
        callback(`El salario para el id ${empleado.id} no existe`, null);
    }
    else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`);
    }
    else {
        callback(null, empleadoDB);
    }
}

getEmpleado(1, (err, empleado) => {
    if(err){
        return console.log(err);
    }
    getSalario(empleado, (err, salario) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(salario);
        }
    })
});


