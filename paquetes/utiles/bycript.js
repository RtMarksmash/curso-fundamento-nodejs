const bcrypt = require('bcrypt');

const password = 'mark1234';

bcrypt.hash(password,5, function(error, hash){
    console.log(hash);

    bcrypt.compare(password, hash, function(error, res){
        console.log(res)
    })

});