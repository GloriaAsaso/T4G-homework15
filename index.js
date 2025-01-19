
function changecolor(){ //// cahanging the color of the text 
    let you = document.getElementById("first" );
    you.style.backgroundColor="blue";
    you.innerHTML="I know now what the DOM is 💖";
}


let more = document.getElementById("first" );
more.addEventListener ("mouseover",changecolor);

function changeColortwo(){
    let game = document.getElementById("second");
    game.style.backgroundColor="orange";
    game.innerHTML="I know how to acces / select elements in the ❤ DOM";
}


let come = document.getElementById("second");
come.addEventListener ("click",changeColortwo);


function changetWeightthree(){
    let made = document.getElementById("third");
    made.style.backgroundColor="green";
    made.innerHTML="I know how to style methods to change the style of an element in the DOM ✔";
    made.style.fontWeight = "bold"; // Make the text bold
}


let both = document.getElementById("third");
both.addEventListener ("click",changetWeightthree);
function changeColorfour() {
    let walk = document.getElementById("fourth");
    walk.style.backgroundColor = "green";
    walk.innerHTML = "I know how the styling properties differ in JS from CSS 👍";
    walk.style.fontStyle = "italic"; // Make the text italic
}


let take = document.getElementById("fourth");
take.addEventListener("click", changeColorfour);


function changeColorfive(){
    let joy = document.getElementById("fifth");
    joy.style.backgroundColor="black";
    joy.innerHTML="Yes I did it!! I manipulated the DOM and style my elemennt 🌹🌹😃😍 ";
}


let make =document.getElementById("fifth");
make.addEventListener("dblclick",changeColorfive);