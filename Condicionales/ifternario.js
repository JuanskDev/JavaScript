let numeroMayor = 4 > 9 ? "Cuatro es mayor" : "Nueve es mayor";
console.log(numeroMayor);

// - - - - - - - - - - - - - - - - - - - - - - -  -- - - - '//

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );