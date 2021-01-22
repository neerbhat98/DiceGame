var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNum1 + ".png"; // dice 1 - 6

var randomImageSource = "images/" + randomDiceImage; // images/dice1 -6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1"),innerHTML = "Play 1 winner!!!"
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Play 2 winner!!!" 
}
else{
    document.querySelector("h1").innerHTML = "Draw!!!" 
}