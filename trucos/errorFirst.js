
function asincrona(callback){
    setTimeout(()=>{
        try{
            let a = 3 + x;
            callback(null , a)

        }catch (e){
            callback(e)

        }
    
    }, 2000)
};


asincrona((error, dato) =>{
    if(error){
        console.error('tenemos un error true');
        console.error(error)
        return false
    }

    console.log('todo ha ido bien' + dato)
})