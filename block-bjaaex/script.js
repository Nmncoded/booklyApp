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
let nameOfSelectedElms;

let newCardsArray = cardsArray.concat(cardsArray).sort(() => Math.random() - 0.5);
function createCardsUI(data = []) {
    data.forEach(card => {
        let li = document.createElement(`li`);
        li.classList.add(`card`);
        li.setAttribute(`data-name`, `${card.name}`);
        
        let i = document.createElement(`i`);
        i.classList.add(`fas`, `fa-${card.name}`, `i`, `hidden`);
        i.setAttribute(`data-name`, `${card.name}`);

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
            console.log(`success`)
        }else{
            selectedElms.forEach(elm => elm.classList.add(`error`));
            setTimeout(() => {
                selectedElms.forEach(elm => {
                    elm.classList.add(`hidden`);
                    elm.classList.remove(`error`)
                });
                
            },2000)
            console.log(`error`);
        }
        selectedElms=[];
        enableHidden();
    };


function handleCardClick(event){
    let target = event.target;
    let name = event.target.dataset.name;
    count = count + 1;
    target.classList.remove(`hidden`);
    selectedElms.push(target);
    if(count === 2){
        disabledHidden();
        cardMatchedOrNot();
        count = 0;
    }
    console.log(nameOfSelectedElms,target,count);
}

rootElm.addEventListener(`click`, handleCardClick);


/* function handleCardClick(event) {
    let target = event.target;
    // if (target.classList.contains(`card`) || target.classList.contains(`fas`)) {
        count = count + 1;
        // if (target.classList.contains(`card`)) {
            target.classList.remove(`hidden`);
            // target.classList.add(`selected`);
            // selectedElms.push(target);
        // } else {
            // target.classList.remove(`hidden`);
            // target.classList.add(`selected`);
            // selectedElms.push(target.parentElement);
        // }
        // matchOrNot();
        console.log(target,count);
    // }
} */
// function matchOrNot() {
//     if (count === 2) {
//         disabledHidden();
//         matchSelected(selectedElms);
//         count = 0;
//         selectedElms=[];
//     }
// }

// function disabledHidden() {
//     rootElm
//         .querySelectorAll(`.hidden`)
//         .forEach(elm => elm.classList.add(`disabled`));
// }

// function enabledHidden() {
//     rootElm
//         .querySelectorAll(`.hidden`)
//         .forEach(elm => elm.classList.remove(`disabled`));
// }

// function matchSelected(elms) {
//     let names = elms.map(elm => elm.dataset.name);
//     if(names[0] === names[1]){
//         elms.forEach(elm => elm.classList.add(`success`));
//     }else{
//         elms.forEach(elm => elm.classList.add(`error`));
//         setInterval(() => {
//             elms.forEach(elm => elm.classList.add(`hidden`));
//             elms.forEach(elm => elm.classList.remove(`error`, `selected`));
//         },1000);
//     };
//     enabledHidden(rootElm);
//     console.log(names);
// }
