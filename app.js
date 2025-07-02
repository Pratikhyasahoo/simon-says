let gs=[];
let us=[];

let btns=["yellow","red","blue","green"];


let start=false;
let level=0;

let h2=document.querySelector("h2");

// adding eventListner
document.addEventListener("keypress",function(){
    if(start == false){
   console.log("game is started");
    start=true;
    levelUp();
    }
});
//flashing button when computor choose a random color
function buttonFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },500);
}
//flashing button when user select a color
function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
    btn.classList.remove("userFlash");
   },700);
}
//level up
function levelUp(){
    us=[];
    level++;
    h2.innerText=`level ${level}`;
 //random choose
    let random=Math.floor(Math.random()*3);
    let rc=btns[random];
    let rcolor=document.querySelector(`.${rc}`);
    gs.push(rc);
    console.log(gs);
    buttonFlash(rcolor);
}
//cheaking if the color choosen by the computor is similar with user 
function cheak(idx){
    if(us[idx] === gs[idx]){
        console.log("same value");
        if(us.length==gs.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerText=`game over,your score is ${level}. press any key to start again`;
        updateScore(level);
        document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },150);
         
        reset();
    }
}
function butP(){
    let btn=this;
    userFlash(btn);
     let userCo=btn.getAttribute("id");
    us.push(userCo);
    cheak(us.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",butP);
//reset the game 
}
function reset(){
       start=false;
       level=0;
       gs=[];
       us=[];

}