//Qustion 1
    // let arr1=[1,2,3,4,5,6,7,8,9,10];
    // let num=Number(prompt(`Enter number in range 1 to 10 and a number you want larger than`));
    // for(let i=0;i<arr1.length;i++)
    // {
    //     if(arr1[i]>num)
    //         console.log(arr1[i]);
    // }
//Question 2
    // let str="abcdabcdefgggh";
    // function strN(str){
    //     let ans="";
    //     for(i=0;i<str.length;i++){
    //         if(ans.indexOf(str[i])== -1){
    //             ans+=str[i];    
    //         }
    //     }
    //     return ans;
    // }
    // strN(str);
//Question3
    // let country=["Australia","Germany","United States of America"];
    // function conName(con){
    //     let conMax=0;
    //     for(let i=0;i<con.length;i++){
    //         if(con[conMax].length<con[i].length)
    //         {
    //             conMax=i;
    //         }
    //     }
    //     return con[conMax];
    // }
//Question4
    // let str="ink";
    // let count=0;
    // function vowelCount(str2){
    // for(let i=0;i<str2.length;i++){
    //     if(str2[i]=='a'||str2[i]=='e'||str2[i]=='i'||str2[i]=='o'||str2[i]=='u')
    //         count++;
    //     }
    // return count;
    // }
//Question 5
function range(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(range(100,110));