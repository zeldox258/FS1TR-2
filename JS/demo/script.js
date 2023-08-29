let name = document.getElementById("name")
let count = document.getElementById("count")
let add = document.getElementById("add")
let list = document.getElementById("list")
let rent = document.getElementById("rent")

let LStorage = JSON.parse(localStorage.getItem("cars"))
let liArr = []

const listing = () => {
    liArr.map((a) => {
        const newLi = document.createElement("li");
        newLi.id = a.name+1;

        const textLi = document.createTextNode(`Name:${a.name} Count:${a.count}`);
        newLi.appendChild(textLi);
        list.appendChild(newLi);
        let newButton = document.createElement("button")
        newButton.innerHTML = "rent"
        newButton.id = a.name
        list.appendChild(newButton)
        let rent = document.getElementById(a.name);
        rent.addEventListener("click", () => {


            for(let i = 0 ; i < liArr.length;i++){
                if(liArr[i].name == a.name){
                    let textVlue = document.getElementById(a.name+1);
                    liArr[i].count--;
                    if(liArr[i].count == 0){
                        list.innerHTML = "";
                        liArr.splice(i, 1);
                        listing();
                        return;
                    }
                    textVlue.innerHTML = `Name:${liArr[i].name} Count:${liArr[i].count}`
                }
            }


        })
    })
}



let addFunc = () => {

    let newLi = document.createElement("li")
    newLi.id = name.value+1;
    let newButton = document.createElement("button")
    newButton.innerHTML = "rent"
    newButton.id = name.value

    let textLi = document.createTextNode(`Name:${name.value} Count:${count.value}`)
    newLi.appendChild(textLi)
    list.appendChild(newLi)
    list.appendChild(newButton)

    let rent = document.getElementById(name.value);

    rent.addEventListener("click", () => {


        for(let i = 0 ; i < liArr.length;i++){
            if(liArr[i].name == rent.id){
                let textVlue = document.getElementById(rent.id+1);
                liArr[i].count--;
                if(liArr[i].count == 0){
                    list.innerHTML = "";
                    liArr.splice(i, 1);
                    listing();
                    return;
                }
                textVlue.innerHTML = `Name:${liArr[i].name} Count:${liArr[i].count}`
            }
        }

    })

    liArr.push({
        name: name.value,
        count: count.value,
    })
    //localStorage.setItem("cars", JSON.stringify(liArr))
    
}
/*
if (LStorage !== null) {
    liArr = [...LStorage]
    listing()
}
*/
add.addEventListener("click", addFunc)