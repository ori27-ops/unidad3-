//Mini proyecto 
//Inicializamos nuestro arreglo con nombres de marcas de vehiculos
let cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

//Metodos de array 
let btnPush = document.getElementById("btn-push");
//Asignamos la funcion al boton 
btnPush.onclick = funcionPush;

function funcionPush() {

    cars.push("lexus");

    mostrarImagenes();

}
let btnPop = document.getElementById("btn-pop");
//Asignamos la funcion al boton 
btnPop.onclick = funcionPop;

function funcionPop() {
if (cars.length > 0) {
    cars.pop();

    mostrarImagenes();
} else {
    alert("No se puede eliminar más elementos ya que el arreglo esta vacio")
}

}
//Metodos de array 
let btnShift = document.getElementById("btn-shift");
//Asignamos la funcion al boton 
btnShift.onclick = funcionShift;

function funcionShift() {

    if (cars.length > 0) {
    
        cars.shift();

    
        mostrarImagenes();
    } else {
        alert("No se puede eliminar más elementos ya que el arreglo esta vacio")
    }
}
let btnUnshift = document.getElementById("btn-unshift");
//Asignamos la funcion al boton 
btnUnshift.onclick = funcionUnshift;

function funcionUnshift() {
    cars.unshift("ferrari");
    mostrarImagenes();

}

//Slice 
let btnSlice = document.getElementById("btn-slice")
btnSlice.onclick = funcionSlice;

function funcionSlice() {
    let begin = document.getElementById("begin").value;
    let end = document.getElementById("end").value;


    if (begin != "" && end != "" ) {
        cars = cars.slice(begin, end);
       
        mostrarImagenes();
} else {
    alert("Los campos no pueden estar vacion ")
}
}

function mostrarImagenes() {
    let text = "";

for (let car of cars) {
    text += `<img src="./assets/img/${car}.png" alt="${car}" width="100" />`;
}
document.getElementById("demo").innerHTML = text;
}

mostrarImagenes();


