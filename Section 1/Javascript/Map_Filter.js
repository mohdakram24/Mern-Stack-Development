// Map is a function of array
// Map returns a new array

// arr=[2,3,4,6,6,7];
// const newNums=arr.map((n)=>{
//     return n*n;
// })
// console.log(newNums);

// prices=[100,99,4724,999,3199]
// const arr2=prices.map((n1)=>{
//     return "Rs"+n1;
// })
// console.log(arr2);

arr3=[23,43,5,6,10,27,4,2];
// create new array where if an element is even divide it by 2 and if
// it is odd multiply by 2

const arr4=arr3.map((n)=>{
    // Ternary Operator
    // return condition ? if true : else false
    return n%2==0 ? n/2 : n*2;
})
console.log(arr4);

arr3=arr3.filter((a)=>{
    return a%2==0;
})
console.log(arr3);
