const data = JSON.parse(localStorage.getItem("temp"));
console.log(data[0]);
const name = data[0].name;
document.querySelector('title').innerText = `${name}'s List | My Lists | Walmart.com`

const wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

document.getElementById('namelist').innerText = `${name}'s List`;
document.getElementById('lengthlist').innerText = `${wishlist.length} items`;


async function fetchData() {
    const url = `https://walmart-products-gopal.herokuapp.com/groceries`;

    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data.length);

    displayData(data)


}


fetchData();

function displayData(data) {

    let container = document.getElementById('lower-div');
    data.map((element, index) => {
        console.log(element);

        const div = document.createElement('div');

        div.innerHTML = `<div>
        <div>
            <img src=${element.image} alt="" />
        </div>
        <div>
            <span id="title-span">${element.title}</span
    >
    <span style=" font-weight: 900;" >$ ${element.price}</span>
        </div>
    </div>

    <div>
        <div>
            <button id="remove">Remove</button>
        </div>
        <div>
            <div>
                <span>Need:</span>
                <input id="need" style="width: 30px" type="number" value="1" />
            </div>
            <div>
                <button id=">addtocart">Add to cart</button>
            </div>
        </div>
    </div>`


        container.append(div);




    })



}