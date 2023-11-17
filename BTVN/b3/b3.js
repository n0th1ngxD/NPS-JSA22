// const ad = document.createElement("div");
// ad.classList.add("ad");
// ad.innerHTML = "ad"
// document.body.appendChild(ad);



let j = "";
function numberOneTriangle() {
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