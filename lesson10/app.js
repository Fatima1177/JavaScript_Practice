//function sayHello(){
//    console.log('salam');
//}
//sayHello()

// setInterval -> funcsialarin mueyyen vaxt erzinde tekrar islemesidir

//setInterval(sayHello,3000)

//setTimeout -> funcsialarin mueyyen vaxt sonra islemesidir

//setTimeout(sayHello,5000)

//setTimeout(()=>{
//    console.log('salam');
//},3000)

//setTimeout(()=>{
//    console.log('salam');
//},6000)4

const numbers = [12, 45, 89, 55, 67]

// for( let i=0; i<numbers.length; i++ ){
//     console.log(numbers[i]);}

//Higher order functions
//console.log('\n');


/*numbers.forEach((item,index)=>{
    console.log(`Element: ${index+1}: ${item}`);
})*/


// Foreach

/*
let sum = 0

numbers.forEach((item)=>{
    //sum = sum + item
    sum += item
})
console.log(sum);
*/
/*
let arr = [];
numbers.forEach((item)=>{
    if(item>50 && item<80){
        arr.push(item);
    }
})
*/

//console.log(arr);

const arr2 = numbers.filter(item=> item > 50 )
console.log(arr2);

const result = numbers.find(item=> item > 50)
console.log(result);



