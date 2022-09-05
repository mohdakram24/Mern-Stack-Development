// Objects are used to store key-value pairs.

let user={
    name:"akram",
    age:21,
    email:"akramkh2407@gmail.com",
    "enroll-no":"123A"
};
let key="enroll-no";
// console.log(user.name);
// console.log(user.age);
console.log(user["enroll-no"]);
console.log(user[key]);

// // 2nd type

// console.log(user["email"]);
console.log(user);

// // New key to add
// user.address="lucknow-226021";
// console.log(user.address);
// user.name="Akramkhan";
// console.log(user);

let brands="samsung";
let model="galaxy S22";
let colors=["white","black","gray"];
let price=60000;

let smartphone={
    brands,model,colors,price
};
// console.log(smartphone);
// // Accessing array values
// // Object_name.attribute[index_no.]
// console.log(smartphone.colors[1]);

// Passing object as an argument to a functiom
const printsDetails=(obj)=>{
    console.log(obj.brands);
    console.log(obj.model);
    console.log(obj.colors);
    console.log(obj.price);
    console.log(smartphone.model);
}

// // }
printsDetails(smartphone);
// // printsDetails(); // This will throw error

// // 2. passing object as an argument to a functiom

// const printsDetails=({brands,model})=>{
//     console.log(brands);
//     console.log(model);

// }
// printsDetails(smartphone);

// let myOrders=[
//     {id:123,name:"tshirs",price:500},
//     {id:123,name:"tie",price:22222},
//     {id:123,name:"pants",price:500,}
// ];

// console.log(myOrders[1].name);

// // WAP to filter the orders which are less than 1000

// const print=myOrders.filter((a)=>{
//     return a.price<1000;
// })
// console.log(print);