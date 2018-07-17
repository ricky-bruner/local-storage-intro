

// start by creating an object
// 

let ricky = {
    lastName: "Bruner",
    favoriteColor: "Blue",
    homeTown: "Nashville"
}


function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("Ricky", ricky);

function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

console.log(loadData("Ricky"));