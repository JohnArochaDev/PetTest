// give me some initial pets in the database
// which will make it easy to test my routes

// this file will be run with a script command in the terminal
// we will set that script command up in package.json
// the command will be `npm run seed`

const mongoose = require('mongoose')
const Pet = require('./pet')
const db = require('../../config/db')

const startPets = [
    { name: 'Sparky', type: 'dog', age: 2, adoptable: true},
    { name: 'Leroy', type: 'dog', age: 10, adoptable: true},
    { name: 'Biscuits', type: 'cat', age: 3, adoptable: true},
    { name: 'Hulk Hogan', type: 'hamster', age: 1, adoptable: true}
]

// first, establish a connection to the db
// then remove all pets that do not have an owner
// then, insert all the starter pets from the startPets array
// then, most importantly CLOSE the connection to the db

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => {
        Pet.deleteMany({ owner: null })
            .then(deletedPets => {
                console.log('deleted pets in seed script: ', deletedPets)

                Pet.create(startPets)
                    .then(newPets => {
                        console.log('new pets added to db: \n', newPets)
                        // VERY IMPORTANT
                        mongoose.connection.close() 
                    })
                    .catch(error => {
                        console.log('an error has occurred: \n', error)
        
                        // VERY IMPORTANT
                        mongoose.connection.close() 
                    })
            })
            .catch(error => {
                console.log('an error has occurred: \n', error)

                // VERY IMPORTANT
                mongoose.connection.close() 
            })
    })
    .catch(error => {
        console.log('an error has occurred: \n', error)

        // VERY IMPORTANT
        mongoose.connection.close() 
    })