// const num=[69,50,59,21,"Akram"];
// console.log(num);
// console.log(typeof(num));

// // 1. Arrays can contain multiple types of data.
// // 2/ Arrays support indexing.
// // 3. Arrays are dynamic.

const fruits=["apples","banana","mango","orange"];
console.log(fruits);

// Indexing:Accessing a single element
console.log(fruits[3]);
console.log(fruits.length);

// Slicing: Accessing multiple element
// console.log(fruits.slice(1,4));
// console.log(fruits.slice(1));
// console.log(fruits.slice(1,10,2));
// console.log(fruits[100]);

// Removing elements
// fruits.splice(1);
// console.log(fruits);

// Adding new elements
fruits.push("cherry");
console.log(fruits);

// fruits.pop();
// console.log(fruits);

// Traverse using for-of loop
for(let fr of fruits){
    console.log(fr);
}

// Traverse using for-each function

fruits.forEach((element)=>{
    console.log(element);
})

const numbers=[2,5,7,3,5,4,3];
const num3=[];
for(let i=0;i<numbers.length;i++){
    let sq=0;
    let num4=numbers[i];
    sq=num4*num4;
    num3.push(sq);
}

console.log(num3);


// WAP to check whether number is prime or not
// function prime(num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             count++;
//         }
//     }
//     if (count == 2)
//         return "is prime number";
//     else
//         return "not prime number";
// }
// const res1= prime(13);
// console.log(res1);

// // WAP to check whether number is palindrome or not
// const palindrome = function (num) {
//     let n = num;
//     let rev = 0;
//     while (num > 0) {
//         rem = num % 10;
//         rev = rev * 10 + rem;
//         num = parseInt(num / 10);
//     }
//     if (n == rev)
//         return "is palindrome number";
//     else
//         return "not palindrome number";
// }
// const res = palindrome(353);
// console.log(res);