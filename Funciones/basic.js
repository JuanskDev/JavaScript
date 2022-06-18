function loro(texto) {
  for (let i = 1; i <= 5; i++) 
  console.log(texto);
}
console.log(loro("Salir de la casa rapido"));

// - - - --  -- - -  -- - - - - -- - - - - - - -- - - - - //

function noParesDeContarImparesHasta(numero) {
  let cantImpares = 0;
  for (let i = 0; i <= numero; i++)
    if (i % 2 != 0) {
      cantImpares++;
    }
  return cantImpares;
}

console.log(noParesDeContarImparesHasta(12));

//     - -- - - -- - - - -- - /

function myFavoriteColors() {
  // <- The body starts here at the {
  let colors = ["purple", "orange", "green", "cyan"];
  let statement = "My favorite colors are ";

  for (let i = 0; i < colors.length; i++) {
    // Check if this is the last color in the list
    if (i === colors.length - 1) {
      statement += "and " + colors[i] + ".";
    } else {
      statement += colors[i] + ", ";
    }
  }
  console.log(statement);
} // <- The body ends here at the }
myFavoriteColors();

// - - -- - - - -- - - - - -- /

let studentAnswers = ["C", "D", "D", "B", "A", "C", "B"];
let teachersCopy = ["A", "D", "D", "B", "B", "C", "B"];

function gradeQuiz(studentAnswers, teacherAnswers) {
  let score = 0;
  for (let i = 0; i < studentAnswers; i++) {
    if (studentAnswers[i] === teacherAnswers[i]) {
      score = score + 1;
    }
  }
  return score; /// NO ME SALE!!
}
console.log(gradeQuiz());

//  - - - -- - - - - - - -         - - - -  //

