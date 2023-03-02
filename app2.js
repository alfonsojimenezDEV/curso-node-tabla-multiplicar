const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

//console.log(process.argv); //en process.argv van todos los parámetros de la línea de comandos

//REALMENTE LAS COSAS SE HARÍAN DE OTRA FORMA PERO ESTA
//FORMA ES GENIAL PARA FINES EDUCATIVOS.

//El primer argumento de argv es la ruta del comando, en este caso node
//El segundo argumento es la ruta del archivo que se ejecuta, en este caso app.js
//El tercer argumento es el parámetro que pasamos
//Como los dos primeros no nos interesan en este ejercicio,
//se pone [, , arg3] y se recoge el tercero en una variable que
//en este caso hemos llamado arg3 pero podemos ponerle el nombre
//que queramos.
const [, , arg3 = "base=5"] = process.argv; //el base=5 es el valor por defecto si no llega ningún parámetro y argv3 está vacío
console.log(arg3);
//Esto nos devuelve base=5
//arg3 es una cadena de texto que desestructuramos
//para ello utilizamos la función split indicándole el = como elemento separador
//con esto obtenemos dos elementos, base y 5.
const [, base = 5] = arg3.split("="); //El 5 es el valor por defecto
//ahora en base tenemos el valor del parámetro pasado
console.log(base);

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
