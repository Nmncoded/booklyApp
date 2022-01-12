let ul = document.querySelector(`.boxes1`)
let allBoxes = document.querySelectorAll(`.boxes1 li`);

function changeRandomNum(max){
    return Math.floor(Math.random()*max)
}

allBoxes.forEach((box) => {
    box.addEventListener(`click`,function(Event){
        Event.target.innerText = changeRandomNum(12);
        setTimeout(() => {
        Event.target.innerText = "";
        }, 1000);
    })
})

let secondBox = document.querySelector(`.second`);
allBoxes = document.querySelectorAll(`.second li`);



allBoxes.forEach((box,index) => {
    box.setAttribute(`data-num`,index+1)
})
secondBox.addEventListener(`click`, (Event) => {
    let num = Event.target.dataset.num
    Event.target.innerText = num;
    setTimeout(() => {
        Event.target.innerText = "";
    }, 1000);
})