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


// CART
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

console.log(cart);




let prodPrice = document.querySelector("cart-price");
const cartArticleDisplay = document.querySelector("#cart-article-grid");



// FUNTION TO LOAD CART
const loadCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
};

// TO LOAD THE SAVED CART IN LOCAL STORAGE
const saveCart = (cartItem) => {
    localStorage.setItem('cart', JSON.stringify(cartItem));
};

const emptyCart = document.querySelector(".cart-empty");

// Display Cart

const displayCart = () =>{
    
    cartArticleDisplay.innerHTML = ""
    cart.map(item => {
        if(cart.length > 0 ) {
            cartArticleDisplay.innerHTML += `
            <article class="cart-article">
                            <img src="${item.img}" alt="">
            
                            <div class="cart-prod-info">
                                <h3>${item.label}</h3>
                                <h4>${item.company}</h4>
                                <p>
                                    color :
                                    <span></span>
                                </p>
                            </div>
            
            
                            <div>
                                <div class="form-control amount-div">
                                    <label class="label" for="amount">
                                    <h4 class="amount">amount</h4>
                                    </label>
                                    <select class="select cart-select" id="amount" onclick="updateCart()">
                                        <option value="">${item.amount}</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                              </div>
            
                              <button onclick="remove('${item.id}')" class="remove-from-cart" data-id ="${item.id}"type="button">remove</button>
                            </div>
            
                            <p class="cart-price">$${item.price}</p>
            
                            
                        </article>
            ` 
        } else {
           emptyCart.innerHTML = "Your Cart Is Empty"; 
           console.log("I am empty");
        }
        
    });
};

displayCart();



// REMOVE BUTTON
const remove = (id) => {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    saveCart(cart);
    displayCart(); 
    calculateLength();
    calculateOrderTotal();

};





// CALCULATE TOTAL
const taxPrice = document.querySelector(".tax-cost");
const shippingPrice = document.querySelector(".shipping-cost");

const priceCard = document.querySelector(".price-calc");


const calculateOrderTotal = () => {
    const subTotal = document.querySelector(".subtotal-cost");

    const orderTotal = document.querySelector(".order-total");


    if (cart.length === 0){
        priceCard.style.display = 'none'
    } 
    else{
        priceCard.style.display = 'block'
    };
     
   
    const totalPrice = cart.map((item) => {
        let total = item.price * item.amount;
        return total;
    }).reduce((acc, cur) => acc + cur, 0);
    
    console.log(cart);

    subTotal.innerHTML = `$${totalPrice.toFixed(2)}`;

    let shippingCost = 5.00;

    let taxCost = 18.00

    shippingPrice.textContent = `$${shippingCost.toFixed(2)}`;
    taxPrice.textContent = `$${taxCost.toFixed(2)}`;

    let overAllTotal = totalPrice + shippingCost + taxCost;
    orderTotal.innerHTML = `$${overAllTotal.toFixed(2)}`;

}

calculateOrderTotal();



