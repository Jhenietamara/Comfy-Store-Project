// DROPDOWN
const openMenu = document.querySelector(".hamburger-btn");
const dropDown = document.querySelector(".dropdown-content");

openMenu.addEventListener('click', show);

function show(){
    dropDown.style.display = 'flex';
}

// LIGHT & DARK MODE JS
const lightMode = document.querySelector(".fa-moon");
const darkMode = document.querySelector(".fa-sun");
const body = document.body;

lightMode.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    lightMode.classList.toggle("fa-moon");
    lightMode.classList.toggle('fa-sun');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light', lightMode)
    } else{
        localStorage.setItem('theme', 'dark', darkMode)
    }
});

// SAVE PREVIOUSLY SELECTED THEME TO LOCAL STORAGE
document.addEventListener('DOMContentLoaded', () => {
    const prevTheme = localStorage.getItem('theme');
    if (prevTheme){
        body.classList.add(prevTheme + '-mode');
    } else{
        body.classList.add('dark-mode');
    }
});


// DISPLAYEACH SELECTED CARD INDIVIDUALLY BASED ON ID
let searchParams = new URLSearchParams(window.location.search);
let productId = searchParams.get("id");

let productContainer = document.querySelector(".prod-info-grid");

// ARRAY OF PRODUCT CARDS
const cards = [
    {
        id: "product-1",
        img: "Images/lantern.jpeg",
        label: "Avant-Garde Lamp",
        price: 179.99,
        link: "prod-details.html",
        company: "Modenza ,All",
        categories: "Table, Kids, all",
    },

    {
        id: "product-2",
        img: "Images/chic-chair.webp",
        label: "Chic Chair",
        price: 339.99,
        link: "prod-details.html",
        company: "Luxora ,All",
        categories: "Chair, all",
    },

    {
        id: "product-3",
        img: "Images/green-couch.jpeg",
        label: "Coffee Table",
        price: 179.99,
        link: "prod-details.html",
        company: "Modenza ,All",
        categories: "Table, all",
    },

    {
        id: "product-4",
        img: "Images/comfy-bed.jpeg",
        label: "Comfy Bed",
        price: 129.99,
        link: "prod-details.html",
        company: "Homestead ,All",
        categories: "Bed, all",
    },

    {
        id: "product-5",
        img: "Images/contemporary-sofa.webp",
        label: "Contemporary Sofa",
        price: 159.99,
        link: "prod-details.html",
        company: "Comfora ,All",
        categories: "Sofa, all",
    },

    {
        id: "product-6",
        img: "Images/cutting-edge-bed.jpeg",
        label: "Cutting Edge Bed",
        price: 84.99,
        link: "prod-details.html",
        company: "Homestead ,All",
        categories: "Bed, all",
    },

    {
        id: "product-7",
        img: "Images/futuristic-shelves.jpeg",
        label: "Fututistic Shelves",
        price: 94.99,
        link: "prod-details.html",
        company: "Luxora ,All",
        categories: "Table, Kids, all",
    },

    {
        id: "product-8",
        img: "Images/glass-table.jpeg",
        label: "Glass Table",
        price: 159.99,
        link: "prod-details.html",
        company: "Modenza ,All",
        categories: "Table, all",
    },

    {
        id: "product-9",
        img: "Images/maroon-king-bed.webp",
        label: "King Bed",
        price: 189.99,
        link: "prod-details.html",
        company: "Homestead ,All",
        categories: "Bed, all",
    },

    {
        id: "product-10",
        img: "Images/lounge-chair.webp",
        label: "Lounge Chair",
        price: 259.99,
        link: "prod-details.html",
        company: "Luxora ,All",
        categories: "Chair, all",
    },


    {
        id: "product-11",
        img: "Images/minimalist-shelve.jpeg",
        label: "Minimalist Shelves",
        price: 439.99,
        link: "prod-details.html",
        company: "Artifex ,All",
        categories: "Table, Kids, all",
    },

    {
        id: "product-12",
        img: "Images/modern-sofa.webp",
        label: "Modern Sofa",
        price: 299.99,
        link: "prod-details.html",
        company: "Comfora ,All",
        categories: "Sofa, all",
    },

    {
        id: "product-13",
        img: "Images/hero2.webp",
        label: "Modern Table",
        price: 389.99,
        link: "prod-details.html",
        company: "Modenza ,All",
        categories: "Table, all",
    },

    {
        id: "product-14",
        img: "Images/reclining-sofa.jpeg",
        label: "Reclining Sofa",
        price: 329.99,
        link: "prod-details.html",
        company: "Comfora ,All",
        categories: "Sofa, all",
    },

    {
        id: "product-15",
        img: "Images/sectional-sofa.jpeg",
        label: "Sectional Sofa",
        price: 359.99,
        link: "prod-details.html",
        company: "Comfora ,All",
        categories: "Sofa, all",
    },

    {
        id: "product-16",
        img: "Images/sleek-bed.jpeg",
        label: "Sleek Bed",
        price: 539.99,
        link: "prod-details.html",
        company: "Homestead ,All",
        categories: "Bed, all",
    },

    {
        id: "product-17",
        img: "Images/sleek-chair.jpeg",
        label: "Sleek Chair",
        price: 199.99,
        link: "prod-details.html",
        company: "Luxora ,All",
        categories: "Chair, all",
    },

    {
        id: "product-18",
        img: "Images/streamlined-table.webp",
        label: "Streamlined Table",
        price: 209.99,
        link: "prod-details.html",
        company: "Modenza ,All",
        categories: "Table, all",
    },

    {
        id: "product-19",
        img: "Images/stylish-bed.jpeg",
        label: "Stylish Bed",
        price: 169.99,
        link: "prod-details.html",
        company: "Homestead ,All",
        categories: "Bed, all",
    },

    {
        id: "product-20",
        img: "Images/toy-shelf.webp",
        label: "Toy Shelf",
        price: 79.99,
        link: "prod-details.html",
        company: "Luxora ,All",
        categories: "Table, Kids, all",
    },

    {
        id: "product-21",
        img: "Images/velvet-sofa.jpeg",
        label: "Velvet Sofa",
        price: 289.99,
        link: "prod-details.html",
        company: "Luxora ,All",
        categories: "Chair, Sofa, all",
    },

    {
        id: "product-22",
        img: "Images/wooden-shelves.webp",
        label: "Wooden Shelves",
        price: 119.99,
        link: "prod-details.html",
        company: "Artifex ,All",
        categories: "Table, Kids, all",
    },
]

