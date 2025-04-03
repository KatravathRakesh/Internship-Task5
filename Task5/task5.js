let cart = JSON.parse(localStorage.getItem("cart")) || [];

      function updateCart() {
        let cartList = document.getElementById("cartList");
        let cartTotal = document.getElementById("cartTotal");
        cartList.innerHTML = "";
        let total = 0;
        cart.forEach((item) => {
          let li = document.createElement("li");
          li.textContent = `${item.name} - $${item.price}`;
          cartList.appendChild(li);
          total += item.price;
        });
        cartTotal.textContent = total;
        localStorage.setItem("cart", JSON.stringify(cart));
      }

      function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
      }

      function checkout() {
        if (cart.length === 0) {
          alert("Your cart is empty!");
        } else {
          alert("Proceeding to checkout...");
        }
      }

      function clearCart() {
        cart = [];
        localStorage.removeItem("cart");
        updateCart();
      }

      updateCart();