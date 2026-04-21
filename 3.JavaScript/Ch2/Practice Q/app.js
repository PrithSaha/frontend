//conditonal statement
let popcornsize ="M";
if(popcornsize=="XL"){
    console.log(`if popcornsize is ${popcornsize} price is Rs.250`);
}
else if(popcornsize=='L'){
    console.log(`if popcornsize is ${popcornsize} price is Rs.200`);
}
else if(popcornsize=='M'){
    console.log(`if popcornsize is ${popcornsize} price is Rs.100`);
}
else {
    console.log(`if popcornsize is ${popcornsize} price is Rs.50`);
}

//if-else and logical operator 
let z="apple";
if(z[0]==='a' && z.length>3){
    console.log(`a good string`);
}
else{
    console.log(`a bad string`);
}

//switch case
let day=4;
switch(day)
{
	case 1:
		console.log(`Monday`);
		break;
	case 2:
		console.log(`Tuesday`);
		break;
	case 3:
		console.log(`Wednesday`);
		break;
	case 4:
		console.log(`Thursday`);
		break;
	case 5:
		console.log(`Friday`);
		break;
	case 6:
		console.log(`Saturday`);
		break;	
	case 7:
		console.log(`Sunday`);
		break;
	default:
		console.log(`Enter a valid day`);
}
console.log(`switch case ends here`);

//alert and prompt
alert(`hi`);
console.error

//chapter3
let msg="help!";
console.log(msg.trim().toUpperCase());
let nname="ApnaCollege";
console.log(nname.slice(4).replace("l","t"));

let start=['january','july','march','august'];
start[0]=start[0].replace("january","july");
start[1]=start[1].replace("july","june");
