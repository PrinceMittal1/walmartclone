import {getdata} from "../component/getdata.js"

const fetchingdatafor_pick_of_the_day = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/flash_pick_of_the_day');
    let data = res[1];
    document.getElementById("pick_of_the_day_img").src = data.image_url;
    document.getElementById("pick_of_the_day_price").innerHTML = `Now $${data.price}`;
    document.getElementById("pick_of_the_day_original_price").innerHTML = `$${data.original_price}`;
    document.getElementById("pick_of_the_day_title").innerText = data.title;
}

const fetchingdatafor_second_div_first = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/popular_services');
    document.getElementById("second_div_first_second_second_first_img").src = res[0].image_url;
    document.getElementById("second_div_first_second_second_second_img").src = res[1].image_url;
    document.getElementById("second_div_first_second_second_third_img").src = res[2].image_url;
}
const fetchingdatafor_second_div_second = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/Shop_Rollbacks_and_more');
    document.getElementById("second_div_second_second_first_img").src = res[0].image_url;
    document.getElementById("second_div_second_second_first_p").innerHTML = `upto 35% off on ${res[0].category}`;
    document.getElementById("second_div_second_second_second_img").src = res[1].image_url;
    document.getElementById("second_div_second_second_second_p").innerHTML = `upto 45% off on ${res[1].category}`;
    document.getElementById("second_div_second_second_third_img").src = res[2].image_url;
    document.getElementById("second_div_second_second_third_p").innerHTML = `upto 40% off on ${res[2].category}`;
    document.getElementById("second_div_second_second_fourth_img").src = res[5].image_url;
    document.getElementById("second_div_second_second_fourth_p").innerHTML = `${res[5].category}`;
}
const fetchingdatafor_second_div_third = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/top_find_for_less');
    document.getElementById("second_div_third_second_first_img").src = res[0].image_url;
    document.getElementById("second_div_third_second_first_p").innerHTML = `upto 35% off on ${res[0].category}`;
    document.getElementById("second_div_third_second_second_img").src = res[1].image_url;
    document.getElementById("second_div_third_second_second_p").innerHTML = `upto 40% off on ${res[1].category}`;
    document.getElementById("second_div_third_second_third_img").src = res[2].image_url;
    document.getElementById("second_div_third_second_third_p").innerHTML = `upto 45% off on ${res[2].category}`;
    document.getElementById("second_div_third_second_fourth_img").src = res[5].image_url;
    document.getElementById("second_div_third_second_fourth_p").innerHTML = `${res[5].category}`;
}
const fetchingdatafor_fourth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/no_trick_just_treat');
    document.getElementById("fourth_div_second_first_img").src = res[0].image_url;
    document.getElementById("fourth_div_second_first_p").innerHTML = res[0].title;
    document.getElementById("fourth_div_second_second_img").src = res[1].image_url;
    document.getElementById("fourth_div_second_second_p").innerHTML = res[1].title;
    document.getElementById("fourth_div_second_third_img").src = res[2].image_url;
    document.getElementById("fourth_div_second_third_p").innerHTML = res[2].title;
    document.getElementById("fourth_div_second_fourth_img").src = res[3].image_url;
    document.getElementById("fourth_div_second_fourth_p").innerHTML = res[3].title;
}
const fetchingdatafor_fifth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/for_you');
    document.getElementById("fifth_div_second_first_first_img").src = res[0].image_url;
    document.getElementById("fifth_div_second_first_second_h3").innerHTML = res[0].title;
    document.getElementById("fifth_div_second_first_second_p").innerHTML = res[0].sub_title;
    document.getElementById("fifth_div_second_second_first_img").src = res[1].image_url;
    document.getElementById("fifth_div_second_second_second_h3").innerHTML = res[1].title;
    document.getElementById("fifth_div_second_second_second_p").innerHTML = res[1].sub_title;
    document.getElementById("fifth_div_second_third_first_img").src = res[2].image_url;
    document.getElementById("fifth_div_second_third_second_h3").innerHTML = res[2].title;
    document.getElementById("fifth_div_second_third_second_p").innerHTML = res[2].sub_title;
}
const fetchingdatafor_sixth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/your_favourite_departement');
    console.log(res);
    res.map((el) => {
        let folder = document.getElementById("sixth_div_second");
        let div = document.createElement("div");
        div.setAttribute("class" ,'sixth_div_second_all');
        let img = document.createElement("img");
        img.setAttribute("class" ,'sixth_div_second_all_img');
        img.src = el.image_url;
        let p = document.createElement("p");
        p.setAttribute("class" ,'sixth_div_second_all_p');
        p.innerHTML = el.title;
        div.append(img,p);
        folder.append(div);
    })
}
const fetchingdatafor_nineth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/in_season');
    document.getElementById("nineth_div_second_first_first_img").src = res[0].image_url;
    document.getElementById("nineth_div_second_first_second_h3").innerHTML = res[0].title;
    document.getElementById("nineth_div_second_first_second_p").innerHTML = res[0].sub_title;
    document.getElementById("nineth_div_second_second_first_img").src = res[1].image_url;
    document.getElementById("nineth_div_second_second_second_h3").innerHTML = res[1].title;
    document.getElementById("nineth_div_second_second_second_p").innerHTML = res[1].sub_title;
}
const fetchingdatafor_tenth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/Health_&_Welness');
    document.getElementById("tenth_div_second_first_first_img").src = res[0].image_url;
    document.getElementById("tenth_div_second_first_second_h3").innerHTML = res[0].title;
    document.getElementById("tenth_div_second_first_second_p").innerHTML = res[0].sub_title;
    document.getElementById("tenth_div_second_second_first_img").src = res[1].image_url;
    document.getElementById("tenth_div_second_second_second_h3").innerHTML = res[1].title;
    document.getElementById("tenth_div_second_second_second_p").innerHTML = res[1].sub_title;
}
const fetchingdatafor_eleventh_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/brand_new_for_you');
    document.getElementById("eleventh_div_second_first_first_img").src = res[0].image_url;
    document.getElementById("eleventh_div_second_first_second_h3").innerHTML = res[0].title;
    document.getElementById("eleventh_div_second_first_second_p").innerHTML = res[0].sub_title;
    document.getElementById("eleventh_div_second_second_first_img").src = res[1].image_url;
    document.getElementById("eleventh_div_second_second_second_h3").innerHTML = res[1].title;
    document.getElementById("eleventh_div_second_second_second_p").innerHTML = res[1].sub_title;
    document.getElementById("eleventh_div_second_third_first_img").src = res[2].image_url;
    document.getElementById("eleventh_div_second_third_second_h3").innerHTML = res[2].title;
    document.getElementById("eleventh_div_second_third_second_p").innerHTML = res[2].sub_title;
    document.getElementById("eleventh_div_second_fourth_first_img").src = res[3].image_url;
    document.getElementById("eleventh_div_second_fourth_second_h3").innerHTML = res[3].title;
    document.getElementById("eleventh_div_second_fourth_second_p").innerHTML = res[3].sub_title;
    document.getElementById("eleventh_div_second_fifth_first_img").src = res[4].image_url;
    document.getElementById("eleventh_div_second_fifth_second_h3").innerHTML = res[4].title;
    document.getElementById("eleventh_div_second_fifth_second_p").innerHTML = res[4].sub_title;
    document.getElementById("eleventh_div_second_sixth_first_img").src = res[5].image_url;
    document.getElementById("eleventh_div_second_sixth_second_h3").innerHTML = res[5].title;
    document.getElementById("eleventh_div_second_sixth_second_p").innerHTML = res[5].sub_title;
}
const fetchingdatafor_third_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/Fashion_rollbacks');
    console.log(res);
    res.map((el) => {
        let folder = document.querySelectorAll(".swiper-wrapper")[0];
        let div = document.createElement("div");
        div.setAttribute("class",'swiper-slide');
        let div2 = document.createElement("div");
        div2.setAttribute("class", 'img-box');
        let img = document.createElement("img");
        let div3 = document.createElement("div");
        let add_btn = document.createElement("button");
        add_btn.addEventListener("click", function() {addingyocart(el)});
        add_btn.setAttribute("class", 'add_btn_of_eight_div');
        add_btn.innerHTML = `+ Add`;
        div3.append(add_btn);
        let div4 = document.createElement("div");
        div4.setAttribute("class", 'price_upper_box_of_eight_div');
        let div4_1 = document.createElement("div");
        div4_1.setAttribute("class", 'price_box_of_eight_div');
        let price = document.createElement("h3");
        price.innerHTML = `$${el.price}`;
        div4_1.append(price);
        let div4_2 = document.createElement("div");
        div4_2.setAttribute("class", 'quantity_box_of_eight_div');
        let quantity = document.createElement("p");
        quantity.innerHTML = el.quantity;
        div4_2.append(quantity);
        div4.append(div4_1,div4_2);
        img.src = el.image_url_1;
        let div5 = document.createElement("div");
        div5.setAttribute("class", 'title_box_of_eight_div');
        let title = document.createElement("h3");
        title.innerText = el.title;
        div5.append(title)
        let div6 = document.createElement("div");
        div6.setAttribute("class", 'pickup_deil_box_of_eight_div');
        let div6_1 = document.createElement("div");
        div6_1.setAttribute("class", 'pickup_box_of_eight_div');
        let p_6_1 = document.createElement("p");
        p_6_1.innerText = "Pickup";
        div6_1.append(p_6_1);
        let div6_2 = document.createElement("div");
        div6_2.setAttribute("class", 'deil_box_of_eight_div');
        let p_6_2 = document.createElement("p");
        p_6_2.innerText = "Dilevery";
        // let div7 = document.createElement("div");
        let p_div7 = document.createElement("p");
        p_div7.setAttribute("class", 'heart_icon');
        p_div7.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        p_div7.addEventListener("click", function() {addingtowishlist(el)});
        // div7.append(p_div7);
        div6_2.append(p_6_2);
        div6.append(div6_1,div6_2);
        div2.append(img);
        div.append(div2, div3, div4, div5, div6, p_div7);
        folder.append(div);
    })
}
const fetchingdatafor_eight_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/grocery');
    console.log(res);
    res.map((el) => {
        let folder = document.querySelectorAll(".swiper-wrapper")[1];
        let div = document.createElement("div");
        div.setAttribute("class",'swiper-slide');
        let div2 = document.createElement("div");
        div2.setAttribute("class", 'img-box');
        let img = document.createElement("img");
        let div3 = document.createElement("div");
        let add_btn = document.createElement("button");
        add_btn.addEventListener("click", function() {addingyocart(el)});
        add_btn.setAttribute("class", 'add_btn_of_eight_div');
        add_btn.innerHTML = `+ Add`;
        div3.append(add_btn);
        let div4 = document.createElement("div");
        div4.setAttribute("class", 'price_upper_box_of_eight_div');
        let div4_1 = document.createElement("div");
        div4_1.setAttribute("class", 'price_box_of_eight_div');
        let price = document.createElement("h3");
        price.innerHTML = `$${el.price}`;
        div4_1.append(price);
        let div4_2 = document.createElement("div");
        div4_2.setAttribute("class", 'quantity_box_of_eight_div');
        let quantity = document.createElement("p");
        quantity.innerHTML = el.quantity;
        div4_2.append(quantity);
        div4.append(div4_1,div4_2);
        img.src = el.image_url;
        let div5 = document.createElement("div");
        div5.setAttribute("class", 'title_box_of_eight_div');
        let title = document.createElement("h3");
        title.innerText = el.title;
        div5.append(title)
        let div6 = document.createElement("div");
        div6.setAttribute("class", 'pickup_deil_box_of_eight_div');
        let div6_1 = document.createElement("div");
        div6_1.setAttribute("class", 'pickup_box_of_eight_div');
        let p_6_1 = document.createElement("p");
        p_6_1.innerText = "Pickup";
        div6_1.append(p_6_1);
        let div6_2 = document.createElement("div");
        div6_2.setAttribute("class", 'deil_box_of_eight_div');
        let p_6_2 = document.createElement("p");
        p_6_2.innerText = "Dilevery";
        // let div7 = document.createElement("div");
        let p_div7 = document.createElement("p");
        p_div7.setAttribute("class", 'heart_icon');
        p_div7.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        p_div7.addEventListener("click", function() {addingtowishlist(el)});
        // div7.append(p_div7);
        div6_2.append(p_6_2);
        div6.append(div6_1,div6_2);
        div2.append(img);
        div.append(div2, div3, div4, div5, div6, p_div7);
        folder.append(div);
    })
}

