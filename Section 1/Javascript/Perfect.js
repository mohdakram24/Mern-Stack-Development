// WAP to check perfect square between 1 to 100
const perfectSquare=(m)=>{
    let i=1;
    while(i<=100){
        sqrt=Math.sqrt(i);
        if(sqrt-Math.floor(sqrt)==0){
            console.log(i+" It is perfect square");
        }
        i++;
    }
}
perfectSquare(100);