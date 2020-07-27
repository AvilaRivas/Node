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
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id == empleado.id);

        if(!salarioDB){
            reject(`El salario para el id ${empleado.id} no existe`, null);
        }
        else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    })
}

let getEmpleado = (id, callback) => {

    return new Promise((resolve, reject) => {
            let empleadoDB = empleados.find(empleado => empleado.id === id)
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`);
        }
        else {
            resolve(empleadoDB);
        }
    })
}

// Esto es una forma basica de trabnajar con promesas ********************************************
// getEmpleado(1).then(empleado => {   //Empleado es el objeto que voy a recibir, siempre obtendre un unico objeto
//         getSalario(empleado).then((salarioEmpleado) => {
//             console.log(salarioEmpleado);
//         }, (err) => {
//             console.log(err);
//         })

// }, (err) => {
//     console.log(err);
// })

getEmpleado(1).then(empleado => {   //Empleado es el objeto que voy a recibir, siempre obtendre un unico objeto
    return getSalario(empleado); // esta llamando una promesa
}).then((resp) => {  //este THEN es ejecutado despues del anterior y recibe el objeto de la anterior promesa
    console.log(resp)
}).catch((err) => {    //Esto atrapa todos los errores
    console.log(err);
})