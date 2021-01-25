// garping all needed elements

const start = document.getElementById("start")  // start section
const select = document.getElementById("select") //select section
const game = document.getElementById("game")    // game section
const info = document.getElementById("info")    //info section

const rock = document.getElementById("rock")       // Rock botton  in the select section
const scissor = document.getElementById("scissor") // scissor button in the select section
const paper = document.getElementById("paper")     // paper button   in the select section

const time= document.getElementById("time")        // time display section in select section

const player = document.getElementById("Player-img") // player Image in the game section 
const com = document.getElementById("com")           // computer image in the game section
const statu= document.getElementById("status")      // the status pragraph in game section ( who won ! or Time out)

const comscore= document.getElementById("com-score") // computer score display in game section

const pSocre= document.getElementById("player-score")  // player score display in game section

pl = 0  ;      // player score in number
cm =0;          // computer score in number

timeLeft = 10;    // time in number

// clear the screen by adding the game and select Divs to hide styling class 

// by adding the ".hide" class you can hide sections

////////////////////// The is CSS class written in style.css ////////////

// .hide{
//     display: none;
// }

//////// ////////////////////////
game.classList.add("hide");  // hidding the game section
select.classList.add("hide"); // hiding the select section
info.classList.add("hide");   // hidding the info section
playerChoise = 0;   
comChoise = 0;
// Rock = 1
// paper = 2
// scissor = 3
var myTime ;
function startFunction(){
    info.classList.remove("hide")  //showing info section
    start.classList.add("hide") // Hidding start section
    select.classList.remove("hide"); // showing the select section
    settime()
}
// Event Listener
// the rock button
rock.addEventListener("click",function(){
    
    playerChoise = 1
    select.classList.add("hide");
    mainFuction();

})
// paper button
paper.addEventListener("click",function(){
    
    playerChoise = 2
    select.classList.add("hide");
    mainFuction();

})
// scissor 
scissor.addEventListener("click",function(){
    
    playerChoise = 3
    select.classList.add("hide");
    mainFuction();

})
function mainFuction(){
    // genarating a rondom number between 1 to 3
    comChoise = Math.floor(Math.random() * 3) + 1;  // computer choise
    
    myStopFunction() // stop counting 
// ----------------------------- Giving images to player in game section
    if(playerChoise===1){
        player.src ="img/rock R.png";
    }
    else if(playerChoise===2){
        player.src ="img/paper R.png";
    }
    else if(playerChoise===3){
        player.src ="img/scissor R.png";
    }
    //// ----------------------- Giving images to the computer game ------------------
    if(comChoise ===1)
    {
        com.src = "img/rock L.png"
    }
    else if(comChoise ===2)
    {
        com.src = "img/paper L.png"
    }
    else if(comChoise ===3)
    {
        com.src = "img/scissor L.png"
    }
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CKECKING WHO WON THIS ROUND <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // //////////////////////     equel  ///////   //////  /////   /////  /////   /////    /////    ///// 
    document.getElementById("status").style.color = "green"
    if(playerChoise === comChoise){
        document.getElementById("status").innerHTML = "woah! it's draw Draw "
    }
    /////////////  1 and 3    ///////////////
    if(playerChoise ===1 && comChoise ===3)
    {
        statu.innerHTML= "Payer Won"
        pl++;
    }
    else if(playerChoise ===3 && comChoise ===1)
    {
        statu.innerHTML= "computer Won"
        cm++
    }
    //////////           1 and 2            //////
    else if(playerChoise ===2 && comChoise ===1)
    {
        statu.innerHTML= "player Won"
        pl++
    }
    else if(playerChoise ===1 && comChoise ===2)
    {
        statu.innerHTML= "computer Won"
        cm++
    }
    /////////////////////     2 and 3  //////////
    else if(playerChoise ===3 && comChoise ===2)
    {
        statu.innerHTML= "player Won"
        pl++
    }
    else if(playerChoise ===2 && comChoise ===3)
    {
        statu.innerHTML= "computer Won"
        cm++
    }
    comscore.innerHTML= cm;
    pSocre.innerHTML=pl;
   
    game.classList.remove("hide")
    
    // console.log("com : "+comChoise)
    // console.log("player : "+ playerChoise)
    /////////////////////////////////////////////////////////////////////////
}

function playAgain(){
    game.classList.add("hide")  // hidding the game section
    select.classList.remove("hide")  // show select section
    timeLeft =11
    settime()
}

function loadpage(){
    location.reload();
}
// setting the time ( function)
function settime(){
    // calling the var my time declared at the top and then setInterval and call a function in every sec (1000 milasec)
    myTime = setInterval(myTimer, 1000);
    function myTimer() 
    {
        // if time left is less then 0 you have to stop counting down and disable the select section
        if(timeLeft== 0)
        {
            myStopFunction()
            select.classList.add("hide")
            statu.innerHTML = "Time out"
            document.getElementById("status").style.color = "red"
            player.src=""
            game.classList.remove("hide")
        }
         timeLeft--
         time.innerHTML = timeLeft

         if(timeLeft <=9){
            time.innerHTML = "0"+timeLeft
         }
    }    
}
function myStopFunction()
     {
        //  to stop the time you have to clear the interval
         clearInterval(myTime);
     }
    


   
