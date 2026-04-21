//Question 1
const avg=(arr)=>{
    let tot=0;
    for(let element of arr)
    {
        tot+=element;
    }
    return tot/arr.length;
};
let arr=[1,2,3,4,5,6,7,8];
console.log(avg(arr));
//Question 2
const Even=(n)=>{
    if(n%2==0)
        return "Even";
    else
        return "Odd";
}
const object={
    message: 'Hello,World!',
    logMessage(){ 
        console.log(this.message);

    }
};
//setTimeout(object.logMessage,1000);