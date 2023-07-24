/*
function demo1(){
    console.log('demo3');
}

function demo2(){
    console.log('demo1');
    demo3()
}

function demo3(){
    console.log('demo2');
    demo1() 
}
*/ 
/*
function demo(x,y,z=10){
    console.log(`Result X: ${x}`);
    console.log(`Result Y: ${y}`);
    console.log(`Result Z: ${z}`);
}
demo(12,true,15)
*/

/*
function check(token){
    if (token==='aabbcc') return true;
    else 
        return false;
}
let result =check('aabbcc');

console.log(result);
*/

/*
// Arrow function | => return
const demo = (a,b) => a+b
let x = demo(10,5)
console.log(x);
*/

/*
const demo = (a,b) => {
    if (a>b){
        return a
    }
    else {
        return b
    }
}

let x = demo(10,5)
console.log(x);
*/
/*
let user1Name = 'Elxan'
let user1Age = 19
let user1Gender = 'Male'
let user1Salary = 6700
*/

/*
const user1 ={
    name: 'Elxan',
    surname: 'Meherremli',
    age: 12
}
const user2 = {
    name: 'Fatima',
    surname: 'Ehmedova',
    salary : 2200
}
const user3 = {
    name: 'Jabbar',
    surname: 'Jabbarli',
    isOrtaliq: true
}
const users = [user1, user2, user3]

console.log(users[2].name);
*/

/*
const cars = [
    {
        model : 'BMW XS',
        price : 60000,
        fuel : [ 'diesel', 95, 98]
    },
    {
        model : 'Hundai Grandeur',
        price : 33000,
        fuel : [ 92, 95, 100]
    },
    {
        model : 'Mercedesn CLS63', 
        price : 45000,
        fuel : [ 92, 98, 102]

    },
]
    console.log(cars[2].fuel[2]);
*/

/*
console.log( `roomCount: ${home1.roomCount}`);
console.log( `area: ${home1.area}`);
console.log( `price: ${home1.price}`);
*/

/*const home1 = {
    roomCount : 4,
    area : 120,
    price : 200000,

    info(){ // функцию называют методом 
        console.log(`----- Home info -----`);
        console.log( `Room Count: ${this.roomCount}`);
        console.log( `Room Area: ${this.area}`);
        console.log( `Room Price: ${this.price}`);
        console.log(`----------------------`);
    }
}
home1.info()*/









