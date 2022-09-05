// WAP to store all the numbers less than 100 from this array : 
// [434, 32, 456, 12, 66, 35, 99, 5653, 345, 23465, 350];

const num=[434, 32, 456, 12, 66, 35, 99, 5653, 345, 23465, 350];
const num1=[];
for(let i of num){
    if(i<100){
        num1.push(i);
    }
}
console.log(num1);