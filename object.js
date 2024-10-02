// singleton

//object literals

const JsUser={
    name:"Ankita",
    age:18,
    lovations:"Jaipur",
    email:"prachi@gmail.com",
    isLogginIn:false,
    lastLogginDays:["Monfay","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["name"]);

const tinder= new Object()
tinder.udername="Aman";
tinder.age=23;
tinder.email="shubhanshi@gmail.com"
console.log(tinder);

const anotherObj={
    fullname:{
        userfullName:{
            fname:"aman",
            lname:"rastogi",
        }
    }
}

console.log(anotherObj.fullname.userfullName.fname);

const objMain={ 1:"a", 2:"b"}
const obj3={ 3:"a", 4:"b"}

console.log({...obj3,...objMain});
const assignObj= Object.assign({},obj3,objMain)
console.log(assignObj);





