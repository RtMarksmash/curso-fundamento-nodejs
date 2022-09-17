function asincrono(apellido){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("mario  " + apellido);
            resolve();
        }, 1000);
    })

};

function fight(){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log("ia ia ia ia pum pum pum");
            resolve();
        },1500)
    })   
}

function asincrono2(apellido){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log("diego  " + apellido);
            resolve();
        },1500);
    })
    
}




//
console.log("iniciando la pelea");
asincrono("mora")
    .then(fight)
    .then(asincrono2)
    .then(nombre =>{
        console.log("terminando pelea")
    })
    .catch(error =>{
        console.error(error)
    })