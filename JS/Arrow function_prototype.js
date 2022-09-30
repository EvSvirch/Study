function yolochka1() { // empty function, will work without a variable
    let mass = 'Hello_1'
    console.log(mass)
} yolochka1()


// Arrow function
let yolochka2 = () => {let mass2 = 'Hello_2'; console.log(mass2)}
yolochka2()

let f22 = (t11, t22) => {console.log('Sum ' + t11 + t22)}
f22(5, 6)


// Arrow function, where the variables are inserted at the function call
let t1 = 30
let t2 = 20

let t3 = 30
let t4 = 40

let f33 = (t1 > t2) ? 
    (tt1, tt2) => console.log('order ', tt1 + tt2) : 
    (tt1, tt2) => console.log('order ', tt1 - tt2)

f33(t3, t4) // tt1 / tt2 are taken from these variables


//Prototypes - create your own methods/properties
function yolochka33(){}

yolochka33.prototype.fast = function(){
    console.log('FAST!!')
}

yolochka33.prototype.green = function(sun, co2){
    console.log('Green == ', sun, ' + ', co2)
}

yolochka33.prototype.shishki = function (){
    console.log('shishki == yolki')
}

let forest = new yolochka33()

forest.fast()
forest.green(4500, 50)
forest.shishki()
