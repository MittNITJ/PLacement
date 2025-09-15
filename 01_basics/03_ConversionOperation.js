let score="33abc"
let temp=null
let temp1=undefined
console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
let valueInTemp=Number(temp)
let valueInTemp1=Number(temp1)
console.log(typeof valueInNumber)
console.log(valueInNumber) //Nan NOt a number
console.log(valueInTemp)
console.log(valueInTemp1)
//Notes 
//'33=>33
//"33abc"=>Nan
//null=>0
//undefined Nan
//true=>1;false=>0


//let isLoggedIn=1;
//let booleanIsloggedIn=Boolean(isLoggedIn)
let x=""
let y="Mitt"
let booleanIsloggedIn=Boolean(x)
console.log(booleanIsloggedIn);
let booleanIsloggedI=Boolean(y)
console.log(booleanIsloggedI);

//for bool
//"" =>false
//"hitesh"=>true