const displaySingleDetails = () => {
   let singleProduct = cards.find(card => card.id == productId);

   let {id, img, label, company, price} = singleProduct;
   console.log(singleProduct);

   productContainer.innerHTML = `

   <div>
   <img src="${img}" alt="">
   </div>

   <div class="prod-info">
       <h1>${label}</h1>
       <h4 class="brand-name">${company}</h4>
       <p class="click-price">$${price}</p>
       <p class="info-text">
           Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
      
       </p>

       <div class="color-selection">
           <h4>colors</h4>

           <div class="color-buttons">
               <button class="color-btn1" type="button"></button>
               <button class="color-btn2" type="button"></button>
           </div>
       </div>

       <div class="form-control amount-div">
           <label class="label" for="amount">
           <h4 class="amount">amount</h4>
           </label>
           <select class="amount-select" id="amount">
           ${Array.from({length: 22}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`
           ).join('')}
           </select>
     </div>
     <div class="bag-div">
       <button class="btn" id="add-to-cart" type="button">Add to bag</button>
     </div>
   </div>`    
}

displaySingleDetails();

document.querySelector('#add-to-cart').addEventListener('click', function () {
    const amount = parseInt(document.querySelector("#amount").value)


    let product = cards.find(card => card.id == productId);
    product.amount = amount
    

    const cartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    let foundIndex = cartItem.findIndex(item => item.id == product.id)
    if(foundIndex > -1){
        cartItem[foundIndex].amount = parseInt(cartItem[foundIndex].amount) + parseInt(product.amount)
    }else{
        cartItem.push(product)
    }
    localStorage.setItem("cart", JSON.stringify(cartItem))

    calculateLength();

    // item added progress

})

// Add to Cart Count
const cartNumber = document.querySelector(".cart-number");

const calculateLength = () =>{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((acc, item) => acc + item.amount, 0);
    console.log(total);
    cartNumber.innerHTML = total;
}
calculateLength();

document.addEventListener("DOMContentLoaded", () =>{
    calculateLength();
});