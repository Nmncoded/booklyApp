/* <li class="card">
        <i class="fas fa-paw"></i> 
      </li> */

const cardsArray = [
    {
        "name": "paw",
        "isSelected": false,
        "isMatched": false,
    },
    {
        "name": "hippo",
        "isSelected": false,
        "isMatched": false,
    },
    {
        "name": "dog",
        "isSelected": false,
        "isMatched": false,
    },
    {
        "name": "cat",
        "isSelected": false,
        "isMatched": false,
    },
    {
        "name": "crow",
        "isSelected": false,
        "isMatched": false,
    },
    {
        "name": "dove",
        "isSelected": false,
        "isMatched": false,
    },
    {
        "name": "horse",
        "isSelected": false,
        "isMatched": false,
    },
    {
        "name": "rupee-sign",
        "isSelected": false,
        "isMatched": false,
    },
];

let rootElm = document.querySelector(`.ul`);
let count = 0;
let selectedElms = [];
let countForTimer = 0;
let nameOfSelectedElms;
let countMoves = document.querySelector(`.count-moves`);
let minute = document.querySelector(`.min`);
let timer = 0;
let timeIntervalID;
let second = document.querySelector(`.sec`);
let restartBtn = document.querySelector(`.restart i`);
let newCardsArray = [];
let elmforTimer = [];

function mixedArrayWith16Cards(){
    newCardsArray = cardsArray.concat(cardsArray).sort(() => Math.random() - 0.5);
    return newCardsArray;
}
mixedArrayWith16Cards();


function createCardsUI(data = []) {
    rootElm.innerHTML = "";
    data.forEach(card => {
        let li = document.createElement(`li`);
        li.classList.add(`card`);
        li.setAttribute(`data-name`, `${card.name}`);
        
        let i = document.createElement(`i`);
        i.classList.add(`fas`, `fa-${card.name}`, `i`, `hidden`);
        i.setAttribute(`data-name`, `${card.name}`);
        elmforTimer.push(i);
        li.append(i);
        
        rootElm.append(li);
    })
}
createCardsUI(newCardsArray);

function disabledHidden() {
        rootElm
            .querySelectorAll(`.hidden`)
            .forEach(elm => elm.classList.add(`disabled`));
    }
    function enableHidden() {
        rootElm
            .querySelectorAll(`.hidden`)
            .forEach(elm => elm.classList.remove(`disabled`));
    }


    function cardMatchedOrNot(){
        nameOfSelectedElms = selectedElms.map(elm => elm.dataset.name);
        if(nameOfSelectedElms[0] === nameOfSelectedElms[1]){
            selectedElms.forEach(elm => elm.classList.add(`success`));
            if(setTimerout()){
                clearTimeout(timeIntervalID);
                elmforTimer = [];
            }
            selectedElms=[];
            nameOfSelectedElms= [];
            enableHidden();
            // console.log(`success`)
        }else{
            selectedElms.forEach(elm => elm.classList.add(`failed`));
            setTimeout(() => {
                selectedElms.forEach(elm => {
                    elm.classList.add(`hidden`);
                    elm.classList.remove(`failed`)
                    selectedElms=[];
                    nameOfSelectedElms= [];
                    enableHidden();
                });
                
            },1500)
            // console.log(`error`);
        }
    };



function handleCardClick(event){
    timer = timer + 1;
    if(timer === 1){
        startTimer();
    }
    let target = event.target;
    // let name = event.target.dataset.name;
    if(target.classList.contains(`disabled`) || !target.classList.contains(`hidden`) ) return ;
    count = count + 1;
    target.classList.remove(`hidden`);
    selectedElms.push(target);
    if(count === 2){
        countMoves.innerText = Number(countMoves.innerText) + 1;
        disabledHidden();
        cardMatchedOrNot();
        count = 0;
    }
    
}

function handleRestartClick(event) {
    countMoves.innerText = 0;
    second.innerText = 0;
    countForTimer = 0;
    timer = 0;
    elmforTimer = [];
    clearInterval(timeIntervalID);
    minute.innerText = 0;
    enableHidden();
    mixedArrayWith16Cards();
    createCardsUI(newCardsArray);
}

function startTimer(){
    timeIntervalID =  setInterval(() => {
        second.innerText = Number(second.innerText) + 1;
        countForTimer = countForTimer + 1;
        if(countForTimer === 60){
            second.innerText = 0;
            countForTimer = 0;
            minute.innerText = Number(minute.innerText) + 1;
        }
    },1000);
}


function setTimerout(data = elmforTimer){
    return data.every(elm => (elm.classList.contains(`success`)));
}

rootElm.addEventListener(`click`, handleCardClick);
restartBtn.addEventListener(`click`, handleRestartClick);

