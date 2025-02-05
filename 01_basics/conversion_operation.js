// let score=33;
//let score="33";
// let score="33abc";
// let score=null;
// let score=true;
let score="asmita"

// let score=undefined;
console.log(typeof score);
console.log(typeof(score));
let valueinNum=Number(score);
console.log(typeof valueinNum);//converted into number
console.log(valueinNum);//output Nan input was "33abc" and it is converted to number but agar typeof dekho toh eska num hi ayega but esmein value hogi Nan
//agar yhi null huya toh output would be 0
//agar yhi undefined hai toh output is Nan
//agar score true hai toh yahan 1 aata 
// agar score false hai toh yahan 0 aata
//agar yahan string hai toh yahan Nan aa jayega because it cannot be converted into string because hum number mein convert kar rhe hain

//"33"=>33
//"33abc"=>Nan
//true=>1;false=>0




// let isloggedIn=1;
// let isloggedIn=" ";
let isloggedIn="asmita";
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn);

//1 hai toh yahan true 
//empty hai toh yahan false
//string hai toh true aata



let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
