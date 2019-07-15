const assert = require('assert');
const MarioChar = require('../models/mariochar')
//Describetest for the mocha
describe('Deleting records', function(){
    var char;
    beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario',
            weight:''
        });
    
        char.save().then(function(){
            done();
        });
    })
    //Create tests
    it('delete one record from the database', function(done){
            MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
                MarioChar.findOne({name: 'Mario'}).then(function(result){
                    assert(result=== null);
                    done();
                })
            })
        })
    
    });