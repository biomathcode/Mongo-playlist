const assert = require('assert');
const MarioChar = require('../models/mariochar')
//Describetest for the mocha
describe('Saving records', function(){
    //Create tests
    it('Saves a record to the database', function(done){
        var char = new MarioChar({
            name: 'Mario',
            weight:''
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });
});