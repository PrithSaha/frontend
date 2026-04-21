    // const sum= (a,b) => {
    //     console.log(a+b); 
    // };
    // console.log("hi there!");
    // setTimeout(()=>{
    //     console.log(`Apna college`);
    // },4000);
    // console.log(`Welcome to`);
// Question on function 
    // const sq=(n)=> (n*n);
    // console.log(sq(5));
let id=setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("Happy Ending");
},10000);