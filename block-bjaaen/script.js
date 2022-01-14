
let userRoot = document.querySelector(`.user-icons`);
let computerRoot = document.querySelector(`.computer-icons`);
let result = document.querySelector(`.result`);
let reset = document.querySelector(`.btn`);
let userPoints = document.querySelector(`.user span i`)
let computerPoints = document.querySelector(`.computer span i`)

let dataSet = [
    {
        name: "rock",
        beats: "scissors",
    },
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
];

let userSelected = {};
let computerSelected = {};

function getRandomNumber(max=3){
    return Math.floor(Math.random()*max);
}

function getWinner(user, computer){
    if(user.name === computer.name){
        result.innerText = `It's a tie!`
    }else if(user.beats === computer.name ){
        result.innerText = `User Wins!`
        userPoints.innerText = Number(userPoints.innerText)+1;
    }else{
        result.innerText = `Computer Wins!`
        computerPoints.innerText = Number(computerPoints.innerText)+1;
    }
}

function getUserLayout(){
    userRoot.innerHTML = "";
dataSet.forEach(icon => {
    let li = document.createElement(`li`)
    let i = document.createElement(`i`);
    i.className = `fa fa-hand-${icon.name}-o`;
    if(userSelected.name === icon.name){
        li.classList.add(`selected`);
    }
    li.append(i);
    userRoot.append(li);
    li.addEventListener(`click`,() => {
        userSelected = icon;
        computerSelected = dataSet[getRandomNumber()];
        getUserLayout();
        getComputerLayout();
        getWinner(userSelected,computerSelected);
        console.log(userSelected, computerSelected);
    })
})
}
getUserLayout();



function getComputerLayout(){
    computerRoot.innerHTML = "";
dataSet.forEach(icon => {
    let li = document.createElement(`li`)
    let i = document.createElement(`i`);
    i.className = `fa fa-hand-${icon.name}-o`;
    if(computerSelected.name === icon.name){
        li.classList.add(`selected`);
    }
    li.append(i);
    computerRoot.append(li);
    if(computerSelected.name === icon.name){
        li.classList.add(`selected`)
    }
})
}
getComputerLayout();

reset.addEventListener(`click`, ()=> {
    userSelected = {};
    computerSelected = {};
    userPoints.innerText = 0;
    computerPoints.innerText = 0;
    result.innerText = "";
    getUserLayout();
    getComputerLayout();
})