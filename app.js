const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();

// console.log(process.argv);

// console.log(argv);
console.log("base en yargs: ", argv.base);

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
