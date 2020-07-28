const fs = require('fs');

mostrarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        };
        if(!Number(limite)){
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        };
        for(let i = 1; i <= limite; i++){
            console.log(`${base} * ${i} = ${base * i}`);
        }
        resolve();
    });
};

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        };
        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if(err) 
                reject(err)
            else 
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    mostrarTabla
};