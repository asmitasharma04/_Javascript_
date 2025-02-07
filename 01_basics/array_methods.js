//forEach is optional  nya array nhi banta hai
const numbers=[4,2,3,5];
function mul(number,index){
    console.log("index is", index);
    console.log(`${number}*2=${number*2}`);
}
// for(let i=0;i<numbers.length;i++){
    
//     mul(numbers[i],i);
// }//instead of this we will use forEach 
numbers.forEach(mul);


const users=[
    {firstname:"Asmita",age:23},
    {firstname:"Asmi",age:23},
    {firstname:"Asmu",age:23},
    {firstname:"Asmitaaa",age:23},
]

users.forEach(function(user){
    console.log(user.firstname,index);
});

users.forEach((user,index)=>{
    console.log(user.firstname,index);
})

for(let user of users){
    console.log(user.firstname,index);
}



//MAP METHOD:it takes callback function as a input naya array return karta hai
// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Callback function to double each number
function doubleNumber(number) {
  return number * 2;
}

// Using map to create a new array with doubled values//naya array return karta hai
const doubledNumbers = numbers.map(doubleNumber);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//Filter method
//return true or false
//naya array banta hai
// An array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Callback function to filter out even numbers
function isEven(number) {
  return number % 2 === 0;
}

// Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]



//REDUCE METHOD
// The reduce method in JavaScript is used to execute a callback function on each element of an array, resulting in a single output value.
// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Callback function to sum up the numbers
function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

// Using reduce to calculate the sum of the numbers array
const totalSum = numbers.reduce(sum, 0);

console.log(totalSum); // Output: 15
 



//ASCII TABLE:
// 0 to 9 has value 48 to 57
// :  58
// ;   59
// <  60
// =   61
// >   62
// ?    63
// @    64

// A-Z  IS 65-90

// a-z= 97 to 125



//SORT
//original array mein change ho rha hai

//it takes arrays as strings not consider them as an numbers
// An array of numbers
const numbers = [5, 3, 8, 1, 2];

// Using sort to arrange numbers in ascending order
numbers.sort();

console.log(numbers); // Output: [1, 2, 3, 5, 8]
//this causes the above problem not always efficient so do the following


// An array of numbers
const numbers = [5, 3, 8, 1, 2];

// Using sort with a compare function to sort numbers in ascending order
numbers.sort((a, b) => a - b);
//for descending do b-a

console.log(numbers); // Output: [1, 2, 3, 5, 8]



// An array of product objects
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 600 },
    { name: 'Tablet', price: 400 },
    { name: 'Monitor', price: 300 },
    { name: 'Keyboard', price: 50 }
  ];
  
  // Using sort with a compare function to sort products by price in ascending order
  products.sort((a, b) => a.price - b.price);
  
  console.log(products);
  



  // An array of product objects
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 600 },
    { name: 'Tablet', price: 400 },
    { name: 'Monitor', price: 300 },
    { name: 'Keyboard', price: 50 }
  ];
  
  // Extract the prices into a separate array
  const prices = products.map(product => product.price);
  
  // Sort the prices array in ascending order
  const sortedPrices = [...prices].sort((a, b) => a - b);
  
  console.log('Original Prices:', prices);
  console.log('Sorted Prices:', sortedPrices);
  


  //Find method
  // An array of numbers
const numbers = [10, 20, 30, 40, 50];

// Callback function to find a number greater than 25
const isGreaterThan25 = number => number > 25;

// Using find to locate the first number greater than 25
const foundNumber = numbers.find(isGreaterThan25);

console.log(foundNumber); // Output: 30


// numbers is the original array.

// isGreaterThan25 is the callback function that takes a number and returns true if the number is greater than 25.

// The find method applies isGreaterThan25 to each element in numbers until it finds the first element that meets the condition. In this case, it finds 30 and returns it.

//jaise hi  pehla element millega it will return


// An array of product objects
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 600 },
    { name: 'Tablet', price: 400 },
    { name: 'Monitor', price: 300 },
    { name: 'Keyboard', price: 50 }
  ];
  
  // Callback function to find a product with a price greater than 500
  const isExpensive = product => product.price > 500;
  
  // Using find to locate the first product with a price greater than 500
  const foundProduct = products.find(isExpensive);
  
  console.log(foundProduct); // Output: { name: 'Laptop', price: 1000 }
  

  //every method
//   The every method in JavaScript is used to test whether all elements in an array pass a specified condition. It returns a Boolean value: true if all elements satisfy the condition, and false otherwise.

// An array of numbers
const numbers = [2, 4, 6, 8, 10];

// Callback function to check if a number is even
const isEven = number => number % 2 === 0;

// Using every to check if all numbers in the array are even
const allEven = numbers.every(isEven);

console.log(allEven); // Output: true



//SOME METHOD
// he some method in JavaScript is used to test whether at least one element in an array passes a specified condition. It returns a Boolean value: true if at least one element satisfies the condition, and false otherwise.

// An array of numbers
const numbers = [10, 20, 30, 40, 50];

// Callback function to check if a number is greater than 25
const isGreaterThan25 = number => number > 25;

// Using some to check if at least one number in the array is greater than 25
const hasNumberGreaterThan25 = numbers.some(isGreaterThan25);

console.log(hasNumberGreaterThan25); // Output: true




//FILL METHOD
// The fill method in JavaScript is used to change all the elements in an array to a static value from a start index to an end index. It returns the modified array. This method is very useful when you need to initialize an array with a specific value.
array.fill(value, start, end);
// value: The value to fill the array with.

// start (optional): The index at which to start filling. Defaults to 0.

// end (optional): The index at which to stop filling (not included). Defaults to the array's length.

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using fill to change elements from index 1 to 3 to 0
numbers.fill(0, 1, 3);

console.log(numbers); // Output: [1, 0, 0, 4, 5]


//SPLICE METHOD
// The splice method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements in place. It directly modifies the original array and returns an array of the removed elements.

array.splice(start, deleteCount, item1, item2, ...);

// start: The index at which to start changing the array.

// deleteCount: The number of elements to remove from the array.

// item1, item2, ... (optional): The elements to add to the array, starting at the start index.

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using splice to remove 2 elements starting from index 1
const removedElements = numbers.splice(1, 2);

console.log(numbers); // Output: [1, 4, 5]
console.log(removedElements); // Output: [2, 3]



//INSERT KARNA 
// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using splice to add elements at index 2
numbers.splice(2, 0, 6, 7);

console.log(numbers); // Output: [1, 2, 6, 7, 3, 4, 5]


// start is 2, so the method starts at index 2.

// deleteCount is 0, so no elements are removed.

// 6 and 7 are added at index 2.

// The original array numbers is modified to [1, 2, 6, 7, 3, 4, 5].



// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using splice to remove 2 elements starting from index 1 and add 6, 7
const removedElements = numbers.splice(1, 2, 6, 7);

console.log(numbers); // Output: [1, 6, 7, 4, 5]
console.log(removedElements); // Output: [2, 3]
