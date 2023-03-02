const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".yellow} ${i} ${"=".yellow} ${base * i}\n`;
    }

    if (listar) {
      console.log("===========".red);
      console.log("Tabla del".blue, colors.green(base));
      console.log("===========".red);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    return `Tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
