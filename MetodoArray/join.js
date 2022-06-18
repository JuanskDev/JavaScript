/*  Une todos los elementos de un array en una cadena. 
Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos. */

let dias = ["Lunes","Miercoles","Viernes"];

let separadosPorComa = dias.join();
console.log(separadosPorComa);

let separadosPorGuion = dias.join(" - ");
console.log(separadosPorGuion);

let enArray = dias.join("[ ]");
console.log(enArray);