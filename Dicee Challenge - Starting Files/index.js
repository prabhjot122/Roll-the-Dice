var randomNumber1=Math.floor(Math.random()*6)+1;
var dicee = "dice"+randomNumber1+".png";
var randomimagesrc="./images/"+dicee;
var randomNumber2=Math.floor(Math.random()*6)+1;
var diceee = "dice"+randomNumber2+".png";
var randomimagesrcc="./images/"+diceee;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesrc);
document.querySelectorAll("img")[1].setAttribute("src",randomimagesrcc);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="tie";
}