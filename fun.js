// function
"use strict"
function sayMyname(num1=0,num2=0){
    console.log("heloo");
    console.log(num1+num2);
    
    
}
sayMyname(3,4)
sayMyname()
function secFun(num1,num2){
    let res= num1+num2;
    //console.log(res);   /// undefined so using return
    return res
    
}
const mainRes=secFun(3,5)
console.log(mainRes);

function loginUserMassge(username){
    return `${username} just logged in`
}

console.log(loginUserMassge("kanak"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,2000,300,700));

function handleObj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObj({
    username:"rohan",
    price:399
})

if (true){
    let a=20;
    const b=10;
    var c=33
}
//console.log(a);
//console.log(b);
console.log(c);

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
    
}
one()
function addOne(num){
    return num+1;
}


