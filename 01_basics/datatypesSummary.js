// Primitive
//7types : String ,Number , Boolean ,null(empty),undefined,Symbol,BigINT  THESE ARE PASSED BY VALUE 
 // Non Primitive are Reference Type
// Array,Objects,Functions
 //Symbol
 const id=Symbol('123')
 const anotherId=Symbol('123')

 console.log(id===anotherId); //false because its different
 const bigNumber=21645621562652566565654654n// now its converted to BigInt
console.log(typeof bigNumber)
 // non primitive ka datatype usually function bola jata hai
const heros =["mitt","ironman"];
 let myObj= {  
    name:"mitt" ,
    age:21,
 }
 const myFunction= function(){
    console.log("Hello world");
 }
 console.log(typeof myFunction )  //function ayega but it is function objects