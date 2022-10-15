let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let cartItems = document.querySelector('.cart-items-container');
let cartBtn = document.querySelector('#cart-btn');

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItems.classList.remove('active');
});

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  // menuBtn.classList.toggle('fa-times');
  searchForm.classList.remove('active');
  cartItems.classList.remove('active');
});

cartBtn.addEventListener('click', () => {
  cartItems.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
});

window.addEventListener('scroll', () => {
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
  cartItems.classList.remove('active');
});