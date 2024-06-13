const openMenu = document.querySelector(".hamburger-btn");
const dropDown = document.querySelector(".dropdown-content");

openMenu.addEventListener('click', show);

function show(){
    dropDown.style.display = 'flex';
}


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


// LIGHT & DARK MODE JS
const lightMode = document.querySelector(".fa-moon");
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

