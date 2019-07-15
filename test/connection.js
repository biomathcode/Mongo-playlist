const mongoose = require('mongoose');

//connection to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function(){
    console.log('connection is stabilized, make fireworks...')
}).on('error',function(error){
    console.log("connection error".error);
});