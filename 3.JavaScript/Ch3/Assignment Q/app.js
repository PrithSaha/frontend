//Question 1
console.log("Question 1");
let arr1=[7,9,0,2];
let arr1n=arr1.slice(0,3);
console.log(arr1n);
console.log("Question 2");
console.log(arr1.slice(-3));
//Question 3
let str1=prompt("Enter a string");
if(str1.length != 0 ){
    console.log("String not empty");
}
else {
    console.log("String empty");
}

//Question 4
let str2=prompt("Enter a string");
let n=prompt("Enter index");
if(str2[n] == str2[n].toLowerCase())
{
    console.log(`${str2}'s ${n}th index has lower case`);
}
else
{
    console.log(`${str2}'s ${n}th index does not has lower case`);
}

//Question 4
let str3=prompt("Enter a string");
    console.log(`${str3} after triming is :`,str3.trim());

//Question 5
let arr2=[1,2,4,5,7,8,0];
let n1=2;
if(arr2.indexOf(n1)!= -1)
{
    console.log(`element present`);
}
else
{
    console.log(`element not present`);
}