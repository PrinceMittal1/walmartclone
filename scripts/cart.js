let cartItems = [
{
    image:"https://i5.walmartimages.com/asr/352dfe5e-b29b-4a46-942d-27a1a018647d.58d132f1704bf5761cb3ca6593819784.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    title:"Water Bottle",
    price:"80",
    quantity: 1,
},
{
    image:"https://i5.walmartimages.com/asr/b449a110-32f2-445a-8135-71fa1b76351a.40a18d568a6a33163dc4adfbc2ddb625.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    title:"Cereals",
    price:"200",
    quantity: 1,
},
{
    image:"https://i5.walmartimages.com/asr/f4d22e0b-cd3b-4871-8403-35b50f6ee955.83d185b4db58ea9ec67419f82c87138f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    title:"Peanut Butter",
    price:"179",
    quantity: 1,
}
]

localStorage.setItem("cart",JSON.stringify(cartItems));

let items = JSON.parse(localStorage.getItem("cart")) || [];
console.log(items);

if(items.length==0){
    window.location.href = "./emptycart.html"
}

let totalAmount = 0;

for(let i =0;i<items.length;i++){
    totalAmount += items[i].quantity*items[i].price;
}

document.getElementById('total_amount').innerText = `Rs. ${totalAmount}`
  document.getElementById('total').innerText = `Rs. ${totalAmount}`


let displayCartData = (arr)=>{
document.getElementById("cart_items").innerText = "";
arr.map((el,index)=>{
    console.log(el)
    let div = document.createElement("div");
    div.className = "item_data";
    let imgDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    image.alt = el.title;
    imgDiv.append(image);
    let productDiv = document.createElement("div");
    let name = document.createElement("h4");
    name.innerText = el.title;
    let price = document.createElement("p");
     price.innerText = `Rs: ${el.quantity*el.price}`;
    productDiv.append(name,price);
    let divBox = document.createElement("div");
    let divContainer = document.createElement("div");
    divContainer.className = "divContainer";
    let decre = document.createElement("button");
    decre.innerText = "-";
    decre.addEventListener("click",()=>{
        el.quantity = decrementValue(index,el.quantity);
        quantity.value = el.quantity;
        price.innerText = `Rs: ${el.quantity*el.price}`;
        localStorage.setItem("cart",JSON.stringify(items));
        CalculateTotalCartAmount();
    });
    let quantity = document.createElement("input");
    quantity.value =el.quantity;
     quantity.style.width = "10%";

     let incre = document.createElement("button");
    incre.innerText = "+"
    incre.addEventListener("click",()=>{
        el.quantity =  incrementValue(index,el.quantity);
        quantity.value = el.quantity
        price.innerText = `Rs: ${el.quantity*el.price}`;
        localStorage.setItem("cart",JSON.stringify(items));
        calculateTotalCartAmount();
    });

    divContainer.append(decre,quantity,incre);

     let remove = document.createElement("button");
    remove.innerText = "Delete from Cart";
    remove.addEventListener("click",function(){
        dltFromCart(index);
    });
    divBox.append(divContainer,remove);
    div.append(imgDiv,productDiv,divBox);
    document.getElementById("cart_items").append(div);
})
}

displayCartData(items);

function dltFromCart(index){
    items.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(items));
     calculateTotalCartAmount()

    displayCartData(items);
}

function decrementValue(index, itemQuantity){
    --itemQuantity;
    if(itemQuantity===0){
        items.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(items));
        displayCartData(items);
    }
    return itemQuantity;
  }

  function incrementValue(index, itemQuantity){
    return ++itemQuantity;
  }

  function calculateTotalCartAmount(){
    totalAmount=0;
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.forEach(element => {
    totalAmount+=element.quantity*+element.price
  });

  document.getElementById('total_amount').innerText = `Rs. ${totalAmount}`
  document.getElementById('total').innerText = `Rs. ${totalAmount}`
  }

  document.getElementById('coupon_btn').addEventListener("click",function(){
    applyCoupon()
  })

  let couponApplied = false;

  function applyCoupon(){
    let couponCode = document.getElementById('Coupon_Code').value
    if(couponApplied==true){
        alert("Coupon already applied");
    }
    if(couponCode=="masai30"&&couponApplied==false){
        totalAmount=totalAmount - ((totalAmount/100)*30);
    }else if(couponCode == "firstuser"&&couponApplied==false){
        totalAmount=totalAmount-250;
    }
    couponApplied=true;
    document.getElementById('total_amount').innerText = `Rs. ${totalAmount}`
  document.getElementById('total').innerText = `Rs. ${totalAmount}`
  }


  document.getElementById("checkout").addEventListener("click",()=>{
    window.location.href = "checkout.html";
  })