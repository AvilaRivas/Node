console.log('Inicio del programa');

setTimeout(function(){
    console.log("Primer timeout");
}, 3000)
setTimeout(function(){
    console.log("Segundo timeout");
}, 0)
setTimeout(function(){
    console.log("Tercero timeout");
}, 0)


console.log("fin del programa");