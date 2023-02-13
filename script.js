console.log("I am attached!!!!  Pass the sammies!");
const docBody = document.querySelector("body");
// ! Bongatello the Code Teaching Squid

/**
 * 
 * * multi line comments go here!
 * 
 * * strings have "" or '' or ``
 */
const characterName = "Borkatello the Code Teaching Squid";
let numArms = 7;
let storyName = `${numArms} Line Code by ${numArms} Squared: A ${characterName}`;
console.log(storyName);
// * flashlight, keyboard, knife, bandaids, cat name tounces, lifetime supply of luck charms, reusable bag
let inventory = ["flashlight", "keyboard", "knife", "bandaids", "cat named tounces", "lifetime supply of luck charms", "reusable bag"];

let subTitle = `${characterName} needs a lift from a ${inventory[4]} to return a ${inventory[0]} in a ${inventory[6]}`;
console.log(subTitle);

function writeElement(tag,msg){
    // * will add any tag and its text to the screen
    let showTag = document.createElement(tag);
    showTag.innerText = msg;
    docBody.appendChild(showTag);
}
writeElement("h1", storyName);
writeElement("h2", subTitle);

//* how do we add something to our array
inventory.push("plastiscene bowie knife");
// * to get an array length we use .length
let numItemsInPocket = inventory.length;
console.log(numItemsInPocket);

/**
 * * patterns in javascript
 * * function functionName(){}
 * * for(start; end; increase/decrease){}
 * 
 * * ol or ul
 * *li
 */
// ! make an unordered list

let myList = document.createElement("ul");
docBody.appendChild(myList);
for(let i=0;i<inventory.length;i++){
    console.log(inventory[i]);
    let myLi = document.createElement("li");
    myLi.innerText = inventory[i];
    myList.appendChild(myLi);
}
//* and now for objects
//* objects use a string as a key
let mySquid = {
    hasBeak: true,
    worldlyBelongings: ["flashlight", "keyboard", "knife", "bandaids", "cat named tounces", "lifetime supply of luck charms", "reusable bag"],
    catchFish: function(){
        console.log("I will catch a fish");
    }
}
mySquid.catchFish();
console.log(mySquid.worldlyBelongings[0]);

let myRand = Math.random();
console.log(myRand);
let squidPresent = false;
// * 80% chance of a humboldt squid attack
if(myRand<=.60 && squidPresent==true){
    console.log("I am being attacked by a squid....with a weird bork thing.");
}else if(myRand<=.6 && squidPresent==false){
    console.log("oh no, it's cthulhu!  My mind..oh my mind");
}else{
    console.log("yaaay, no squid, I am safe!");
}

//*   != not equal  1!=2

/**
 * * = assigns a variable eg. let i=0;
 * * == compares values eg. 1=="1" is true
 * * === compares values and a datatypes eg. 1==="1" false
 */