"use strict"

console.log("chai aur code");

const accountID= 123
let accountEmail="shubhi@gmail.com";
var accountPass= "12345";
let accountcity="jaipur";

//   accountID=454    it can't changed because this is constable variable
console.log(accountID);
console.table([accountID,accountEmail,accountPass,accountcity])

let num="1122"

console.log(typeof num);

let checkval=Number(num)
console.log(checkval, typeof checkval);

// ****************operations************************

let value=3
let negVal=-value
console.log(negVal);

let str1="Prachi";
let str2=" Saxena";
console.log(str1+str2);
console.log(+true);
console.log(+"");


const score=123;
const isLogginID=false;
const outsideTemp=null;
let userEmail;

console.log(typeof isLogginID, typeof outsideTemp);

const ida=Symbol('122');
const anotherID=Symbol('122')
if (ida===anotherID) {
    console.table([ida,anotherID])
}
else{
    console.error("not matched data id");
    
}
const bigInt=6364665666666n
console.log(typeof bigInt);

//reference data type

//Array, objects, functions 

const arr=["mango", "Apple", "banana","guwawa"]
console.log(typeof arr);
console.log(Array.isArray(arr));

// stack memory (primitive) and heap memory (non-premitive)

let ytc="abc@gmail.com";

let anotherName=ytc;
anotherName="chaiaurcode";

console.log(ytc);

console.log(anotherName);

let obj={
    id:23,
    email:"user@gmail.com",
}

let obj2=obj;
obj2.email="aman@gmail.com";

console.log(obj.email);
console.log(obj2.email);

















