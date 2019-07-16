const assert = require('assert');
const moongoose = require('mongoose');
const Author = require('../models/author');

//Describe our tests
describe('Nesting records', function(){
    beforeEach(function(done){
        moongoose.connection.collections.authors.drop(function(){
            done();
        })
    })
    //Create tests
    it('Creating an author with sub-documents', function(done){
        const pat = new Author({
            name: 'Patrick Rothfuss',
            books:[{title:'Name of the Wind', pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                assert(record.books.length === 1);
                done();

            })
        });
    })
    it('Adds a book to an author', function(done){
        const pat = new Author({
            name: 'Patrick Rothfuss',
            books:[{title:'Name of the Wind', pages: 400}]
        });
        
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                //add a boook to the books array
                record.books.push({title: "Wise man's Fear", pages: 500});
                record.save().then(function(){
                    Author.findOne({name:'Patrick Rothfuss'}).then(function(result){
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })
})