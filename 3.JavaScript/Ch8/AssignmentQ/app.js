let num=[1,2,3,4];
console.log(num);
const sq=num.map((num)=> num*num);
console.log(sq);
const sum=sq.reduce((sum,sq)=>sum+sq);
console.log(sum);
let avg=sum/num.length;
console.log(avg);
const arr2=num.map((el) => el+5);
console.log(arr2);
let str=["PrItHwIRAJ","loves","srija","saha","kiit"];
const newStr=str.map((str) => str.toUpperCase());
console.log(newStr);
const doubleAndReturnArgs= (num,...args) => [...num,...args.map((v)=>v*2)];
let args=[90,92,94,95,98,99];
const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
    obj1={
        a:1,
        b:2
    };
    obj2={
        c:4,
        O:5
    };