
function soyAsincrono(cb){
    return setTimeout(function(){
        try{
            return 3 + z
        }catch(error){
            cb('prueba' + error.message)
        }       
    },1500)
}



function function1(){
    return seRompe();
}

function seRompe(){
    return 3 + z
}



try{
   
    //function1();
    soyAsincrono(function(){
        console.error('prueba2')
    });

}catch(error){
    console.error(`se prersento un error y es: ${error.message}`)
}


console.log('seguimos vivos')

