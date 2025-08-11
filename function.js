/**
 Parameter---> at the time of function declaration 
 Argument---->at the time of function call
 */
// console.log(add(5))

//  function add(number){
//     return number+1;
//  }
// console.log(addTwoNumber(5));

//  const addTwoNumber=(number)=>{
// return number+1;
//  }

//  function youtube(user)
//  {
//    let greeting=function(){
//       console.log(`${user} is loggedIn`);
//    }
//    greeting()
//  }

//  youtube("deepak");

// const DevTeam={
//    name:"deepak",
//    desig:"Dev",
//    greeting:function(){
//       console.log(`${this.name} worked in ${this.desig} team`)
//       console.log(this);
//    }
// }
// DevTeam.greeting();


// function printThis(){
//    let user="deepak";
//    console.log(this.user);
//    console.log(this);
   
// }

// printThis();

// const printMessage=function(){
//    let userName='deepak';
//    console.log(this.userName);
//    console.log(this);
// }
// printMessage();

// const add=()=>console.log(this);
// add();

/**
 * In Object this represent the current execution context
 * But in function (anonymus function and regular function) it provides global object.
 * In case of Arrow function this provides empty Object ({}).
 */
 