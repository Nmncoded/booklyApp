let header = document.querySelector(`header`)
header.innerText = `👑 Peoples of GOT`
let ul = document.querySelector(`ul`)
for(let i=0; i<3;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
        if(!(got.houses[i].people[j].name === "Joffrey Baratheon")){
            let li = document.createElement(`li`);
            let div = document.createElement(`div`)
            let imgElm = document.createElement(`img`);
            imgElm.src = got.houses[i].people[j].image;
            let name = document.createElement(`h1`)
            name.innerText = got.houses[i].people[j].name
            let descr = document.createElement(`p`)
            descr.innerText = got.houses[i].people[j].description;
            let btn = document.createElement(`button`)
            btn.innerText = `Learn More!`
            div.append(imgElm,name);
            li.append(div,descr,btn);
            
            ul.append(li);
        }else{
            break;
        }
    }
}