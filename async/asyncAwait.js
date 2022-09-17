async function asincrono(apellido){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("mario  " + apellido);
            resolve();
        }, 1000);
    })

};

async function fight(){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log("ia ia ia ia pum pum pum");
            resolve();
        },1500)
    })   
}

async function asincrono2(apellido){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log("diego  " + apellido);
            resolve();
        },1500);
    })
    
}


//()

async function main(){
    await asincrono("mora");
    await fight();
    await fight();
    await asincrono2("mora");
    console.log("fin de la pelea");
}

console.log("empezando pelea");
main()
