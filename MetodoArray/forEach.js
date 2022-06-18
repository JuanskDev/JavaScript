/* Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y
 el indice del mismo. */

let estados = ["Borracho","Suaveson","Mas o menos","Deleme"];

estados.forEach(function(estado) {
    console.log(estado);
})

//        -           -               --  //

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function (producto){
     console.log( producto);
})