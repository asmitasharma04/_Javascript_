//reference type..all refernce type are known as object
//arrays are ordered collection of items ..ordered means eska kuch index number hai

let fruits=["aaple","mango","grapes"];
console.log(fruits);
console.log(fruits[2]);
fruits[1]="banana";
console.log(fruits);
console.log(typeof fruits);
let number=[1,2,3,45];
console.log(number);
//We can store any type of data type in it

let mixed=[1,2,3.5,"string",null,undefined];
console.log(mixed);

//to check whether it is array or not
console.log(Array.isArray(fruits));

let obj={};  //this is known as object literal
console.log(Array.isArray(obj));//false


//array push pop
//last mein add karna use Push karna
fruits.push("pineapple");
console.log(fruits);
fruits.pop();//will remove from last
console.log(fruits);


//starting mein element add karna use unshift
fruits.unshift("banana");
console.log(fruits);

//shift : starting se element ko remove karega
fruits.shift();
console.log(fruits);

let removedfruit=fruits.shift();
console.log(fruits);
console.log(`removed fruit is ${removedfruit}`);

//push and pop are fast than shift and unshift

//primitive VS reference type
let num1=6;
let num2=num1;
console.log("value is num1 is", num1);
console.log("Value of num2 is", num2);
num1++;
console.log("value is num1 is", num1);
console.log("Value of num2 is", num2);
//yeh primitive type tha tabhi value change karne ke badd bhi value change nhi huyi

//reference type :array is refernce type
let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("array1",array1);
console.log("array2",array2);
//here change ho gya dono mein

//primitive got stored in stack //because primitive type not need more space to get stored
//sare variables alag alag jagah pe store hote hain in stack toh agar kissi ek mein change kiya toh it would not affect other
//reference type
//array1 jo hai woh heap mein store ho jayega aur stack mein array1 ka pointer hoga aur pointer ke pass heap ka address hoga
//array2 ka bhi pointer banega and esko array1 ka hi address milega 
//means dono ke pass same address hai toh jo changes ek mein hogi that will refelect in another too

//HOW TO CLONE A ARRAY? MEANS HOW TO MAKE COPY OF A ARRAY
// let a1=["item1","item2"];
// let a2=a1;
// console.log(a1===a2);

//now i want to make a copy of array such that the change in one would not reflect in another
// let a1=["item1","item2"];
// let a2=["item1","item2"];
// a1.push("item3");
// console.log(a1===a2);
// console.log(a1);
// console.log(a2);

//but the above method is not efficient for large number of elements
//so use slice method//slice hume given index se lekar last tak ki values deta hai

// let a1=["item1","item2"];

// let a2=a1.slice(0);
// a1.push("item3");
// console.log(a1===a2);
// console.log(a1);
// console.log(a2);

//second method is 1 naya array empty banao aur usmein concat karo array 1ko
// let a1=["item1","item2"];
// let a2=[].concat(a1);
// a1.push("item3");
// console.log(a1===a2);
// console.log(a1);
// console.log(a2);

//there is one new way called spread operator   esmein ... lagte hain
let a1=["item1","item2"];
// let a2=[].concat(a1);
// let a2=[...a1];
let a2=[...a1,"item4","item5"]
a1.push("item3");
console.log(a1===a2);
console.log(a1);
console.log(a2);
//the fastest is slice method

//FOR LOOP
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


let fruits2=[];
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

//if we use const in arrays then also we can change, modigy , later  the array because of the reference type of array but yeh change sirf push anf pop use karke hi ho sakta hai 
//agr issi ko dobara likhenge like fruits=["apple","grapes"]; //esse yeh change modify nhi hoga
//but in case of let yeh bhichange alter modify ho jata
//mostly const is used


//while loop
// Declare an array
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Initialize the index variable
let i = 0;

// Use a while loop to iterate through the array
while (i < fruits.length) {
    console.log(fruits[i]); // Print each element to the console
    i++; // Increment the index
}


//for of loop
// Declare an array
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];


// Use a for...of loop to iterate through the array
for (let fruit of fruits) {
    console.log(fruit); // Print each element to the console
}
 

//for in loop
// Declare an array
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Use a for...in loop to iterate through the array
for (let index in fruits) {
    console.log(fruits[index]); // Print each element to the console
}


// Key Differences:
// Iteration:

// for...of loops through values.

// for...in loops through keys (indexes).

// Use Case:

// Use for...of when you want to work directly with array elements.

// Use for...in when you need to work with the keys (indexes) or properties of an object.

// Output:

// for...of is more suited for arrays and other iterable collections.

// for...in is more suited for objects.

// In most cases, when dealing with arrays, for...of is preferred as it provides a more straightforward way to access the elements.


//ARRAY DSETRUCTING
// Array destructuring is a convenient way to extract values from arrays and assign them to variables in a more concise and readable manner. It allows you to unpack the elements of an array into individual variables with a single line of code.

// Declare an array
let fruits = ['apple', 'banana', 'cherry'];

// Use array destructuring to assign values to variables
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // Prints: apple
console.log(secondFruit); // Prints: banana
console.log(thirdFruit); // Prints: cherry


// Skipping Elements:

// You can skip elements in the array by leaving empty spaces in the destructuring pattern.
let fruits = ['apple', 'banana', 'cherry', 'date'];
let [firstFrui, , thirdFrui] = fruits;

console.log(firstFrui); // Prints: apple
console.log(thirdFrui); // Prints: cherry


//using slice
// Declare an array
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Use the slice method to get a portion of the array
let slicedFruits = fruits.slice(1, 4); // Extract elements from index 1 to index 3 (not including index 4)

// Use array destructuring to assign values to variables
let [secondFru, thirdFru, fourthFruit] = slicedFruits;

console.log(secondFru); // Prints: banana
console.log(thirdFru); // Prints: cherry
console.log(fourthFruit); // Prints: date


//usig spread operator 
// Declare an array
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Use array destructuring along with the spread operator
let [firstFr, ...remainingFruits] = fruits;

console.log(firstFr); // Prints: apple
console.log(remainingFruits); // Prints: ['banana', 'cherry', 'date', 'elderberry']
