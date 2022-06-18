//let fs = require("fs");
//let variableJson = fs.readFileSync(__dirname + "/tareas.json", "utf-8");
//console.log(variableJson);

//FORMA DE HACERLO CON EL CICLO FOR!
/*for (let i = 0;  i < tareas.length; i++) {
          console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado); */

//FORMA DE DESTRUCTURING EL CICLO FOR
// console.log("1.", tareas[0].titulo + " - " + tareas[0].estado)
// console.log("1.", tareas[0].titulo + " - " + tareas[0].estado)
// console.log("1.", tareas[0].titulo + " - " + tareas[0].estado)

let fs = require("fs");
const archivo = require("./funcionesDeTareas");
let process = require("process");
let instruccion = process.argv[2];
//console.log(process.argv[2])
switch (instruccion) {
  case "listar":
    let datos = archivo.leerArchivo();
    if (datos.length > 0) {
      console.log("Listado de Tareas:");
      console.log("-----------------");
      //console.log( + ". "+ datos[i].titulo + " - " + datos[i].estado)
      datos.forEach((dato, index) => {
        console.log(index + 1 + ". " + dato.titulo + " -  " + dato.estado);
      });
    } else {
      console.log("El archivo está vacío");
    }
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción");
    console.log("Las acciones disponibles son: listar");
    console.log("------------------------------------");
    break;

  case "crear":
    let tarea = { titulo: process.argv[3], estado: "pendiente" };
    archivo.guardarTarea(tarea);
    break;

  case "filtrar":
    let tareas = archivo.leerPorEstado(process.argv[3]);
    tareas.forEach((tarea, index) => {
      console.log(index + 1 + ". " + tarea.titulo + " -  " + tarea.estado);
    });
    break;

  default:
    console.log("No entiendo que quieres hacer");
    console.log("Las acciones disponibles son: listar");
    console.log("------------------------------------");
    break;
}
