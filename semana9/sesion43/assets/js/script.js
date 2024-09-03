//Modificacion de arrays 

// .map(funcion)
// 1 => Dado el siguiente arrat de numeros, creae un nuevo array con cada uno de los numeros 
let nums = [1, 2, 3, 4, 5];
console.log(nums);


//Con bucles
/*let numsPorDos = [];

for (let num of nums) {
    numsPorDos.push(num * 2);
} */
//Usando maps

    let numsPorDos = nums.map((n) => n * 2);

    console.log(numsPorDos);
    //El areglo original no se modifica 
    console.log(nums);

    //2 => Dado el siguiente array de strings, crear un array indicando que elementos estan en mayusculas (true) y cuales estan en minuscula(false)

    /*let letras = ["a", "B", "c", "B", "e"] //[false, true, false, true, false]

    let sonMayusculas = letras.map((c) => c.toUpperCase() == c);

    console.log(sonMayusculas);*/

//Ejercicio 3 
// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
let palabras = [
  "hola",
  "computadora",
  "casa",
  "programacion",
  "javascript",
  "ciclo",
];
// ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]
    let palabraLarga = palabras.map((c) => {
     if (c.length > 7 ) {
        return   "Palabra larga";
    } else {
    return "Palabra corta";
    }
    });
    console.log(palabraLarga)