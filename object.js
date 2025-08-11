/** Singleton Object */

let tinderObject= new Object();


/** Object Liters */

let userObject= {}

/** Symbol Declaration */

const mySym= Symbol("key1");

const customerUser= {
    "name":"Dipesh",
    email:"dipesh@123gmail.com",
    [mySym]:"myKey1"
}
// Object.freeze(customerUser)
customerUser.name="Shivansh";
// console.log(customerUser[mySym])
// console.log(customerUser["email"]);
// console.log(customerUser);

const obj1={
    name:"deepak",
    email:"abc@gmail.com",
    fullName:"deepak Kumar singha"
}

const obj2={
    name:"viashnav",
    email:"vstu@gmail.com",
    fullName:"aman deep kaur"
}

// console.log(obj1);
// console.log(obj2);
console.log(Object.assign({},obj1,obj2))
