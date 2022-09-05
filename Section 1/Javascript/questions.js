// 1. WAP to store all prime number (1-100) in array.

function arr1(n, m) {
    const arr = [];
    for (let i = n; i <= m; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            arr.push(i);
        }
    }
    return arr;
}
const result = arr1(1, 100);
console.log(result);

// 2. WAP to filter numbers less than 100 - [234, 243546, 2343, 5,2, 23,35, 42]
const array=[234, 243546, 2343, 5,2, 23,35, 42];
const result1=array.filter((a)=>{
    return a<100;
})
console.log(result1);

// 3. WAP add 'Rs' before every price in array - [ {name : 'smartphone', price : 23000}, {name : 'Laptop', price : 45000}, {name : 'Tablet', price : 12000} ]

const array2=[ {name : 'smartphone', price : 23000}, {name : 'Laptop', price : 45000}, {name : 'Tablet', price : 12000} ];
const result2=array2.map((rupee)=>{
    return "Rs"+rupee.price;
})
console.log(result2);