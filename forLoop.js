for (let i = 0; i <=10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best number");
        
    }
    console.log(element);  
}

//for(let i=0; i<=10; i++){
//    console.log(`Outer loop value : ${i}`);
//    for (let j = 0; j <=5; j++) {
//        console.log(`Inner loop ${j} and inner ${i}`);  
//    }
//    
//}

for (let i = 1; i <=10; i++) {
    console.log(i);
    for (let j = 1; j <=i; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
    
}

function table(num){
    console.log(`table of ${num}`);
    for (let i = 1; i < 10; i++) {
        console.log(`${num} * ${i} = ${i*num}`);      
        
    }
}
table(5)

const arr=["banana", "mango", "apple","papaya"]

for (let index = 0; index <arr.length; index++) {
    const element = arr[index];
    console.log(element);
}
console.log("reverse", arr.reverse());
//console.log("allpabet according " , arr.sort());
console.log("accept inter argument", arr.at(1));
const res=arr.toReversed()
console.log(res);

for (let val = 1; val <=10; val++) {
    console.log(val);
    if (val==5) {
        continue     
    }

    
}
for (let index = 0; index <10; index++) {
    if(index==8){
        break
    }
    console.log(index);
    
    
}
