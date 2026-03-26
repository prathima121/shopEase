/* =====================================================
 a. Linking JavaScript file with the HTML page
 (This file is linked using <script src="script.js"></script>)
===================================================== */
console.log("JavaScript file linked successfully");


/* =====================================================
 b. Selecting HTML elements using selectors
===================================================== */

// By ID
const headerTitle = document.getElementById("header-title");

if (headerTitle) {
  headerTitle.style.color = "yellow";
}


// By class
const productCards = document.getElementsByClassName("product-card");

for (let card of productCards) {
  card.style.border = "2px solid blue";
}

// By querySelector
const firstButton = document.querySelector("button");

// By querySelectorAll
const buyButtons = document.querySelectorAll(".buy-btn");

console.log(headerTitle);
console.log(productCards);
console.log(firstButton);
console.log(buyButtons);


/* =====================================================
 c. Implementing Event Listeners
===================================================== */

// Mouse event example
if (firstButton) {
  firstButton.addEventListener("mouseover", () => {
    firstButton.style.opacity = "0.8";
  });

  firstButton.addEventListener("mouseout", () => {
    firstButton.style.opacity = "1";
  });
}


/* =====================================================
 d. Handling click events for HTML button elements
===================================================== */

// Add to Cart – ONLY product buttons
let cartCount = 0;

buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    alert(`🛒 Product added to cart!\nItems in cart: ${cartCount}`);
  });
});


/* =====================================================
 e. Demonstrating Functions
===================================================== */

/* i. Function Declaration */
function showWelcome() {
  const welcomeDiv = document.getElementById("welcome-message");
  if (welcomeDiv) {
    welcomeDiv.textContent = "🎉 Welcome to ShopEase! Your smart online shopping partner.";
    welcomeDiv.style.fontSize = "1.2rem";
    welcomeDiv.style.fontWeight = "600";
    welcomeDiv.style.marginBottom = "15px";
  }
}
showWelcome();



/* ii. Function Definition (Function Expression) */
const showOffer = function () {
  const offerEl = document.getElementById("special-offer");
  if (offerEl) {
    offerEl.textContent = "🔥 Special Deal: Flat 50% OFF on electronics this week!";
    offerEl.style.color = "#ff4c4c";
    offerEl.style.fontWeight = "700";
    offerEl.style.fontSize = "1rem";
  }
};
showOffer();


/* iii. Arrow Function */
const showTime = () => {
  const tipEl = document.getElementById("shopping-tip");
  if (tipEl) {
    tipEl.textContent = "💡 Tip: Use filters on the products page to quickly find what you need.";
    tipEl.style.fontStyle = "italic";
    tipEl.style.marginTop = "10px";
    tipEl.style.color = "#007bff";
  }
};
showTime();

// Select existing dark mode button
const darkToggle = document.querySelector(".dark-toggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change button text
    darkToggle.textContent =
      document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
  });
}


