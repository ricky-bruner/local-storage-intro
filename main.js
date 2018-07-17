

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

// BEGIN MEG'S NOTES FROM 7/17 LECTURE

let table = {
    legs: 4,
    maker: "Target",
    color: "brown",
    height: "12'",
    material: "wood",
    move: function(movement){
        console.log(`This ${this.color} table will ${movement}!`);
    }
};

table.move("dance");

table.color = "black";
table.move("dance");



const sweetFactory = function(topping){
    const sweet = Object.create({}, {
        topping: {
            value: topping
        },
        move: {
            value: function(arg){
                console.log(`The sweet will ${arg}`);
            }
        }
    });
    return sweet;
};

let arrayOsweets = [];

arrayOsweets.push(sweetFactory("chocolate"), sweetFactory("vanilla"));

console.log(arrayOsweets);



// END 7/17 LECTURE NOTES

