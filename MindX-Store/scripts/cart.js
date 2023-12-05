const product = JSON.parse(localStorage.getItem("products"));
const cartDT = JSON.parse(localStorage.getItem("cartData"));

console.log(cartDT.length);

const containerDiv = document.getElementById("container");

for(let key of cartDT) {
    if(key.stars == 1) {
        star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>`
      } else if(key.stars == 2) {
        star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                `
      } else if(key.stars == 3) {
        star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                `
      } else if(key.stars == 4) {
        star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                `
      } else if(key.stars == 5) {
        star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                `
      }
   containerDiv.innerHTML += `
   <div class="cart">
        <img src="../assets/products/${key.image}" alt="xD">
        <h3>${key.name}</h3>
        <p>${key.category}</p>
        <span>${key.oldPrice}</span>
        <span>${key.newPrice}</span>
        <!-- <p>${key.description}</p> -->
        <div class="stars">${star}</div>
    </div>
   ` 
}