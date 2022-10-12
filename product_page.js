let Products = [];
console.log(Products);
async function getdata() {
  console.log("getdata");

  let url = "https://walmart-products-gopal.herokuapp.com/groceries"
  let res = await fetch(url);
  let res2 = await res.json();
  Products = res2
  console.log(Products);
  showProducts(Products)
}
getdata();

document.getElementById("g-coffee").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "cofee";
  });

  showProducts(data);
});

document.getElementById("g-freshfood").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "fresh produce";
  });

  showProducts(data);
});

document.getElementById("g-meat").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "Meat & Seafood";
  });

  showProducts(data);
});

document.getElementById("g-snaks").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "Snacks";
  });

  showProducts(data);
});

document.getElementById("candy").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "Halloween food and candy";
  });

  showProducts(data);
});
let main = document.getElementById("lower");
function showProducts(data) {
  main.innerHTML = "";
  data.forEach((product, index) => {
    const { id, image, title, price, category } = product;
    const parentEl = document.createElement("div");
    parentEl.setAttribute("id", "g-products_tab");
    parentEl.innerHTML = `
      <div id="g-img-main-div">
      <div id="g-image-div">
        <img id="g-img" src="${image}" alt="">

     </div>
      <div onclick="addToWishList(${index})" id="wish-button-div">
    <img id="g-heart-image" src="https://t4.ftcdn.net/jpg/02/59/94/23/360_F_259942375_MICoy5xhFf02fsQv8MQUCMBbDnu1FeeR.webp"  alt="">
        </div>
      
    </div>
    
        <div id="cart-button-div">
            <button onclick="addToCart(${index})"   id="g-cart-button">+ADD</button>
        </div>
        

   

    <div id="g-price-div">
        <p>$${price}</p>
    </div>

    <div id="g-title-div">
        <p>${title}</p>
    </div>
            `;
    main.appendChild(parentEl);
  });
}
// 


function addToCart(index) {

  var cartArray = JSON.parse(localStorage.getItem("Cart")) || [];

  cartArray.push(Products[index]);


  localStorage.setItem("Cart", JSON.stringify(cartArray))
}



function addToWishList(i){
var WishArray = JSON.parse(localStorage.getItem("WishList")) || [];

  WishArray.push(Products[i]);
 
  


  localStorage.setItem("WishList", JSON.stringify(WishArray))
}



