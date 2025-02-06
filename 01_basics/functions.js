function singhappybirthday(){
    console.log("happy birthday......");
}
singhappybirthday();
singhappybirthday();
singhappybirthday();
singhappybirthday();



function twoplusfour(){
    return 2+4;
}
console.log(twoplusfour());



function add(a, b) {//a and b are parameters
    return a + b;
}

console.log(add(2, 3));  // Output: 5    2 3 are arguments value pass ho ri hai agar yahan values pass na karun toh yeh hoga NaN output


//agar 3 numbers ka sum hai toh there will be three parametrs and the argumnets will also be three agar three ki jagah you will pass 2 agrumnets then also the output would be NaN



function iseven(n){
    if(n%2==0){
        return true;
    }return false;
}
iseven(4);

function firstchar(string){
    return string[0];
}
console.log(firstchar("abc"));


function findtarget(array,target){
    for(let i=0;i<array.lrength;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1;
}
const myarr=[1,2,3,4,5]
const ans=findtarget(myarr,4);
console.log(ans);

//these all above are function declaration
//but when we assign a function ina variable then that is called function expression
const singhappybirthday=function(){
    console.log("happy birthday to you...");
}


const iseven=function(num){
    return n%2==0;
}
console.log(iseven(4));
//rest will be done as same



// ARROW FUNCTIONS
const singhhappybirthday=()=>{
    console.log("HBD");
}
singhhappybirthday();


const sum3num=(num1,num2,num3)=>{
    return num1+num2+num3;
}
const answ=sum3num(2,3,4);
console.log(ans);


const iseven=number=>number%2==0;
console.log(iseven(6));


//Function Hoisting
hello();
function hello(){
    console.log("hello world");
}
//if i will call it before this function it would work 
//this is only possible in case of function declaration not in case of function expression
//neither with arrow function


console.log(hello);//nhi chalega output undefined jab let ho
var hello="hello world";
console.log(hello);//will work

//using var
console.log(hello); // Output: undefined
var hello = "hello world";
console.log(hello); // Output: hello world


// using let and const
console.log(hello); // Throws ReferenceError: Cannot access 'hello' before initialization
let hello = "hello world";
console.log(hello); // Output: hello world


console.log(hello); // Throws ReferenceError: Cannot access 'hello' before initialization
const hello = "hello world";
console.log(hello); // Output: hello world


//functions inside function
const outerFunction = () => {
    const innerFunction = () => {
        console.log('Inner function executed.');
    };

    console.log('Outer function executed.');
    innerFunction();
};

outerFunction();

// Output:
// Outer function executed.
// Inner function executed.
 

//in object mostly for in loop is used

//lexical scope
// const outerVariable = 'I am outside!';
function outerFunction() {
    const outerVariable = 'I am outside!';

    function innerFunction() {
        const outerVariable="value";
        console.log(outerVariable); // Accessing variable from outer scope
        console.log("inside function",outerVariable);//output is inside function value
        //agar outer variable yahan pe nhi hai toh yeh output mein uthaeyga outer function wala outerVariable ... output will be inside function i am outside
        //agar yehi function se pehle hoga tab bhi yeh chalega
    }

    innerFunction();
}

outerFunction(); // Output: I am outside!




{
    //block 1
    //  let and const isssi block mein access hoskta hai kissi aur block mein nhi known as block scope
}

{
    //block2 var can be accessed outside this function also known as functional scope
}

//default parameters
function add(a, b = 0) {
    return a + b;
  }
  
  console.log(add(5, 3)); // Outputs: 8
  console.log(add(10));   // Outputs: 10 (since default value for b is 0)
  


  //rest parameters
  function addall(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
  }
  const a=addall(1,2,3,4,5,6,7);
  console.log(a);


//   Parameter destructuring in JavaScript allows you to extract values from objects or arrays and assign them to variables in a concise way
//used in object
//used in react
//obj. use karne ki zarurat nhi
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  const user = { name: 'Alice', age: 30 };
  displayUser(user); // Outputs: Name: Alice, Age: 30
  

//CALLBACK FUNCTION
//   A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are often used to handle asynchronous operations like fetching data from an API, reading files, or handling events.
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet('Alice', sayGoodbye);
  // Outputs:
  // Hello, Alice!
  // Goodbye!
  

  //FUNCTION RETURNING FUNCTION
  function myFunc() {
    function hello() {
      return "hello world";
    }
    return hello;
  }
  
  const an = myFunc();
  console.log(an()); // Outputs: hello world
  
//   In this corrected version:

// myFunc defines an inner function hello that returns "hello world".

// myFunc then returns the hello function.

// const ans = myFunc(); assigns the returned hello function to the ans variable.

// console.log(ans()); calls the hello function through the ans variable and logs the returned value.


// The return hello; statement inside the myFunc function is used to return the hello function itself, not its result. This allows you to call the hello function later, after the myFunc function has already completed its execution.
// When myFunc is called, it defines the hello function and then returns the hello function. The const ans = myFunc(); line assigns the returned hello function to the variable ans. This means ans now holds a reference to the hello function.

// When you call ans() later, it actually calls the hello function and returns its result, which is "hello world".

// In summary, return hello; is used to return the function itself, so you can call it later after the outer function (myFunc) has finished executing. It’s a way to create higher-order functions and achieve more flexibility in your code. 😊