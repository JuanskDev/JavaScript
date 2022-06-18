// Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.

let numeros = [2,3,4,5];
let porMil = numeros.map(function (num) {
    return num * 1000;
})
console.log(porMil) 

//        -            -               -//

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados =  horariosPartida.map (function (num) {
    return num - 1
}) 

console.log(horariosAtrasados);