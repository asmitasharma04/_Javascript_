//objects are reference type
//arrays are sufficient but not sufficient
//for real world data
//objects store key value pairs
//objects donot have index
//for objects we use {} braces for arrays we use [] brackets
//how to create objects
const person={name:"Asmita",age:"22"};
console.log(person);
//jab kuch {} mein likho then we call them object literals
//how to access data
console.log(person.name);
//keys ko properties bhi bolte hain


//arrays bhi bna skte hain in object
const person1={
    name:"Asmita",
    age:22,
    hobbies:["guitar","cooking"]
}
console.log(person1);
console.log(person1.hobbies);

//how to add key value pair to objects;
person1.gender="male";
console.log(person1)

// we can these by using . dot operator  but there is one more method to access them by using [] and [] ke andar apni key ka name in strings ..kyunki javascript mein sab strings mein hi hota by default
 console.log(person["name"]);
 //can add key value by using bracket notation
 person["person"]="male";
 console.log(person);

//Dot Notation
//Syntax: object.property

//Use Case: Used when the property name is a valid identifier (i.e., it follows the same rules as variable names: no spaces, can't start with a number, etc.)
let obj = {name: "John", age: 30};
console.log(obj.name);  // Output: John

// Bracket Notation
// Syntax: object['property']

// Use Case: Used when the property name is stored in a variable, is not a valid identifier, or contains special characters or spaces.
let obj1 = {name: 'John', 'last name': 'Doe', age: 30};
console.log(obj1['name']);          // Output: John
console.log(obj1['last name']);     // Output: Doe

// Accessing property using variable
let prop = 'age';
console.log(obj[prop]);            // Output: 30


//How to iterate object
//for in loop
// Object.keys

for(let key in person1){
    // console.log(key);
    console.log(person1.key);//undefined
    console.log(person1[key]);//[] use karna padega
    console.log(`${key}:${person1[key]}`);
    console.log(key,":",person1[key]);
}

console.log(Object.keys(person));
console.log(typeof (Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(person[key]);
}

//Computed properties
// Computed properties are a powerful feature in JavaScript, especially useful when working with objects. When it comes to arrays, computed properties aren't typically used in the same context as objects. However, you can use computed property names within an array of objects or when dynamically generating object keys.
const key = 'name';
const people = [
  { [key]: 'Alice', age: 25 },
  { [key]: 'Bob', age: 30 },
  { [key]: 'Charlie', age: 35 }
];

console.log(people);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
//spread opeartor in array
console.log(..."1234");//alag alg hoke likhe jayenge
console.log(...1234);//error only applicable for string
console.log(..."abc");


//spread opeartor in objects
const ob={
    key1:"value1",
    key2:"value2",
    //key1:"value3",//same key sameproperty ek mein nhi ho sakti
};
const ob2={
    key1:"valuessssssssss",
    key3:"value3",
    key4:"value4",
    
};
const newobj={...ob1,...ob2,key69:"value69"};
console.log(newobj);
const newob={...abc};
console.log(newob); //output: {0:"a",1:"b",2:"c"}
console.log(ob);
const newo={
    ...["item1","item2"]
};
console.log(newo);
//ob1 and ob2 dono mein key 1 toh esmein ob2 wali key count hogi because humne ob2 last mein likha with spread operator


//object destructuring
// Object destructuring allows you to unpack properties from an object into distinct variables. It can also be used to rename the variables, which helps avoid naming conflicts or to follow naming conventions.
const band={
    bandname:"led zipplin",
    famoussong:"stairway to heaven",
};
// const bandname=band.bandname;
// console.log(bandname);
const{bandname,famousname}=band;
console.log(bandname);

// if i write
let {bandname:var1,famousname:var2}=band;
console.log(bandname);//WRONG
console.log(var1);//correct way

// use of restprops
const user = {
    name: 'Alice',
    age: 25,
    city: 'New York',
    country: 'USA'
};

// Destructure specific properties and collect the rest
const { name, age, ...restProps } = user;

console.log(name);       // Output: Alice
console.log(age);        // Output: 25
console.log(restProps);  // Output: { city: 'New York', country: 'USA' }


//Objects in array
const people1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

console.log(people1);


//acces it
console.log(people1[0]); // Output: { name: 'Alice', age: 25 }
console.log(people1[1].name); // Output: Bob
//for each
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.`);
});

//for of
for (const person of people) {
    console.log(`${person.name} is ${person.age} years old.`);
}

// Example 4: Adding a New Object to the Array
// You can add new objects to the array using methods like push:
people.push({ name: 'David', age: 40 });
console.log(people);


// Example 5: Updating an Object in the Array
// To update an object in the array, you can use the index:
people[0].age = 26;
console.log(people[0]);
// example 6: Removing an Object from the Array
// You can remove objects from the array using methods like splice:people.splice(1, 1); // Removes the second object (index 1)
console.log(people);


// Basic Destructuring of Array Inside an Object
const data = {
    title: 'Basketball Team',
    players: ['Alice', 'Bob', 'Charlie', 'Dave']
};

// Destructuring the object and array
const { title, players: [firstPlayer, secondPlayer] } = data;

console.log(title);         // Output: Basketball Team
console.log(firstPlayer);   // Output: Alice
console.log(secondPlayer);  // Output: Bob


// Destructuring with Nested Objects and Arrays
const company = {
    name: 'Tech Corp',
    employees: [
        { name: 'John', position: 'Developer' },
        { name: 'Jane', position: 'Designer' }
    ]
};

// Destructuring the object and nested array of objects
const { name: companyName, employees: [{ name: firstEmployeeName, position: firstEmployeePosition }] } = company;

console.log(companyName);          // Output: Tech Corp
console.log(firstEmployeeName);    // Output: John
console.log(firstEmployeePosition);// Output: Developer


// Using Rest Operator in Destructuring
const team = {
    sport: 'Soccer',
    players: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']
};

// Destructuring and using rest operator
const { sport, players: [captain, viceCaptain, ...restPlayers] } = team;

console.log(sport);         // Output: Soccer
console.log(captain);       // Output: Alice
console.log(viceCaptain);   // Output: Bob
console.log(restPlayers);   // Output: ['Charlie', 'Dave', 'Eve']
