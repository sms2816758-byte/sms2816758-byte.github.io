// ===== Login Logic =====
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (username === "admin" && password === "1234") {
        window.location.href = "store.html";
      } else {
        alert("❌ Invalid login! Please try again.");
      }
    });
  }
});

// ===== Store Logic =====
let cart = [];

function addToCart(name, price) {
  const item = cart.find((i) => i.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(name) {
  cart = cart.filter((i) => i.name !== name);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
      <button onclick="removeFromCart('${item.name}')">✖</button>
    `;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

function toggleCart() {
  const cartEl = document.getElementById("cart");
  
  // Toggle the 'open' class
  if (cartEl.classList.contains("open")) {
    cartEl.classList.remove("open");
  } else {
    cartEl.classList.add("open");
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("🛒 Your cart is empty!");
  } else {
    alert("✅ Checkout complete! Thank you for your purchase. Come back SOON");
    cart = [];
    updateCart();
  }
}
