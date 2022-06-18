let diasDeEntrenamiento = ["Lunes", "Miercoles", "Viernes"];

switch (diasDeEntrenamiento) {
  case "Lunes":
  case "Miercoles":
    console.log("Hoy se entrena 2 horas y media");
    break;
  case "Viernes":
    console.log("Hoy se entrena un rato mas");
  default:
    console.log("Hoy no se entrena nada");
}

// - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - -- -  -//

let dia = "jueves";
function finDeSemana(dia) {
  switch (dia) {
    case "viernes":
      console.log("buen finde");
      break;
    case "lunes":
      console.log("buena semana");
      break;
    default:
      console.log("buen dia");
  }
}
finDeSemana(); 


// - - - - - - --- - - -  - - - - -- - - - -  - -- - - - - - -//

function tengoClases(dia) {
	switch (dia ) {
    case "lunes":
	case "miércoles":
	case "viernes":
	console.log("tenés clases");
	break;
	default:
	console.log("no tenés clases")
		}
}
tengoClases()