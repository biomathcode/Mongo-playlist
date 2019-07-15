const mongoose = require('mongoose');

//es6 promises
mongoose.Promise = global.Promise;

//Connect to the db before tests run
before(function(done){
    //connection to mongodb
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function(){
        console.log('connection is stabilized, make fireworks...')
        done();
    }).on('error',function(error){
        console.log("connection error".error);

    });
})
//Drop the characters collection before each test
beforeEach(function(done){
    ///Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})
