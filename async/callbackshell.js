function asincrono(apellido ,micallback){
    setTimeout(function(){
        console.log("mario  " + apellido);
        micallback();
    }, 1000);
};

function asincrono2(apellido, mycallback){
    setTimeout(function(){
        console.log("diego  " + apellido);
        mycallback();
    },1500);
}

function fight(callback){
    setTimeout(function(){
        console.log("ia ia ia ia pum pum pum");
        callback();
    },1500)
    
}

function fighting(vs,callback){
    if(vs > 0){
        fight(function(){
            fighting(--vs,callback)      
        })  
    }else{
        callback();
    }
}




//funcion callback
console.log("begining the fight...");
asincrono("mora" ,function(){
    fighting(3, function(){
        asincrono2("mora",function(){
            console.log("ending figthing....")

        })       
    })
})





