let gameSeq=[]; //to track game sequence
let userSeq=[]; //to track user entered sequence

let btns=["yellow","red","purple","green"];

let started=false; //game not started
let level=0;       //level zero because game not started

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){ //any key on keyboard pressed
    if(started==false){
        console.log("Game started");
        started=true;  //Game will start only one time

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");  //add class to flash button
    setTimeout(function(){
        btn.classList.remove("flash");  //change flash color white to original
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");  //add class to flash button
    setTimeout(function(){
        btn.classList.remove("userFlash");  //change flash color white to original
    },250);
}

function levelUp(){
    userSeq=[];  //When color flashes aplyala sarva colors prt press karayla phije mhnun
    level++;
    h2.innerText=`level ${level}`; //heading changes
    

    //random idex generated and it flashes
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);


    //Adding color to game sequence array
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    //to check user entered right sequence or not

    // console.log("Current level:",level);


    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){ //tevdhech color takle jevdhe game sequence ne dile tr next level la janar
            
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over!Your score was <b>${level}<br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}

function btnPress(){
   let btn=this;
   userFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

