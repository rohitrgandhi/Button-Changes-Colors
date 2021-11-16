const redcolor=document.querySelector("#redcolor");
const greencolor=document.querySelector("#greencolor");
const bluecolor=document.querySelector("#bluecolor");
const input=document.querySelector("#input");
const output=document.querySelector("#output");

input.addEventListener("input",copy)

function copy(){
    let anyvariable=input.value;
    output.innerHTML=anyvariable;
}

redcolor.addEventListener("click", changeToRed);

function changeToRed(){
    output.style.color="red";

}


greencolor.addEventListener("click", changeToGreen);

function changeToGreen(){
    output.style.color="green";

}


bluecolor.addEventListener("click", changeToBlue);

function changeToBlue(){
    output.style.color="blue";

}