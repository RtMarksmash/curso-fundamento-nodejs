const { error } = require("console");
const { resolve } = require("path");

console.time("todo")

let suma = 0;

console.time("bucle")
function sumar(){
    for(i = 0 ; i < 10000000 ; i++){
        suma += 1;
    }
}

console.timeEnd("bucle")


let suma2 = 0;

console.time("bucle2")
function sumar(){
    for(i = 0 ; i < 10000 ; i++){
        suma2 += 1;
    }
}

console.timeEnd("bucle2")


console.time("asincrono")

function asincrono(){
   return new Promise((res,err) =>{
    setTimeout(function(){
        console.log("proceso terminado")
    
    },2000)
    resolve();
   })
};


asincrono()
    .then((res) => {
        console.log(res)

    })

console.timeEnd("asincrono")
console.timeEnd("todo")