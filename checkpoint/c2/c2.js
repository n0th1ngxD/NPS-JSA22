// n = Number(prompt("n: "));
// symbol = "";
// // let triangle = [];
// for(let i = 0; i <= n; i++) {
//     triangle = document.createElement("div");
//     for(let j = 0; j <= n; j++) {
//         symbol = symbol + "*";
//         triangle.innerHTML = symbol;
//     }
// }
// // console.log(triangle);

// document.appendChild(triangle);


n = prompt("n: ");
numberOneTriangle(n);

let j = "";
function numberOneTriangle(i) {
    for(let i = 0 ; i < 5 ; i++) {
        column = document.createElement("p");
        column.classList.add("col");
        
        for(let jj = 0 ; jj < 5 ; jj++) {
            j = j + "1";
            column.innerHTML = j;
        }
        console.log("done!");
        document.body.appendChild(column);
    }
}