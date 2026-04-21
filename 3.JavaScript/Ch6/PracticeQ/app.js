//Question 1
function avg(num1,num2,num3){
    let avgerage=(num1+num2+num3)/3;
    console.log(avgerage);
}
avg(1,2,3);
//Question 2
function mul(n){
    for(let i=1;i<=10;i++){
        console.log(`${n}X${i}=`,(n*i));
    }
}
let n=prompt("Enter the number for which you want the table");
mul(n);
//Question 3
function sum(i){
    let sum1=0;
    for(i=1;i<=n;i++){
        sum1=sum1+i;
    }
    return sum1;
}
let d=Number(prompt(`Enter the series length`));
console.log(`The sum of numbers are:`,sum(d));
//Question 4
let str=["hi","hello","bye","!"];
function concat(str){
    let result="";
    for(let i=0;i<str.lenght;i++){
        result+=str[isNaN];
    }
    return result;
}