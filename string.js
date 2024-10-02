"use strict";

const name="prachi";
const lastname="srivastava";

console.log(`Hello js , I am ${name}`);

const gameName= new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.indexOf('t'));
console.log(gameName.charAt(2));
console.log();

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const bal1=123.6999
console.log(bal1.toPrecision(4));

//math function

console.log(Math);
console.log(Math.floor(4.23));
console.log(Math.ceil(4.32));
console.log(Math.round(4.32));
console.log(Math.abs(-9));   /// positive val

console.log(Math.max(4,3,2,5));
console.log(Math.min(4,3,2,5));
console.log(Math.cos(0));
console.log(Math.random());
console.log((Math.random()*10)+ 1);
console.log((Math.random()*10)+ 1);
console.log((Math.random()*10)+ 1);
console.log((Math.random()*10)+ 1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min)

// date and time 

let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate= new Date(2023,10,24,5,3)
console.log(myCreatedDate.toLocaleString());

let cretedd= new Date("2020-02-23")
console.log(cretedd.toLocaleString());

let myTimeStamp=Date.now()
console.log(cretedd.getTime());




















