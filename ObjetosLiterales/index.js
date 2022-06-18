let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadHoras){
  this.energia = this.energia - (cantidadHoras * 5);
  this.experiencia = this.experiencia + (cantidadHoras * 2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(12);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

//      -   - -  - - -   - -   - - - - - - -   - - - - /

let fruitBasket = {
  apple: "red",
  blackberry: "black",
  orange: "orange",
};


fruitBasket.banana = "yellow"
fruitBasket.avocado = "green";

console.log(fruitBasket)

//   - -- - -- - - - - -- - - - - /

let myGrades = {
  test0: 100,
  test1: 68,
  test2: 98.5,
  test3: 90,
};

// Modify the object using dot notation below
myGrades.test1 = 98;
console.log(myGrades);

//    ---------------------------------/

let partyPeople = [
  { name: "Joe", attending: false },
  { name: "Jasmine", attending: true },
  { name: "Julio", attending: false },
  { name: "Julia", attending: true },
];

for (let i = 0; i < partyPeople.length; i++) {
  if (partyPeople[i].attending) {
    console.log(partyPeople[i].name + " is partying!");
  } else {
    console.log(partyPeople[i].name + " is burnt out on partying =(");
  }}