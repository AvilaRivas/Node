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
            throw new Error(`El salario para el id ${empleado.id} no existe`, null);
        }
        else {
            return {
                nombre: empleado.nombre,
                salario: salarioDB.salario
            };
        }
}

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el ID ${id}`);
    }
    else {
        return empleadoDB;
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`
}

getInformacion(10)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));