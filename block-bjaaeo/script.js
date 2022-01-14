let display = document.querySelector(`.display`);
let allButtons = document.querySelectorAll(`.btn`)
let initialValue = 0
function handleClick(Event){
    if(Event.target.classList.contains(`equals`)){
        display.innerText = eval(display.innerText)
        return;
    }
    if(Event.target.classList.contains(`clear`)){
        display.innerText = initialValue;
        return;
    }
    if(display.innerText == initialValue){
        display.innerText = Event.target.innerText;
    }else{
        display.innerText += Event.target.innerText; 
    }
}
allButtons.forEach(button => {
    button.addEventListener(`click`,handleClick)
})