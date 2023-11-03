//1

let list = ["grape", 15, "egg", 5, "banana", 10];
let grape = [list[0], list[1]];
console.log(grape);
let egg = [list[2], list[3]];
console.log(egg);
let banana = [list[4], list[5]];
console.log(banana);

console.log("");

console.log("I have " + grape[1] + " " + grape[0]);
console.log("I have " + egg[1] + " " + egg[0]);
console.log("I have " + banana[1] + " " + banana[0]);



//2

console.log("");

let fruits = 0;
let numbers = 1;
while (fruits <= list.length && numbers <= list.length) {
    console.log(list[fruits] + " " + list[numbers]);
    fruits = fruits + 2;
    numbers = numbers + 2;
}



//3

console.log("");


var myDog = {
    

    "name": "Ngáo",

    "legs": 4,

    "friends": ["everything!"]
}

console.log(myDog);

delete myDog.friends;
myDog.name = "Husky";
myDog.color = "Brown";

console.log(myDog);