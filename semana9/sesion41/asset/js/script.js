//Metodos de Arrays

/*let nums = [1, 2, 3, 4, 5];

console.log(nums);

//arr.push(x) => agrega el valor x al final del array

nums.push(6);
console.log(nums);
nums.push("KJJHJHJSHGJHJSHJYTTSRHJHJ");
console.log(nums);

// arr.pop() => elimina el ultimo elemento del array
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);


//arr.unshift => agrega el valor x al inicio del array 
console.log("unshift");
nums.unshift(0);
console.log(nums)

//arr.shift => eliminar el primer elemnto del array
console.log("shift");
nums.shift();
console.log(nums);*/

/*let nums = [1, 2, 3, 4, 5];
console.log(nums)

// arr.slice(begin, end)
//Crea una copia del array desde el indice de inicio al fin, sin tomar el ultimo
console.log("slice");
let subnums1 = nums.slice(0, 3);

console.log(subnums1);
console.log(nums);*/

//Ejercicio 
//Crear el sub array [3,4,5,6] a partir de nums

/*let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums)

console.log("slice");
let subnums = nums.slice(2, 6);
console.log(subnums)*/

// arr.splice (start, delectCount, item1, item2, ...)
//Elimina elementos del array y opcionalmente agrego nuevos elementos

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Valor de inicio
console.log("Solo el valor del inicio");
let subarr1 = nums.splice(2);
console.log(subarr1);
console.log(nums);

//Reagsino el array 
console.log("Reagsinamos el array");
nums = [1,2,3,4,5,6,7];
console.log(nums);



//Ahora eliminando elementos
console.log("Eliminando elementos");

let subarr2 = nums.splice(2, 2);
console.log(subarr2);
console.log(nums);


//Reagsinamos el array 
console.log("Reagsinamos el array");
nums = [1,2,3,4,5,6,7];
console.log(nums);

//Ahora eliminando elementos
console.log("Eliminando elementos");

let subarr3 = nums.splice(2, 4 ,"a", "b", true, 12312, "hola");
console.log(subarr3);
console.log(nums);



