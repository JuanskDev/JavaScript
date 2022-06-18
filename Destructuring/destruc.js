let array = ["Amarillo","Verde","Rojo","Azul"];
let [color1,color2,color3] = array ;

console.log(color1);
console.log(color2);
console.log(color3);


// -           -              - //

let array2 = [ 1 , 2 , 3, 4, 5];
let [a , , b, c] = array2;

console.log(a);
console.log(b);
console.log(c);


//    -        -        -        -//

let casorio = { 

    pareja : "Fede y Nico",
    lugar: "La Paz",
    invitados: 223,
    comida: "Mucha",
    bebida: "Kosher"
}

let {pareja,invitados,comida} = casorio;
console.log(pareja);
console.log(invitados);
console.log(comida);

//    -        -       -        -       -  //