// array

const myArr=[0,1,2,3,4,5,6,7,8]
console.log(myArr);

const myArr2= new Array(22,23,24,25,26)
console.log(myArr2[0]);

// @Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(0));
console.log(myArr.indexOf(1));

console.log(myArr.join());
console.log(typeof myArr);

// slice, splice

console.log("A", myArr);

const myn1=myArr.slice(1,3)
console.log("B", myn1, myArr);

const spliceArr=myArr.splice(1,3)
console.log("C", spliceArr, myArr);









