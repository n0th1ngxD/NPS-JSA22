let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let arrMap = arr.map(function(key) {
    return key*2;
})

console.log(arrMap);

let arrMapArrow = arr.map(key => key*2)
console.log("arrMapArrow: ", arrMapArrow);