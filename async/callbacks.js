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

console.log("begining...");
asincrono("mora" ,function(){
    asincrono2("mora",function(){
        console.log("ending...");
    })
   
});


