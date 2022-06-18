let numeros = [23,43,12,43,54];

let suma = numeros.reduce(function(acum,num) {
    return acum + num;
})
console.log(suma);