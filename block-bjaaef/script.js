function main(){
let p = document.querySelector(`header p`)
p.innerText = `👑 People of GOT`;
let inputSearch = p.nextElementSibling;
let ul = document.querySelector(`.ul`);
let allHouseNames = document.querySelector(`.all-house-names`);
let styleTag = "";
var elem = React.createElement;

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

// function elem(type,attr = {}, ...children){
//     let element = document.createElement(type);
//     for(let key in attr){
//         if(key.startsWith(`data-`)){
//             element.setAttribute(key,attr[key])
//         }else if (key.startsWith(`on`)){
//             let eventType = key.replace("on", "").toLowerCase();
//             element.addEventListener(eventType,attr[key])
//         }else{
//             element[key] = attr[key];
//         }
//     }
//     children.forEach(child => {
//         if(typeof child === 'object'){
//             element.append(child)
//         }
//         if(typeof child === 'string'){
//             let node = document.createTextNode(child);
//             element.append(node);
//         }
//     })
//     return element;
// }



function allPeopleCards(data = allHousesPeople) {
    // ul.innerHTML = "";
    let ui = data.map(person => {
        let li = elem(`li`,{},
        elem(`div`, {
            className: `div-elm`,
        },
        elem(`img`, {
            src : person.image,
        }),
        elem(`h1`,{},person.name)
        ),
        elem(`p`, {
            className: `p`,
        },person.description),
        elem(`button`,{},`Learn More!`)
        );
        return li;
        
    })
    ReactDOM.render(ui,ul);
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
}
main();
// let demo = got.houses.reduce((acc, cv) => {
//     acc = acc.concat(cv.people);
//     return acc
// }, []);
// console.log(demo);


