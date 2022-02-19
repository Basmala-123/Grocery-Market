let searchBtn = document.querySelector("#search-btn");
let formSearch = document.querySelector(".form-search");
searchBtn.addEventListener("click", function () {
    formSearch.classList.toggle("active");
    shopingCart.classList.remove("active");
    loginBox.classList.remove("active");
    navbar.classList.remove("active");
});

let cartBtn = document.querySelector("#cart-btn");
let shopingCart = document.querySelector(".shopping-cart");
cartBtn.addEventListener("click", function () {
    shopingCart.classList.toggle("active");
    formSearch.classList.remove("active");
    loginBox.classList.remove("active");
    navbar.classList.remove("active");
});

let logBtn = document.querySelector("#login-btn");
let loginBox = document.querySelector(".login-form");
logBtn.addEventListener("click", function () {
    loginBox.classList.toggle("active");
    formSearch.classList.remove("active");
    shopingCart.classList.remove("active");
    navbar.classList.remove("active");
});

let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    formSearch.classList.remove("active");
    shopingCart.classList.remove("active");
    loginBox.classList.remove("active");  
});

let topBtn=document.querySelector(".topBtn");
topBtn.addEventListener("click", function(){
    window.scrollTo({
        top:0,behavior:"smooth"
    })
});

window.onscroll=()=>{
    
    navbar.classList.remove("active");
    formSearch.classList.remove("active");
    shopingCart.classList.remove("active");
    loginBox.classList.remove("active"); 
    if(window.scrollY >= 450){
        topBtn.style.display="block";
        // console.log(`scroll value is ${window.scrollY}`);
    }else{
        topBtn.style.display="none";
    }
}
var swiper = new Swiper(".swiper", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

