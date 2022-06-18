let productos = [
    { nombre : "Ordenador Pc"   , precio : 699    , departamento : "Tecnologia" },
    { nombre : "Sartenes"   , precio : 23    , departamento : "Hogar" },
    { nombre : "Reloj"  , precio : 124    , departamento : "Tecnologia" },
    { nombre : "Calculadora"   , precio : 11    , departamento : "Hogar"  },
    { nombre : "Muebles TV"   , precio : 234    , departamento : "Hogar" },
    { nombre : "Tuppers"   , precio : 7     , departamento : "Hogar" }
]

const encontrarP = productos.find (item => {
  // return (/Mueble/g).test(item.nombre)  // EXPRESION REGULAR , (METODO TEXT (algo asi)) //ESTO ME ENCUENTRA Muebles TV
    return item.nombre === "Ordenador Pc" // NO ME FUNCIONA
}) 
//console.log(encontrarP);

const precioIVA = productos.map (item => {
  let newPrecio = item.precio * 0.21; // CREE UNA LLAVE NUEVA DENTRO DEL OBJETO
  return {...item,newPrecio};
    //item.precio = item.precio * 0.21; // UTILIZANDO ESTA FORMA 
    //return item                        //  MODIFICO EL ORIGINAL
})
//console.log(precioIVA);

//const productosHogar = productos.filter(item => item.departamento === "Hogar")
const productosHogar = productos.filter((item) => {
    return item.departamento === "Hogar"
})

//console.log(productosHogar);

const check = productos.every(item => { // RETURN BOOLEAN
   return item.precio > 100
})
//console.log(check);


const check2 = productos.some(item => { // RETURN BOOLEAN
    return item.precio > 25;
})
//console.log(check2);


