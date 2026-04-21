let inp=document.querySelector("#text");
let h2=document.querySelector("h2");

inp.addEventListener("input" , function () {
     let org=inp.value;
     console.log(inp.value);
     let fil="";
     for(let i=0;i<org.length;i++){
        let char=org[i];
        if((char>='a' && char<='z')||( char>= 'A' && char<= 'Z')|| char === " "){
            fil=fil+char;
        }}
        inp.value=fil;
        h2.textContent= fil;});

// Question 2
let btn=document.createElement("button");
let body=document.querySelector("body");
btn.innerText="Click me!"
body.append(btn);
btn.addEventListener("click",function(){
    btn.style.backgroundColor="lightgreen";
});