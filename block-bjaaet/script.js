function main(){
    let ul = document.querySelector(`ul`);
    let input = document.querySelector(`#text`);
    let itemsLeft = document.querySelector(`.itemsleft`).firstElementChild;
    let icon = document.querySelector(`.icon i`);
    let clrCmplted = document.querySelector(`.clear`);
    let all = document.querySelector(`.all`);
    let active = document.querySelector(`.active`);
    let completed = document.querySelector(`.completed`);
    let footer = document.querySelector(`footer`);
    let isActive = "all";
    let isclrcmp = "all";

let allTodos = JSON.parse(localStorage.getItem(`todos`)) || [];


/*<li class="li">
    <div class="name">
        <input type="checkbox" />
        <p>Learn about DOM</p>
    </div>
    <span>X</span>
    </li>
*/
// 

function handleInput(event) {
    let value = event.target.value;
    if (event.keyCode === 13 && value !== "") {
        let todo = {
            name: value,
            isDone: false,
        };

        allTodos.push(todo);
        event.target.value = "";
        
        if (showClearBtn(allTodos)) {
            clrCmplted.innerText = `Clear completed`
        } else {
            clrCmplted.innerText = "";
        };
        // createUI(allTodos, ul);
        if(isActive === "active"){
            handleActiveTodos();
        }else if (isActive === "completed"){
            handleCompletedTodos();
        }else{
            handleAllTodos();
        }
        
        localStorage.setItem(`todos`, JSON.stringify(allTodos));
    }
}

function handleDelete(event) {

    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    
    if (showClearBtn(allTodos)) {
        clrCmplted.innerText = `Clear completed`
    } else {
        clrCmplted.innerText = "";
    };
    localStorage.setItem(`todos`, JSON.stringify(allTodos));
    createUI(allTodos, ul);
    addFooter(allTodos);
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !(allTodos[id].isDone);
    
    if (showClearBtn(allTodos)) {
        clrCmplted.innerText = `Clear completed`
    } else {
        clrCmplted.innerText = "";
    }
    localStorage.setItem(`todos`, JSON.stringify(allTodos));
    createUI(allTodos, ul);

}

function createUI(data, rootElm) {
    rootElm.innerHTML = "";
    
    data.forEach((todo, index) => {
        let li = document.createElement(`li`);
        li.classList.add(`li`);
        let div = document.createElement(`div`);
        div.classList.add(`name`);
        let inputCheck = document.createElement(`input`);
        inputCheck.type = "checkbox";

        inputCheck.setAttribute(`data-id`, `${index}`);
        inputCheck.addEventListener(`input`, handleToggle);
        inputCheck.checked = todo.isDone;

        let p = document.createElement(`p`);
        p.innerText = `${todo.name}`;
        let span = document.createElement(`span`);
        span.classList.add(`spantext`);
        span.innerText = "X";

        span.addEventListener(`click`, (event) => {
            handleDelete(event)
        });
        span.setAttribute(`data-id`, `${index}`);

        div.append(inputCheck, p);
        li.append(div, span);

        rootElm.append(li);
    })
    localStorage.setItem(`todos`, JSON.stringify(allTodos));
    addFooter(data);
}

createUI(allTodos, ul);

function changeIsDone(data) {
    return data.every(todo => {
        if (todo.isDone === true) {
            return true
        };
    })
}

function handleIconClick(event) {
    if (changeIsDone(allTodos)) {
        allTodos = allTodos.map(todo => { todo.isDone = false; return todo })
    } else {
        allTodos = allTodos.map(todo => ({ ...todo, isDone: true }))
    }
    
    if (showClearBtn(allTodos)) {
        clrCmplted.innerText = `Clear completed`
    } else {
        clrCmplted.innerText = "";
    }
    localStorage.setItem(`todos`, JSON.stringify(allTodos));
    createUI(allTodos, ul);
}

function itemLeft(data) {
    let cloneTodos = [];
    allTodos.filter(todo => {
        if (todo.isDone === false) {
            cloneTodos.push(todo);
        }
        return itemsLeft.innerText = cloneTodos.length;
    })
}

function showClearBtn(data) {
    return data.some(todo => todo.isDone === true)
}

function handleClrCmpltdClick(event) {
    // let cloneTodos = [];
    allTodos =  allTodos.filter(todo => !todo.isDone) /* bug hai jb hum completed pr click krne ke baad clrcompleted pr click kr rhe hai to vo isDone = false objects return kr rha hai*/
    if (showClearBtn(allTodos)) {
        clrCmplted.innerText = `Clear completed`
    } else {
        clrCmplted.innerText = "";
    }
    localStorage.setItem(`todos`, JSON.stringify(allTodos));
    addFooter(allTodos);
    // createUI(allTodos, ul);
    if(isclrcmp === "completed"){
        handleCompletedTodos();
    }else{
        handleAllTodos();
    }
}

function handleAllTodos(event) {
    isclrcmp = "all";
    isActive = "all";
    allTodos = allTodos.map(todo => todo);
    // addFooter(ul);
    createUI(allTodos,ul);
}


function handleActiveTodos(event){
    isActive = "active";
    let cloneTodos = [...allTodos];
    cloneTodos =  cloneTodos.filter(todo => !todo.isDone)
    createUI(cloneTodos, ul);
}

function handleCompletedTodos(event){
    isclrcmp = "completed";
    isActive = "completed";
    let cloneTodos = [];
    cloneTodos =  allTodos.filter(todo => todo.isDone)
    // footer.classList.remove(`footer`);
    createUI(cloneTodos, ul);
}

function addFooter(data){
if(allTodos.length === 0){
    footer.classList.add(`footer`);
}else{
    footer.classList.remove(`footer`)
}
itemLeft(data);
};
addFooter(allTodos);

input.addEventListener(`keyup`, handleInput);
icon.addEventListener(`click`, handleIconClick);
clrCmplted.addEventListener(`click`, handleClrCmpltdClick);
all.addEventListener(`click`, handleAllTodos);
active.addEventListener(`click`, handleActiveTodos);
completed.addEventListener(`click`, handleCompletedTodos);
}
main();

// let main = [true, false, true, false, false, true, false, false];
// main = main.filter((elm) => (elm === false))
// console.log(main);