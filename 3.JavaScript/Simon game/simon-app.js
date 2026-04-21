let gameSeq=[];
let userSeq=[];
 
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let highest=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started==false){
    console.log("game started");
    started=true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function() {
        btn.classList.remove("userFlash");
    },100);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*4);
    let randColor=btns[randomIdx];//color choosen
    let randomBtn=document.querySelector(`.${randColor}`);//get the name of the class of the color for flashing it
    // console.log(randomIdx);
    // console.log(randColor);
    // console.log(randomBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    //random btn choose
    gameFlash(randomBtn);//btn passed to br flashed
}

function checkAns(index){
    // console.log("curr level : ", level);
    // let index=level-1;

    if(userSeq[index] === gameSeq[index]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>.<br> Press any key to start.`;
        if(highest<level)
        {
            highest=level;
        }
        h3.innerHTML=`Highest scrore was <b>${highest}</b>.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
   // console.log(this);//to get button that was clicked
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;

}