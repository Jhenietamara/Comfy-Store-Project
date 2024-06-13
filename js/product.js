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
    lightMode.classList.toggle("fa-sun");
    lightMode.classList.toggle("fa-moon");

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



let gridContainer = document.querySelector(".featured-grid");
let listContainer = document.querySelector(".featured-list");


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


// LIST & GRID OPTION
let gridBtn = document.querySelector(".grid-btn");
let listBtn = document.querySelector(".listBtn");
  
let isGrid = true;

gridBtn.addEventListener("click", () => {
 isGrid = true;
 listContainer.classList.add("hide-container");
 gridContainer.classList.remove("hide-container");

 sliceProduct(cards, 0, 10)
})

listBtn.addEventListener("click", () => {
    isGrid = false;
    gridContainer.classList.add("hide-container");
    listContainer.classList.remove("hide-container");

    sliceProduct(cards, 0, 10)
   })

function sliceProduct(data, index, number) {
    if(data.length < 1){
        gridContainer.innerHTML = "Sorry, no products matched your search..."
        listContainer.innerHTML = "Sorry, no products matched your search..."
        return;
    }

    let sliced = data.slice(index * 10, index * number + number);

    if(isGrid){
        gridContainer.innerHTML = sliced.map((card) => 
        `<a href="${card.link}?id=${card.id}" class="card">
        <figure >
            <img class="card-image" src= ${card.img} alt="">
        </figure>
        

        <div class="item-details">
            <h2 class="product-name">${card.label}</h2>
            <span class="price">$${card.price}</span>
        </div>
    </a>` ).join("");

    gridBtn.classList.add(".list-grid-btn-active");
    listBtn.classList.remove("list-grid-btn-active");
    }
    else{
        listContainer.innerHTML = sliced.map((card) =>
        `<a href="${card.link}?id=${card.id}" class="list-card">
        <img class="list-img" src= ${card.img} alt="">
        <div class="list-item-details">
            <h3>${card.label}</h3>
            <h4>${card.company.split(' ')[0]}</h4>
        </div>
        <p class="list-price">${card.price}</p>
    </a>`).join("");

    listBtn.classList.add(".list-grid-btn-active");
    gridBtn.classList.remove("list-grid-btn-active");
   }
};

sliceProduct(cards, 0, 10);


// PAGINATION

let pagination = document.querySelector(".page-numbers");
let prev = document.querySelector(".prev-btn");
let next = document.querySelector(".next-btn");

function paginate() {
    let page = Math.floor(cards / 10);

    for(let i = 0; i < Math.ceil(cards.length / 10); i++){
        
        pagination.innerHTML += `<button onclick="sliceProduct(cards, ${i}, ${10})" class="page-btn">${i + 1}</button>`;
    }
}
paginate();





// PRODUCT FORM
const form = document.querySelector(".product-form")
const searchInput = document.querySelector(".search-input");
const priceRange = document.querySelector("#price");
const priceRangePreview = document.querySelector("#range-preview");
const resetBtn = document.querySelector(".reset")

// Price input range
priceRange.addEventListener("change", () => {
    priceRangePreview.textContent = `$${priceRange.value}`
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const term = searchInput.value.toLowerCase()
    const category = document.querySelector("#category").value;
    const company = document.querySelector("#company").value;
    const sortBy = document.querySelector("#order").value;
    const priceRange = document.querySelector("#price").value;

    console.log(category, company, priceRange)


// Filtering for form inputs & select
    const filtered = cards.filter(card => card.label.toLowerCase().includes(term) && card.categories.toLowerCase().includes(category.toLowerCase()) && card.company.toLowerCase().includes(company.toLowerCase()) && parseFloat(card.price.split('$')[1]) <= priceRange)

    // To show number of product cards displayed
    document.querySelector("#cart-length").textContent = `${filtered.length} products`
    sliceProduct(filtered, 0, 10)

    if(filtered.length <= 1){
        document.querySelector("#cart-length").textContent = `${filtered.length} product`
    }
})

// Reset button
resetBtn.addEventListener("click", () => {
    sliceProduct(cards, 0, 10);
    document.querySelector("#cart-length").textContent = `${cards.length} products`;
});




// ADD TO CART

