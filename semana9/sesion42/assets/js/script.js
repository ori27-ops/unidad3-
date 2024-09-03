//Búsqueda en arreglos
/*let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];
console.log(letras);

// .indexOf(elemento, desde)
// Devuelve el indice de la primera ocurrencia de un elemento en un arreglo, desde yba posicion determinada
let indice = letras.indexOf("a");
console.log(indice);
console.log(letras.indexOf("d"));

//Busca desde el indice especifico 
console.log(letras.indexOf("a", 4));

//Busca un elemento que no existe en el arreglo 
console.log(letras.indexOf("x"));

// .lastIndexOf (elemento, desde)
//Devuelve el indice de la ultima ocurrencia de eun elemento en un arreglo, desde una posicion determinada
console.log("LastIndexOf");

console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("a", 1));


//Includes (elemento, desde )
//Determina si un arreglo incluye un determinado elemento , deolviendo true o false segun corresponda

console.log("includes");
console.log(letras.includes("c"));
console.log(letras.includes("c", 3)); */

let nums = [34, 65, 23, 45, 96, 143, 4, 56];
console.log(nums);

//.find()
//Devuelve el primer elemento que cumple con una condicion
let coincidencia = nums.find((num) => num > 80);

let coincidenciaIndex = nums.findIndex((num) => num > 80);

let filtrado = nums.filter((num) => num > 60);

console.log(coincidencia); 
console.log(coincidenciaIndex); 
console.log(filtrado); 