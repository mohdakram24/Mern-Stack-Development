console.log('Hello Javascript');
age=21;
console.log(age);
console.log(typeof age);
if(age>=18){
    a="This should be Global";
    var x="This works only inside function";
    // let y="this should be local";
    const z="This is a constant";
    z="new value";
    console.log("You are eligible for DL");
}
else{
    console.log("You are not eligible for DL");
}
console.log(a);
console.log(x);
// console.log(y);
console.log(z);