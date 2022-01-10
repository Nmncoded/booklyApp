let bigBox = document.querySelector(`.boxes`);
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
    randomColor += hexColor[Math.floor(Math.random()*16)]
}
return randomColor;
}

function changeRandomNumber(){
    return Math.floor(Math.random()*500)
}

function mouseMoveHandler(){
    allBoxes.forEach(box => {
        box.innerText = changeRandomNumber();
        box.style.backgroundColor = changeRandomColor();
    })
}

bigBox.addEventListener(`mousemove`,mouseMoveHandler);