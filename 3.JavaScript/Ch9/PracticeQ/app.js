let para1=document.createElement('p');
para1.innerText="Hey I'm red";
let body=document.querySelector('body');
body.prepend(para1);
para1.classList.add('red');

let h3=document.createElement('h3');
h3.innerText="I'm a blue h3!";
body.prepend(h3);
h3.classList.add('blue');

let div=document.createElement("div");
let h1=document.createElement("h1");
h1.innerText="I'm in a div";
let p=document.createElement("p");
p.innerText="ME TOO!"
body.prepend(div);
div.classList.add("div");
div.classList.add("bgcolor");
div.append(h1);
div.apppend(p);