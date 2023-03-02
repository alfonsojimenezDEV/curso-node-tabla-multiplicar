const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Número del que se hará la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    defaultValue: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    describe: "Número hasta el que hacer la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.hasta)) {
      throw "El parámetro HASTA debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
