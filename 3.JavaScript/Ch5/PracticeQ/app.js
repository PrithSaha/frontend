// const post={
//     usernmae:"@unfathomable",
//     content: "This is my first post",
//     like:100
// } ;

// const classInfo={
//     aman:{
//         city: 'delhi',
//         grade: 'O',
//         college: 'KIIT'
//     },
//     shardha:{
//          city: 'delhi1',
//         grade: 'O1',
//         college: 'KIIT1'
//     },
//     karan:{
//          city: 'delhi2',
//         grade: 'O2',
//         college: 'KIIT2'
//     }
// };

// let num=Math.random();
// let num1=num*100;
// let num2=Math.floor(num1);
// let num3=num2+1; 

//Guessing Game
const max=prompt(`Enter the maximum number`);
console.log(max);
const random=(Math.floor(Math.random()*max)+1);
// console.log(random);
let guess=prompt(`guess the number`);
while(true){
    if(guess=='quit'){
        console.log(`User quit`);
    break;
    }
    if(guess==random){
        console.log(`You are right!!!!!!!!!!!Random number is:${random}`,);
        break;
    }
    else if(guess>random){
        console.log(`Hint: Try again to guess the number.${guess} is larger than random`);
        guess=prompt(`Enter smaller number`);
    }
    else{
        console.log(`Hint: Try again to guess the number.${guess} is smaller than random`);
        guess=prompt(`Enter larger number`);
    }
}