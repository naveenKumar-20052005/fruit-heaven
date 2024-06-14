
let slideIndex = 0;

function moveSlide(n) {
  const slides = document.getElementsByClassName("slide");
  slideIndex += n;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
moveSlide(0); // Show first slide by default



document.getElementById('menu-toggle').addEventListener('click', function() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
});

// ====================================



// script.js
const products = [
  { name: 'Pineapple', description: 'A sweet yellow fruit', id: 'pineapple', price: 15.00},
  { name: 'Watermelon', description: 'A green fruit', id: 'watermelon' , price: 9.00 },
  { name: 'Orange', description: 'A small orange fruit', id: 'orange', price: 29.00 },
  { name: 'Apple', description: 'A small red fruit', id: 'apple', price: 39.00 },
  { name: 'Strawberry', description: 'A small red fruit', id: 'strawberry', price: 49.00 },
  { name: 'Green Graps', description: 'A small Green fruit', id: 'grap' , price: 12.00 },
  { name: 'Grapes', description: 'A small Gray fruit', id: 'grapes', price: 14.00 },
  { name: 'Banana', description: 'A small Yellow fruit', id: 'banana', price: 20.00 },
];

let cart = [];

function toggleSearchBar() {
  const searchBar = document.getElementById('search-bar');
  const suggestionsList = document.getElementById('suggestions-list');
  searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
  if (searchBar.style.display === 'block') searchBar.focus();
  else suggestionsList.style.display = 'none';
}

function showSuggestions() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const suggestionsList = document.getElementById('suggestions-list');
  suggestionsList.innerHTML = products.filter(p => p.name.toLowerCase().includes(query))
      .map(p => `<li onclick="scrollToProduct('${p.id}')">${p.name}</li>`).join('');
  suggestionsList.style.display = query ? 'block' : 'none';
}

function handleSearch(event) {
  if (event.key === 'Enter') {
      const product = products.find(p => p.name.toLowerCase() === event.target.value.toLowerCase());
      if (product) scrollToProduct(product.id);
  }
}

function scrollToProduct(productId) {
  const productElement = document.getElementById(productId);
  if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('search-bar').value = '';
      document.getElementById('suggestions-list').style.display = 'none';
  }
}

function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  if (product) {
      cart.push(product);
      updateCart();
      localStorage.setItem('cart', JSON.stringify(cart)); // Store cart data in local storage
  }
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}











