let form =document.querySelector(`form`);
let usernameError = "";
let nameError = "";
let emailError = "";

function containsANumber(str){
    return  str.value.split("").some((e) => {
        if(Number(e) || ( Number(e) === Number("0") ) ){
            return true;
        }
    });
}


function handleSubmit (event){
    event.preventDefault();
    console.dir(event.target);

    let usernameElm = event.target.elements.username;
    let usernameparentElm = usernameElm.parentElement;
    let nameElm = form.elements.name;
    let nameparentElm = nameElm.parentElement;
    let emailElm = form.elements.email;
    let emailParentElm = emailElm.parentElement;

    if(usernameElm.value.length < 4){
        usernameError = ` Username can't be less than 4 characters`;
        usernameparentElm.classList.add(`error`);
    }


    if ( containsANumber(nameElm))  {
        nameError = `You can't use number in the name field`;
        nameparentElm.classList.add(`error`);
    }

    if ( (emailElm.value.length<6) && ((emailElm.value.includes(`@`))) ) {
        emailError = `Not a valid email`;
        emailParentElm.classList.add(`error`);
    }

    usernameElm.nextElementSibling.innerText = usernameError;
    nameElm.nextElementSibling.innerText = nameError;
    emailElm.nextElementSibling.innerText = emailError;
};

form.addEventListener(`submit`, handleSubmit)