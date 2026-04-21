let students=[
    {
        name:"aman",
        marks:95
    },
    {
        name:"aman2",
        marks:94.5
    },
    {
        name:"aman3",
        marks:94
    }];
    let cgpa=students.map((student) =>{
        return (student.marks/10);
    });

let arr2=[1,2,3,4,5];
arr2.every((el)=>el%2 == 0);

let arr=[94,92,90,95,100,97,96,99];
let ans=arr.every((el) => {
    el%10 == 0;
});
console.log(ans);
function getMin(arr)
{
    let ans2=arr.reduce((ans,el) => 
{
    if(ans<el)
        return ans;
    else
        return el;
});
return ans2;
}
