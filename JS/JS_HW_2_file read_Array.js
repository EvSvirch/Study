// There is a file with arrays of JSON objects. Each object is an identification card of a person. 
// We only need to store unique values in this array. Implement a function that will do the job.

const fs = require('fs')                    
let file = fs.readFileSync('JS_HW_2_Array.json')    
let personFile = JSON.parse(file)          

function person (person) {
    for (i = 0; i < person.length - 1; i++) {             
        for (i2 = person.length - 1; i2 > i; i2--) {      
            if (person[i].username == person[i2].username && person[i].email == person[i2].email) {   
                person.splice(i2,1)
            }
        }
    }

    for (k1 = 0; k1 < person.length; k1++) {               
        console.log(person[k1].name, person[k1].username)
    }
}

person(personFile)


// Option 2
const fs = require('fs')                    
let file = fs.readFileSync('JS_HW_2_Array.json')    
let personFile = JSON.parse(file)           


let strArr = personFile.map(item => JSON.stringify(item))   
let setArr = new Set(strArr)    
let Arr = Array.from(setArr)   
let resJSON = Arr.map(item => JSON.parse(item))  
//let resJSON = Array.from(new Set(personFile.map(item => JSON.stringify(item)))).map(item => JSON.parse(item)) // same in one line
console.log(resJSON)


// Option 3

const fs = require('fs')
let file = fs.readFileSync('JS_HW_2_Array.json')
let personFile = JSON.parse(file)

function person(person) {
    console.log('Number of elements on the input =', person.length)
    for (i = 0; i < person.length - 1; i++) {
        for (i2 = (person.length - 1); i2 > i; i2--) {
            console.log('Compare', person[i].name, 'numbered', i, 'numbered', i2, person[i2].name)
            if (person[i].username == person[i2].username && person[i].email == person[i2].email) {
                person.splice(i2, 1)
            }
        }
    }

    console.log('\n', 'Total length of array =', person.length, '\n')
    for (k1 = 0; k1 < person.length; k1++) {
        console.log(person[k1].name, person[k1].username)
    }
}

person(personFile)
