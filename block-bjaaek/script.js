let boxOne = document.querySelector(`.first`)
let boxTwo = document.querySelector(`.second`);
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

function handleClick(){
    boxOne.style.backgroundColor = changeRandomColor();
}
function handleMouseMove(){
    boxTwo.style.backgroundColor = changeRandomColor();
    }
    
boxOne.addEventListener(`click`,handleClick);
boxTwo.addEventListener(`mousemove`,handleMouseMove);