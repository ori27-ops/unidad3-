// Recordando los objetos

/*const perro = {
    nombre: "Firulais",
    raza: "Doberman",
    edad: 5,
    es_adoptado: true,
    actividades: ["correr", "jugar", "correr"],
    amigos: [
        { 
            nombre: "Rocky", 
            raza: "Pastor Alemán",
        },
        {
            nombre: "Luna",
            raza: "Labrador",
        },
    ]
}

console.log(perro)
console.log(perro.amigos)
console.log(perro.amigos[0][1])*/


//Crear un objeto 

const cantanteFav = {
    nombre: "Harry Edward Styles",
    edad: 30,
    nacionalidad : "Britanico",
    es_cantante: true,
    premios: ["Brit Awards", "Grammy Awards", "MTV video"],
    albumes: [
        {
            nombre:"Harry Styles",
            numeros_de_canciones: 10,

        },
        {
            nombre:"Harry's House",
            numeros_de_canciones: 13,

        },
        {
            nombre:"Fine line",
            numeros_de_canciones: 12,

        },
    ],
};

console.log(cantanteFav);

console.log(cantanteFav.nacionalidad);
console.log(cantanteFav["es_cantante"]);
console.log(cantanteFav.albumes[2].numeros_de_canciones);
console.log(cantanteFav.premios[1]);

//modificar datos 
cantanteFav.nacionalidad = "Estadounidense",
cantanteFav.albumes[0]["numeros_de_canciones"]= 15,
console.log(cantanteFav);
