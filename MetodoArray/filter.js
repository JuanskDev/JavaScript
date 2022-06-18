//Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

let numeros = [12,213,43,2324,421,432,542,123,43,323];
let mayoresDe200 = numeros.filter(function(numero) {
    return numero > 200;
})
console.log(mayoresDe200);


 //           -             -                  -//

 let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter (function (persona) {
      return persona.promedio >= 7
})

let desaprobados = estudiantes.filter (function (persona) {
      return !persona.aprobado
})
console.log(aprobados);
console.log(desaprobados);