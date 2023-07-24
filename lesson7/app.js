//let users = [ 'Zahid', 'Jabbar', 'Elxan' , 'Fatya']

//for ( let i = 0; i < users.length; i++){
    //console.log(users[i]);
//}

//function name(){
//    console.log('salam');
//}
//name(0)

//function demo (a,b){
//    console.log(a+b);
//}
//demo(5,10)

function checkUser (token){

    if (token === 'a1b2c3'){
        return true
    }
    else{
        return false
    }
}
 let result = checkUser ('a1b2c3')

 console.log(result ? 'welcome' : 'try again ') ;

