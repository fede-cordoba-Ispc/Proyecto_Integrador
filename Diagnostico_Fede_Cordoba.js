// Actividad 1

//declare las variables nombre y edad
let nombre ="Federico"
let edad = 43

//imprima un mensaje
console.log("Hola, me llamo Ana y tengo 22 años.")
console.log(`hola me llamo ${nombre} y tengo ${edad} años`)

//dado el siguiente array
const numeros=[3,7,12,5,2];

//numeros al cuadrado con map
let cuadrado = numeros.map((num)=>{return num ** 2});
console.log(cuadrado);
//numeros mayores a 5 con filter
let mayor = numeros.filter((num)=>{ return num > 5});
console.log(mayor);
// funcion flecha que reciba un numero e indique si es par o impar
// me costo el operador ternario... me iba a un if
const par_impar=(nro) => {return nro%2 === 0 ? "par": "impar"};

console.log(par_impar(5));
console.log(par_impar(6));

//Actividad 2

//Dado el siguiente objeto
const persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora",
    };
//mostrar el mensaje usuando desestructuracion
    console.log(`${persona.nombre} tiene ${persona.edad} años y trabaja como ${persona.profesion}`)
//sumar una propiedad al objeto
    persona.ciudad = "Rosario";
    console.log(`${persona.nombre} tiene ${persona.edad} años y trabaja como ${persona.profesion}, vive en ${persona.ciudad}`)


// Actividad 3
// no le entendi

// Actividad 4


// actividad 5

// Actividad 6
const productos = [
    { nombre: "Notebook", precio: 1200},
    { nombre: "Mouse", precio: 20},
    { nombre: "Teclado", precio: 50},
    { nombre: "Monitor", precio: 300},
   { nombre: "Auriculares", precio: 80},
    ];
// productos cuyo precio sea mayor a 100
//1- me costo entender en concepto de variable prod
let prod_precio = productos.filter((prod) => {return prod.precio > 100;});
console.log(prod_precio);
//2- Armar Array "Notebook: $1200"
let nueva_estruct = productos.map(function(element){return `${element.nombre}:$${element.precio}`});
console.log(nueva_estruct);
//3- suma de todos los importes
let total=0
let total_importes = productos.reduce((total,imp)=>{return total+imp.precio;},0);
console.log(total_importes);
//4- nombre de productos que cuesten menos de 100 todo en minusculas
// me costo identificar donde colocar la funcion ToLowerCase
let prod_menor_100 = productos.filter((prod) => {return prod.precio < 100}).map(function(prod){return prod.nombre.toLowerCase()});
console.log(prod_menor_100);


