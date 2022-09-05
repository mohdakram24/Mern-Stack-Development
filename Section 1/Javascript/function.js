// Defining the function
// function addNums(a,b){
//     n="This should works in function only";
//     console.log(a+b);
// }
// Calling the function
// addNums(5,6);
// console.log(n);

// dECLARING FUNCTION TYPE 1
// function fact(a){
//     var fact=1;
//     for(let i=1;i<=a;i++){
//         fact=fact*i;
//     }
//     return fact;
// }
// const res=fact(5);
// console.log(res);

// declaring function type 2
// const sumProd=function(num1,num2){
//     num3=num1+num2;
//     num4=num1*num2;
//     return [num3,num4];
// }
// const [res1,res2]=sumProd(2,3);
// console.log(res1,res2);

//Declaring function type 3
const checkPer=(m) => {
    console.log(m**0.5);
    if(m**0.5 === parseInt(m**0.5))
    console.log("perfect square");
    else
    console.log("not perfect square");

}
checkPer(4);

// console.log(2**6);