//Question 1
let input=document.createElement("input");
let btn=document.createElement("button");
let body=document.querySelector("body");
btn.innerText="Click me";
body.append(btn);
body.append(input);
//Question 2
btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");
//Question 3
let btns = document.querySelector("#btn");
btns.classList.add("btnstyle");
//Question 4
let h1=document.createElement("h1");
h1.innerText="DOM Practice";
body.append(h1);
body.classList.add("purple");
//Question 5
let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
body.append(p);