var cart = [
    {
        title:"bjdbjm",
        price:"12"
    },
    {
        title:"prince",
        price:"741"
    },
    {
        title:"shabbir",
        price:"120"
    },
    {
        title:"gopal",
        price:"1633"
    },
    {
        title:"Fresh Cilantro, Bunch",
        price:"9000"
    }
]

function addingyocart(el){
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(el);
    let element = list.find(item => item.title === el.title);
    if(element !== undefined){
        element.quantity = 1 + (+element.quantity);
        localStorage.setItem("cart", JSON.stringify(list));
    }
    else{
        let to_push = {
            title : el.title,
            Image : el.image_url,
            originalPrice : el.original_price,
            price : el.price,
            quantity : 1
        }
        list.push(to_push);
        localStorage.setItem("cart", JSON.stringify(list));
    }
}
function addingtowishlist(el){
    console.log(el);
    const list_wish = JSON.parse(localStorage.getItem("wishlist")) || [];
    let to_push = {
        title: el.title,
        image: el.image_url,
        price: el.price
    }
    list_wish.push(to_push);
    localStorage.setItem("wishlist", JSON.stringify(list_wish));
}
// localStorage.setItem("cart", JSON.stringify(cart));
fetchingdatafor_pick_of_the_day();
fetchingdatafor_second_div_first();
fetchingdatafor_second_div_second();
fetchingdatafor_second_div_third();
fetchingdatafor_fourth_div();
fetchingdatafor_fifth_div();
fetchingdatafor_sixth_div();
fetchingdatafor_third_div();
fetchingdatafor_eight_div();
fetchingdatafor_nineth_div();
fetchingdatafor_tenth_div();
fetchingdatafor_eleventh_div();

// wishlist =[
//     {
//         title: "",
//         image: "",
//         price: ""
//     }
// ]