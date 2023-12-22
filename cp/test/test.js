let menu = [
    {
        name: "rau xào",
        keyWord: "rau xao",
    },
    {
        name: "thịt luộc",
        keyWord: "thit luoc",
    },
    {
        name: "gà rán",
        keyWord: "ga ran",
    }
];

// localStorage.setItem("list", JSON.stringify(list1));
localStorage.setItem("menu", JSON.stringify(menu));

let list = JSON.parse(localStorage.getItem("list"));
console.log("list: ", list);

let i = 0;

let awnser = prompt("C,R,U,D");

if(awnser == "C") {
    let a1 = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
    for(let i = 0; i < menu.length; i++) {
        if(a1 == menu[i].keyWord) {
            list.push({
                name: menu[i].name,
                key: menu[i].keyWord
            });
            console.log("list: ", list);
            localStorage.setItem("list", JSON.stringify(list));
        }
    }
} else {
    if(awnser == "R") {
        for(let i = 0; i < list.length; i++) {
            alert(list.map((printList) => list[i].name).join(", "));
        }
    }
}