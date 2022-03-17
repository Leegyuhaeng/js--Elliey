'use strict'
const ellie1 = {name:"ellie"}
const ellie2 = {name:"ellie"}
const ellie3 = ellie1
console.log(ellie1)
console.log(ellie2)
console.log(ellie3)
console.log(ellie1==ellie2)
console.log(ellie1===ellie2)
console.log(ellie1===ellie3)
let i = 0 
let j = 10
while(i<=j){
    if(i%2==0){
        console.log(i)
        // continue;
    }
    i++
}
let z = 0
while(z<=j){
    if(z===8){
        break;
    }
    console.log(z)
    z++
}

