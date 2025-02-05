//netscape navigator 1995
//Brendan Eich introduced it 
//first its name was Mocha the Livescript, java was already  in demand so name got called javascript 
//livescript and javascript both are different
//internet explorer introduced jscript
//ECMAScript:ecma ayi it will decide kaun kesi behve karegi kaam karegi koi scripting language
//ES1 AYA in 1997 ....ES5 aya 2009 
//then ES6 came in 2015(modern javascript)
//ECMA has TC39 technical community it decides what will be there in ecma and what would not be(regarding features)
// javascript is backward compatible: jo cheez pehle chalti thi aaj bhi chalti hai feautures
//javascript is not forward compatible : jo aaj naya feature aeya woh 15 saal purane browser pe nhi chalega 



//String indexing
let firstname="asmita";

// a s m i t a
// 0 1 2 3 4 5

//console.log(firstname[0]); space bhi count hoti hai
//length of string;
//firstname.length
console.log(firstname.length);
console.log(firstname[firstname.length-1]);//output a from last
console.log(firstname[firstname.length-2]);;//output : t

//last index:length - 1


//trim()
//toUpperCase
//toLowerCase()
//slice
let fname="   asmita    ";
console.log(fname.length);
//remove spaces
fname=fname.trim();
console.log(fname);
console.log(fname.length);



console.log(fname.toUpperCase());
console.log(fname.toLowerCase());


//to get particular character .. use slice() method use start index and end index..end index would be excluded
let newstring=fname.slice(0,4)//
console.log(newstring);


//typeof OPERATOR
//data types(primitive data type)
//string "asmita"
//Number 2,3,4,5
//boolean
//undefined
//null
//BigInt
//Symbol

let age=22;
let ftname="asmita"
console.log(typeof age);


//CONVERT Number TO String
//using a trick by adding " " string

console.log(typeof(age+" "));


//CONVERT String to Number
//ek choti si trick string ke aage + lga do
let mystr="34";
console.log(typeof(+mystr));

//METHOD SECOND TO DO IT
let a=18;
age=Number(age);
console.log(typeof a);

//String CONCATENATION
let s1="asmita";
let s2="sharma";
let s3=s1+s2;
let s4=s1+" "+s2;
console.log(s3);
console.log(s4);

let s="43";
let s0="67";
let S=+s + +s0;
console.log(S)
console.log(typeof(S))


let umar=22;
let firstn="asmita";
let aboutme="My name is "+firstn+" and my age is "+umar;
console.log(aboutme);

//it is so tedious to write in inverted commas so we have a better way for it which is called as
//template String
let about=`my name is ${firstn} and my age is ${umar}`;
console.log(about);

//const mein assignment karni hi padegi it is so compulsory



//BigInt
let mynum=123;
console.log(mynum);
console.log(Number.MAX_SAFE_INTEGER);
//this number has a limit upto  9007199254740991
//if you want to make a number greater than this limit 9007199254740991 then kindly use the BigInt
let mynumber=BigInt(12);
let mynum1=123n;//agar n lga diya toh yeh bhi big int hai
console.log(mynum1);

//BigInt cannot be used with other data type ..means it can only be used with bigint example during addition of two numbers both should be of BigInt

//booleans and comparison operator
let num1=5;
let num2=7;
console.log(num1>num2);

//== VS ===
// == only check the value not the data type 
//  === data type and value both should be equal

// != VS !==
//In summary, != compares values after type conversion, whereas !== compares both value and type. Always prefer !== when you want to avoid unexpected results from type coercion.

//if else condition\
let ag=18;
if(ag>=18){
    console.log("Uses can apply ddlc");
}else{
    console.log("user can play marion");
}


let n=16;
if(n%2==0){
    console.log("EVEN");
}else{
    console.log("ODD");
}




//falsy values
//false," ",null,undefined,0
//rest all values are truthy values

let firstynamy=" ";//agar yahn koi bhi value ho from falsy values ki list mein se tph matlab sara kuch false aur output would be fisrtynamy is kinda empty
if(firstynamy){
    console.log(firstynamy)
}else{
    console.log("firstynamy is kinda empty");
}


//TERNANRY OPERATER:CONDITIONAL VARIABLE
let agi=8;
let drink=agi>=5?"COFFEE":"MILK";
console.log(drink);


//in javascript comparison operator is triple eyal i.e ===


//input lena is javascript is using prompt
//and input hmesha string data type ka hoga
let winningnumber=18;
let userguess= prompt("guess anumber");
//yeh toh string mein lega but if you want input in number then use + before word prompt rest word is same 

//switch statement
let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('Bananas are yellow.');
    break;
  case 'apple':
    console.log('Apples are red or green.');
    break;
  case 'orange':
    console.log('Oranges are orange.');
    break;
  default:
    console.log('Unknown fruit.');
}

//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  

  //breal
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
    console.log(i);
  }
  
  //continue
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue; // Skip the iteration when i is 5
    }
    console.log(i);
  }
  