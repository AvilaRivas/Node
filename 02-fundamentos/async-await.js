/*
* Async Await
*/

// let getNombre = async() => {
//     return 'Victor';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Victor');
        }, 3000)
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(resp => {
    console.log(resp);
}).catch(e => {
    console.log(`Error de ASYNC: ${e}`);
})