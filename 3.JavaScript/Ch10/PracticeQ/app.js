// let btns=document.querySelectorAll("button");

// for(btn of btns)
// {
// //     btn.onclick=sayHello;
// //     btn.onclick=sayName;

//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("you double clicked me!");
//     });
// }
// console.dir(btn);

// function sayHello()
// {
//     alert("Hello");
// }
// function sayName(){
//     alert("Apna college");
// }

//Activity
    // let btn= document.querySelector("button");
    // btn.addEventListener("click", function() {
    //     let h3=document.querySelector("h3");
    //     let RandomColor=getRandomColor();
    //     h3.innerText= RandomColor;
    //     let div=document.querySelector("div");
    //     div.style.backgroundColor=getRandomColor();
    //     console.log("color updated");
    // });
    // function getRandomColor() {
    //     let r=Math.floor(Math.random() * 255);
    //     let g=Math.floor(Math.random() * 255);
    //     let b=Math.floor(Math.random() * 255);
    //     let color =`rgb(${r}, ${g}, ${b})`;
    //     return color;
    // }

// let p=document.querySelector("p");
// p.addEventListener("click", function() {
//     console.log("parah was clicked");
// });

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     console.log("the box was hovered");
//     console.log(" ");
// });
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="pink";
// });

//  let form=document.querySelector("form");

// form.addEventListener("submit", function(event) {
//    event.preventDefault();
//     console.log("form submit");
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     console.dir(user);
//     console.log(user.value);
//     console.dir(pass);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
//  });

// let user=document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("change event");
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function() {
//     console.log("input event");
//     console.log("final value = ", this.value);
// });
//Activity 2
    // let inp=document.querySelector("#text");
    // let p=document.querySelector("p");

    // inp.addEventListener("input" ,  function () {
    //     console.log(inp.value);
    //     p.innerText = inp.value;
    // });

// axious
let btn=document.querySelector("button");
let url2= "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     //console.log(fact);
//     let p= document.querySelector("#result");
//     p.innerText = fact;
// });

btn.addEventListener("click", async () => {
    let link = await getImage();
    console.log(link);
    let img=document.querySelector("#result");
    img.setAttribute("src",link);
    // let p= document.querySelector("#result");
    // p.innerText = link;
});

// let url= "https://catfact.ninja/fact";


async function getImage() {
    try{
        let res= await axios.get(url2);
        return res.data.message;
       return res.data.fact;
    } catch(err){
        console.log("Error -",err);
        return "No image was found";
    }
}

const url= "https://icanhazdadjoke.com/";
async function getJokes() {
    try{
        const config = {
            headers: {
                Accept: "application/json"
            }
        };
        let res=await axios.get(url, config );
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}