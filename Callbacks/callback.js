function inicialesNombres (nombre,apellido){
    return nombre[0] + apellido[0];
}

function saludarIniciales (nombre,apellido,callback){
    return ("Hola, " + callback(nombre,apellido));
}
console.log(saludarIniciales("Juan","Scarafia",inicialesNombres));

// - - - - - -- - - - - - -  -- - - - - - - -- - - -- //

let doble = numero => numero * 2;
let triple = numero => numero * 3;
let aplicarCallback = (numero,callback) => callback(numero);
console.log(aplicarCallback(32,triple));

//             -              -              -   //

function agregarHttp(url) {
    return "http://" + url;
}

function procesar(array,callback){
    resultado = [];
    for (let i=0 ; i < array.length ; i++){;
    resultado.push(callback(array[i]));
     }
      return resultado;
}

console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp));
