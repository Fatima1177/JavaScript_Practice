// array-de oxsar tipli melumatlar ssaxlanilir
// misal: users, cars, posrs, products
// array -> index -> []
// object -> property ->noqte

/* interv
const user1 = {
    name : "John",
    age: 12
}
//console.log(user1.name); 1
//console.log(user1['age']); 2

// let name = user1.name | evezedici asagida 3
let {name,age} = user1

console.log(age);

console.log(`username: ${username}, password: ${password}`);

*/

/*
// level 2
let username = prompt('enter username...')
let password = prompt('enter password...')

if(username === 'ehmed' && password === 'ehmed123'){
    alert('welcome ehmed, hi barbie')
}
else{
    alert("try again, but u can't")
}

*/

//level 5
/*const users = [
    {
        username: 'ehmed',
        password: 'ehmed123'
    },
    {
        username: 'nezrin',
        password: 'nezrin777'
    }
]

for(let i = 0; i<2; i++) {
    console.log(users[i].password);
}*/

const cars = [

    {
        img: 'Photo1',
        price: 20000,
        vendor: 'Nissan',
        model: 'Micra',
        description: {
            year: 2015,
            engine: 1.5,
            kilometer: 25000
        },
        location: 'Baki',
        date: 'bugun',
        time: '10:40'
    },
    {
        img: 'Photo2',
        price: 120000,
        vendor: 'BMW',
        model: '540',
        description: {
            year: 2020,
            engine: 3.0,
            kilometer: 37000
        },
        location: 'Seki',
        date: 'sabah',
        time: '24:00'

    }
]

console.log(cars[1].price)




