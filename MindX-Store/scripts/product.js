let getCategories = JSON.parse(localStorage.getItem("categories"));
console.log("getCategories: ", getCategories);

const divCategories = document.getElementById("categories");
for(let key of getCategories) {
  divCategories.innerHTML += `
  <div class="category-card">
          <a href="">
            <img src="assets/${key.image}" alt="hehe">
          </a>
          <div class="category-container">
            <a href="">
              <h3>${key.name}</h3>
            </a>
            <a href="">
              <h3>${key.quantity}</h3>
            </a>
          </div>
        </div>
  `
}






const divProducts = document.querySelector("#products");

for(let key of products) {
    divProducts.innerHTML += `
    <div id="products">
        <div class="card">
          <div class="image-container">
            <img src="../assets/${key.image}" alt="xD">
            <div class="cart-action">
              <button><i class="fa-solid fa-cart-shopping"></i></button>
              <button><i class="fa-regular fa-eye"></i></button>
              <button><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>
          <div class="container">
            <p>${key.category}</p>
            <h5><strong>${key.name}</strong></h5>
            <div class="stars">
              <i class="fa-solid fa-star" style="color: #f7bc00"></i>
              <i class="fa-solid fa-star" style="color: #f7bc00"></i>
              <i class="fa-solid fa-star" style="color: #f7bc00"></i>
              <i class="fa-solid fa-star" style="color: #f7bc00"></i>
              <i class="fa-solid fa-star" style="color: #f7bc00"></i>
            </div>
            <h6>
              <span class="old-price">${key.oldPrice}</span>
              <span><strong>${key.newPrice}</strong></span>
            </h6>
          </div>
        </div>
      </div>`
}