// let a = "Đây là biến a";
// let b = 100;


// ///
// //save


// localStorage.setItem("a", JSON.stringify(a));

// localStorage.setItem("b", JSON.stringify(b));


// ///
// //get

// console.log(
//     JSON.parse(localStorage.getItem("a"))
// );

// console.log(
//     JSON.parse(localStorage.getItem("b"))
// );

let users = [
    {
        name: "Ngần",
        age: 30,
        job: "OP",
    },
    {
        name: "Trọng",
        age: 20,
        job: "Security",
    }
]

localStorage.setItem("users", JSON.stringify(users));

console.log(
    JSON.parse(localStorage.getItem("users"))[0].name + " " + (JSON.parse(localStorage.getItem("users"))[0].job)
);
console.log(
    JSON.parse(localStorage.getItem("users"))[1].name + " " + (JSON.parse(localStorage.getItem("users"))[1].job)
);


//////////////
console.log("Upper 30");

// usersList = JSON.parse(localStorage.getItem("users"));
// for(let i = 0; i < usersList.length; i++) {
//     if(usersList[i].age >= 30) {
//         console.log(usersList[i].name);
//     }
// }

for (let key of users) {
    // console.log(key.job);
    if(key.age >= 25) {
        console.log(key.name);
    }
}