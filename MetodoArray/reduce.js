//  Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.

let numeros = [23,43,12,43,54];

let suma = numeros.reduce(function(acum,num) {
    return acum + num;
})
console.log(suma);