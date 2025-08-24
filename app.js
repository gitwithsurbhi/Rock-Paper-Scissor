let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorepara=document.querySelector("#user-score")
const compScorepara=document.querySelector("#comp-score")
let btn=document.querySelector("#new-btn")

const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

const drawGame=()=>{
      msg.innerText="Game Was Draw .Play Again !";
      msg.style.backgroundColor="#081b31";
}

const playGame=(userChoice)=>{
console.log("user choice: ",userChoice);

const compChoice=genCompChoice();
console.log("Comp choice:",compChoice);

if(userChoice===compChoice){
     drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin= compChoice==="scissor"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText=`OOPS! You Lose!  ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor="red"
}
}

btn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userScorepara.innerText=userScore;
    compScorepara.innerText=compScore;
    msg.innerText=`Play your Move `;
    msg.style.backgroundColor="#081b31";

})