//if  -> bloku her zaman  oxunur ve sert dogrudursa block isleyir
// else -> bloku false olduqda isleyir
/*
if(false){
    console.log('if bloku isledi');
}

else{
    console.log('else bloku isledi');
}
*/
/*
let a = 6 , b = 10

if (b%a == 4) {
    console.log('if bloku isledi');
}
else{
    console.log('else bloku isledi');
}
*/
/*
let username = 'admin', password = 'admin123', isAdmin = true
if ((username == 'admin' && password == 'admin123') || isAdmin === true) {
    console.log('if bloku isledi');
}
else{
    console.log('else bloku isledi');
}
*/

/*
let inputUsername = prompt('Enter username');
let inputPassword = prompt('Enter password');

if(inputUsername === 'zaza' && inputPassword === '123'){
    console.log('Welcome');
}
else {
    console.log('Try again');
}
*/

/*
//Elektron kassa
//Cola - 1.5
//KitKat - 1.8
//Sarikiz - 0.9
//Milla - 1.20
//Magnum -3.60

// Kassa her mehsuldan nece dene alaciqini sorusur
// Misa - Nece dene cola alacaqsiniz - Qiymet- 1.50
// ve bu formada diger mehsullari da sorusun
// Hamis


let colaPrice = 1.50, KitKatPrice = 1.80, SarikizPrice = 0.9, MillaPrice =1.20, MagnumPrice = 3.6

let colaAmount = +prompt(`Nece dene cola alacaqsiniz? -Qiymet: ${colaPrice.toFixed(2)}azn`)
let KitKatAmount = +prompt(`Nece dene KitKat alacaqsiniz? -Qiymet: ${KitKatPrice.toFixed(2)}azn`)
let SarikizAmount = +prompt(`Nece dene Sarikiz alacaqsiniz? -Qiymet: ${SarikizPrice.toFixed(2)}azn`)
let MillAmount = +prompt(`Nece dene Milla alacaqsiniz? -Qiymet: ${MillaPrice.toFixed(2)}azn`)
let MagnumAmount = +prompt(`Nece dene Magnum alacaqsiniz? -Qiymet: ${MagnumPrice.toFixed(2)}azn`)

let result = colaPrice*colaAmount +  KitKatPrice*KitKatAmount + SarikizPrice*SarikizAmount + MillaPrice*MillAmount + MagnumPrice*MagnumAmount

alert(`Umumi hesab ${result.toFixed(2)}azn`)

let card = +prompt ('Zehmet olmasa bank kartini daxil edin')

if(card>=result){
    card-=result
    alert(`odenis ugurla yerine yetirildi, Qaliq ${(card).toFixed(2)}`)
}
else{
    alert('kartda kifayet qeder vwsait yoxdur')
}

console.log(card);
*/


/*
let inputEded1 = +prompt ('eded yaz')
let inputEded2 = +prompt ('eded yaz')

console.log(inputEded1 * inputEded2);
console.log(inputEded1 + inputEded2);
*/

/*
let num =10

if (false){
    console.log('if');
}
 else if (false){
    console.log('else if 1');
}
 else if (true){
    console.log('else if 2');
}
else{
    console.log('else');
}
*/

/*
let x = 45
if (x>10 && x<20){
    console.log('ortaliq 1 ');
}
else if (x>20 && x<30){
    console.log('ortaliq 2 ');
}
else if (x>30 && x<40){
    console.log('ortaliq 3 ');
}
else{ x

}
*/

//Home_work


/*
let currentDay = 5

if (currentDay === 1) {
  console.log("Today is Monday");
}
else if (currentDay === 2){
    console.log("Today is Tuesday" );
}
else if (currentDay === 3){
    console.log("Today is Wednesday" );
}
else if (currentDay === 4){
    console.log("Today is Thursday" );
}
else if (currentDay === 5){
    console.log("Today is Friday" );
}
else{
    console.log("have a nice weekend!");
}
*/



/*
let randomNumber = 100

if (randomNumber > 7){
    console.log('number greater is than seven');
}
 else if (randomNumber < 7){
    console.log('number is less than seven');
}
else{
    console.log(' number is seven');
}
*/



let userCode = prompt ('Write your code here')
if (userCode === '77777'){
    alert ('Welcome')

}
else{
    alert ('Error. Tpy again')
}
alert('Bye')









