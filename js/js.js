





document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
      const cartItemsList = document.querySelector(".cartItems ul");
      const cartStatus = document.getElementById("cartStatus")
      let cartCountElement = document.querySelector(".cartCount")
      let cartCount = 0

      addToCartButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            const productContainer = button.closest(".product")
            const productName = productContainer.querySelector(".product-info h4").textContent
            const productPrice = productContainer.querySelector(".product-info p").textContent
            const productImg = productContainer.querySelector(".product-IMG img").getAttribute("src")


            const cartItem = document.createElement("li")
            cartItem.innerHTML=` <img src ="${productImg}" alt ="${productName}>" 
            <div class="cart-item-details">
            
            <h4>${productName}</h4>
              <p>${productPrice}</p>
            </div>
            `;
            cartItemsList.appendChild(cartItem)

            cartStatus.textContent ="Item in your Bigben Shop Cart"

            cartCount ++
            cartCountElement.textContent = cartCount

        })
      })


   })


   const menuIcon = document.querySelector(".fa-bars")
   const menuLinks = document.querySelector(".menuLinks")

   menuIcon.addEventListener("click", ()=>{
   if ( menuLinks.style.display ==="none"){
    menuLinks.style.display ="block"
   } else{
    menuLinks.style.display ="none"
   }
   })


  