let cartItems = [
{
    image:"https://i5.walmartimages.com/asr/352dfe5e-b29b-4a46-942d-27a1a018647d.58d132f1704bf5761cb3ca6593819784.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    title:"Water Bottle",
    price:"80",
},
{
    image:"https://i5.walmartimages.com/asr/b449a110-32f2-445a-8135-71fa1b76351a.40a18d568a6a33163dc4adfbc2ddb625.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    title:"Cereals",
    price:"200",
},
{
    image:"https://i5.walmartimages.com/asr/f4d22e0b-cd3b-4871-8403-35b50f6ee955.83d185b4db58ea9ec67419f82c87138f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    title:"Peanut Butter",
    price:"179",
}
]

localStorage.setItem("cart",JSON.stringify(cartItems));

let items = JSON.parse(localStorage.getItem("cart")) || [];
console.log(items);


let displayCartData = (arr)=>{
document.getElementById("cart_items").innerText = "";
arr.map((el,index)=>{
  let div = document.createElement("div");
  div.id = "item"
  let image = document.createElement("img");
  image.src = el.image;
  let title = document.createElement("h2");
  title.innerText = el.title;
  let price = document.createElement("h3");
  price.innerText = `Rs: ${el.price}`;
  div.append(image,title,price);
  document.getElementById("cart_items").append(div);
})
}

displayCartData(items);