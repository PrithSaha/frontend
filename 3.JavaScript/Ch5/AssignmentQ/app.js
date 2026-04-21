// //Question 1
// alert(`Enter a number between 1 to 6 for dice roll`);
// let roll=Math.floor(Math.random()*6)+1;
// let guess=prompt(`Enter your guess`);
// while(true){
// if(guess=='quit'){
//     console.log("User wished to quit game");
//     break;
// }
// if(guess==roll)
// {
//     console.log(`Your guess was right!!!!!!`);
//     break;
// }
// else if(guess>roll)
// {
//     console.log(`guess is larger than random roll.Enter smaller number`);
//     guess=prompt(`Enter smaller guess`);
// }
// else{
//     console.log(`guess is smaller than random roll.Enter larger number`);
//     guess=prompt("Enter larger number");
// }
// }

//Question 2
const car={
    name : 'Maybach',
    model : 'Mercedes-Maybach EQS SUV',
    color : 'Black'
};
console.log(car.name);

//Question 3
const Person={
    name:'Prithwiraj',
    age:21,
    city: 'Kolkata'
};
Person.city='New York';
Person.country="United States of America";
console.log(Person);