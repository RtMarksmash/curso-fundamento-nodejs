const http = require('http')

http.createServer(router).listen(3000);

function router(req,res){
    console.log('mi primer servidor')
    console.log(req.url)

    switch(req.url){
        case '/community':
            res.write('the best community is smash cucuta');
            res.end();
            break
        
        default:
            res.write('404 dont understand , what do you want')
            res.end()
            break
    }
}



    /* // escribiendo cabecera 
    res.writeHead(201, { 'content-type': 'text/plain'} )


    // escribir
    res.write('mi primer servidor en nodejs')

    res.end() */
