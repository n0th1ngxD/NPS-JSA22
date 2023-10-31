// // let i = 1;

// // do {
// //     console.log(i);
// //     i++;
// // }
// // while (i <= 1000);

// // for (let i = 1 ; i < 11 ; i++) {
// //     console.log(i);
// // }

// let n = Number(prompt("kkk"));
// let sum = 1;
// // for (let i = 1; i <= n; i++) {
// //     // console.log(i);
    
// //     sum = sum + i;
// //     console.log(sum);
// //     if(i = n) {
// //         console.log(sum);
// //     }   
// // }

// while (i <= n) {
//     i++;
    
//     console.log();
// }


// b1

// let n = Number(prompt("k"));
// console.log(n);

// let i = 1;
// let sum = 0;
// while (i <= n) {
//     sum = sum + i;
//     i++;
// }

// console.log("sum: ", sum);



// // b2
// let n = Number(prompt("k"));
// // console.log(n);

// let i = 1;
// while(i <= n) {
//     if(i%2 == 0) {
//         console.log(i);
//     }
//     i++;
// }



// //array = mang / danh sach
// let shoppingList = ["1 + 1 = 3", "thịt", "cá"];
// console.log(shoppingList.length);
// console.log(shoppingList[0]);
// console.log(shoppingList);

// shoppingList[2] = "tihs";
// console.log(shoppingList);
// shoppingList.push("tom");
// shoppingList.unshift("gia vi")
// console.log("shoppingList: ", shoppingList);
// shoppingList.pop();
// shoppingList.shift();
// console.log("shoppingList: ", shoppingList);


let Dog = {
    name: "John",
    age: 999999999999999,
    type: "husky",
    origin: "siberia",
    vaccinated: "full",

    walk() {
        alert("Đi bộ đê");
    },

    bark() {
        alert("gâu gâu");
    },

    eat() {
        alert("xì xụp");
    }
}

console.log(Dog);