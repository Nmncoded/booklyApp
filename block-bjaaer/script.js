let form = document.querySelector(`.container`);
let modalInfo = document.querySelector(`.modal-info`);
let modalOverlay = document.querySelector(`.modal-overlay`);
let modalClose = document.querySelector(`.modal-close`);

let userinfo = {};

function handleFormSubmit(event){
    event.preventDefault();
    userinfo.name = form.elements.text.value;
    userinfo.email = form.elements.email.value;
    userinfo.yourLove = form.elements.gender.value;
    userinfo.chooseColor = form.elements.color.value;
    userinfo.rateAMovie = form.elements.rate.value;
    userinfo.book = form.elements.drone.value;
    if(form.elements.terms.checked === true){
        userinfo.agreeTerms = `👍 You agree to terms and conditions`
    }else{
        userinfo.agreeTerms = `🤨 You Disagree to terms and conditions`
    };
    getClientInformation(userinfo);

    modalOverlay.classList.add(`open`)
}

form.addEventListener(`submit`, handleFormSubmit);

function getClientInformation(user={}){
    modalInfo.innerHTML = "";
    let name = document.createElement(`h1`);
    name.innerText = `Name: ${user.name}`
    let email = document.createElement(`p`);
    email.innerText = `Email: ${user.email}`;
    let yourLove = document.createElement(`p`);
    yourLove.innerText = `YourLove: ${user.yourLove}`
    let color = document.createElement(`p`);
    color.innerText = `Color: ${user.chooseColor}`
    let rating = document.createElement(`p`);
    rating.innerText = `Rating: ${user.rateAMovie}`
    let book = document.createElement(`p`);
    book.innerText = `Book Genre: ${user.book}`
    let terms = document.createElement(`p`);
    terms.innerText = `${user.agreeTerms}`
    
    modalInfo.append(name,email,yourLove,color,rating,book,terms);
}

modalClose.addEventListener(`click`,() =>{
    modalOverlay.classList.remove(`open`);
})