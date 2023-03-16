const productList = document.querySelector(".productContainers");
const cartItems = document.querySelector(".cart-items");

// RENDER PRODUCTS
function renderProductContainers(){
    productContainers.forEach((productContainer)=>{
     productList.innerHTML += `
     <div class = "products">
     <img src="${productContainer.imgSrc}">
     <div class="desc">
         <h4>${productContainer.name}  </h4>
         <div class="star">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-regular fa-star"></i>
         </div>
         <div class="amt">
             <h6>${productContainer.price}</h6>
             <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
         </div>
     </div>
     </div>
     `;
    })
}

renderProductContainers();

// CART ARRAY
let cart = []  

// ADD TO CART

function addToCart(id){
      // CHECK IF PRODUCT ALREADY EXIST IN CART
if (cart.some((item)=>item.id === id)){
    alert("product already exist in cart")
}else{
    let item = productContainers.find((productContainer)=>productContainer.id === id);
  
cart.push({...item,
    quantity:1});
}
updateCart();
}

// UPDATE CART
// function updateCart(){
//     renderCartItems();
//     renderSubtotal();
// }

// RENDER CART ITEMS

// function renderCartItems(){
//     cart.forEach((item)=>{
//         cartItems.innerHTML += `
//         <div class="cart-item">
                 
//         <p><i class="fa-solid fa-xmark"></i></p>
//         <p><img src="${item.imgSrc} " alt=""></p>
//         <p> ${item.name}</p>
//          <p>${item.price}</p>
//        <p><input type="number" value="1"></p>
//      <p>#40,0000</p>

// </div>
//         `
//     })
// }