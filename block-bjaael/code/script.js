let bigBox = document.querySelector(`.boxes`);
for(let i=0;i<500;i++){
    let smallbox = document.createElement(`div`);
    smallbox.classList.add(`box`);
    smallbox.innerText = changeRandomNumber(500);
    bigBox.append(smallbox);
}
let allBoxes = document.querySelectorAll(`.box`);
let hexColor = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];


function changeRandomColor(){
    let randomColor = "#";
for(let i=0; i<6;i++){
    randomColor += hexColor[changeRandomNumber(16)]
}
return randomColor;
}

function changeRandomNumber(max){
    return Math.floor(Math.random()*max)
}

function mouseMoveHandler(){
    allBoxes.forEach(box => {
        box.style.backgroundColor = changeRandomColor();
        box.innerText = changeRandomNumber(500);
    })
}

bigBox.addEventListener(`mousemove`,mouseMoveHandler);