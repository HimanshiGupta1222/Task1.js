let p = 10000
let r = 5;
let n = 1;
let t = 3;



A= p*(1+(r/n))^n*t
let compoundInterest = A - p;


console.log(`The compound interest after ${t} years is: ${compoundInterest}`);