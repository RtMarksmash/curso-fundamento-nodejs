
global.myVariable = "jorge"
console.log(myVariable)


let i = 0;
let intervalo =  setInterval(function(){
    if(i === 4){
        clearInterval(intervalo)
    }
    console.log("hola soy mario")
    i++
},1000)