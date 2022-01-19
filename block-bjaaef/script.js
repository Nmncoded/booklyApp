let p = document.querySelector(`header p`)
p.innerText = `👑 People of GOT`;
let inputSearch = p.nextElementSibling;
let ul = document.querySelector(`.ul`);
let allHouseNames = document.querySelector(`.all-house-names`);
let styleTag = "";

let allHouses = got.houses.map(house => house);
let allHousesPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc
}, []);




function houseNameTags(data = allHouses) {
    allHouseNames.innerHTML = "";
    data.forEach(house => {
        let houseName = document.createElement(`li`);
        houseName.classList.add(`li-style`);
        houseName.innerText = `${house.name}`;

        if( house === styleTag ){
            houseName.classList.add(`style-tag`);
        }else if (styleTag === "input"){
            houseName.classList.remove(`style-tag`);
        }
        

        houseName.addEventListener(`click`, (event) => {
            data.find(house => {
                if (event.target.innerText === house.name) {
                    let clonedHouse = house.people;
                    styleTag = house;
                    houseNameTags(allHouses);
                    allPeopleCards(clonedHouse);
                }
            })
        });

        allHouseNames.append(houseName);
    })
};
houseNameTags();



function allPeopleCards(data = allHousesPeople) {
    ul.innerHTML = "";
    data.forEach(person => {
        let li = document.createElement(`li`);
        let divElm = document.createElement(`div`);
        divElm.classList.add(`div-elm`)
        let imgElm = document.createElement(`img`);
        imgElm.src = person.image;
        let name = document.createElement(`h1`)
        name.innerText = person.name
        let descr = document.createElement(`p`)
        descr.classList.add(`p`)
        descr.innerText = person.description;
        let btn = document.createElement(`button`)
        btn.innerText = `Learn More!`
        divElm.append(imgElm, name);
        li.append(divElm, descr, btn);

        ul.append(li);
    })
};
allPeopleCards();

function handleInputSearch(event) {
    styleTag = "input";
    let value = event.target.value;
    let clonedPerson = allHousesPeople.filter(person => (person.name.toLowerCase().includes(`${value.toLowerCase()}`)))
    allPeopleCards(clonedPerson);
    houseNameTags(allHouses);
}


inputSearch.addEventListener(`input`, handleInputSearch);

// let demo = got.houses.reduce((acc, cv) => {
//     acc = acc.concat(cv.people);
//     return acc
// }, []);
// console.log(demo);