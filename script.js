var social = 0;
var eh = 1;
var media = 1;
var money = 0;
var desire = 0;

var flyCost = 10;
var myCost = 15;
var workCost = 5;
var mediaCost = 2;

var uppers = 1;

var pressed = 0;
var pressed2 = 0;

//For butterly
function fly(){
    if (social >= flyCost){
        social -= flyCost;
        eh += 2;
        document.getElementById('social').innerHTML = "Social Points: " + social;
    }else{
        alert('You do not have enough social points, keep earning some')
    }
}

//For Oh My!
function my(){
    if (money >= myCost){
        money -= myCost;
        document.getElementById('money').innerHTML = "Money: " + money;
        setInterval(function(){
            desire += 1;
            document.getElementById('desire').innerHTML = "Desirability: " + desire;
        }, 1000)
    }else{
        alert('You do not have enough money, keep earning some')
    }
}

//for workaholic
function work(){
    if (money >= workCost){
        money -= workCost;
        document.getElementById('money').innerHTML = "Money: " + money;
        uppers += 1;
        pressed += 1;
        if (pressed == 10){
            document.getElementById('work').disabled = true;
        }
    }else{
        alert('You do not have enough money, keep earning some')
    }
}

//for slightly addicted
function mediaUp(){
    if (money >= mediaCost){
        money -= mediaCost;
        document.getElementById('money').innerHTML = "Money: " + money;
        media += 1;
        document.getElementById('media').innerHTML = "Social Media: " + media + " per second";
        pressed2 += 1;
        if (pressed2 == 19){
            document.getElementById('media2').disabled = true;
        }else if (pressed2 == 5){
            alert('Show da dialouge')
        }
    }else{
        alert('You do not have enough money, keep earning some')
    }
}

//increase social points
function socialPoints(){
    social += eh;
    document.getElementById('social').innerHTML = "Social Points: " + social;

}

//social media points
setInterval(function(){ 
    if (social >= 10){
        social = social + media;
        document.getElementById('social').innerHTML = "Social Points: " + social;
        document.getElementById('media').innerHTML = "Social Media: " + media + " per second";
    }
}, 1000);

//increase moneys
setInterval(function(){
    if (social >= 15){
        money += uppers;
        document.getElementById('money').innerHTML = "Money: " + money;
    }
}, 2000);

//for splash screen
const splash = document.querySelector('.splash')

document.addEventListener("DOMContentLoaded", (e) =>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000)
})