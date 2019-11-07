class Tshirt{
    constructor(color,text,size){
        this.color = color;
        this.text = text;
        this.size = size;
    }
}


function Shop(){
    return{
        shoppingCart: JSON.parse(localStorage.getItem("cartContent")),
        sum: 21,
        qtyNr: 1,
        shipCost: 6,
        
        updateShoppingCart(){
            let counter = document.querySelector("#counter");
            this.shoppingCart = JSON.parse(localStorage.getItem("cartContent"));
            counter.innerText = this.shoppingCart.length;
            let clickArea = document.querySelector(".cart-click-handler");
            clickArea.addEventListener("click", this.showCart(this.shoppingCart))
        },
        
        showCart(shoppingCart){
            let showShoppingCart = document.querySelector("#cart")
            showShoppingCart.className = "show-cart-contents";
            let yourCart = document.createElement("div");
            showShoppingCart.appendChild(yourCart);
            yourCart.className = "your-cart"
            let cartContent = document.createElement("article");
            cartContent.className = "cart-content";
            yourCart.appendChild(cartContent);
            let cartHeader = document.createElement("div");
            cartContent.appendChild(cartHeader);
            cartHeader.className = "cart-header"
            let h2 = document.createElement("h2");
            cartHeader.appendChild(h2);
            h2.innerText = "Your cart";
            for(item of shoppingCart){
                let itemContainer = document.createElement("div");
                cartContent.appendChild(itemContainer);
                itemContainer.className = "item-container"
                let ccItem = document.createElement("p");
                itemContainer.appendChild(ccItem);
                ccItem.className = "cc-item"
                ccItem.innerText = item.text;
                let specifics = document.createElement("div");
                itemContainer.appendChild(specifics);
                specifics.className = "specifics";
                let qty = document.createElement("div");
                specifics.appendChild(qty);
                qty.className = "cc-qty";
                let btnMinus = document.createElement("button");
                qty.appendChild(btnMinus);
                btnMinus.className = "count-btn";
                btnMinus.setAttribute("id", "minus");
                btnMinus.innerText = "-";
                let itemQty = document.createElement("p");
                qty.appendChild(itemQty);
                itemQty.innerText = this.qtyNr;
                let btnPlus = document.createElement("button");
                qty.appendChild(btnPlus);
                btnPlus.className = "count-btn";
                btnPlus.setAttribute("id", "plus");
                btnPlus.innerText = "+";
                let ccColor = document.createElement("div");
                specifics.appendChild(ccColor);
                ccColor.className = "cc-color";
                let shirtColor = document.createElement("p");
                ccColor.appendChild(shirtColor);
                shirtColor.innerText = `Color: ${item.color}`;
                let ccSize = document.createElement("div");
                specifics.appendChild(ccSize);
                ccSize.className = "cc-size";
                let shirtSize = document.createElement("p");
                ccSize.appendChild(shirtSize);
                shirtSize.innerText = `Color: ${item.size}`;

                let ccPrice = document.createElement("div");
                specifics.appendChild(ccPrice);
                ccPrice.className = "cc-price";
                let itemSumContainer = document.createElement("p");
                ccPrice.appendChild(itemSumContainer);
                itemSumContainer.innerText = `€${this.sum}`;

                let remove = document.createElement("p");
                itemContainer.appendChild(remove);
                remove.className = "remove";
                remove.innerText = "Remove";
            }

            let cartFooter = document.createElement("article");
            cartContent.appendChild(cartFooter);
            cartFooter.className = "cart-footer";
            let shippingHeader = document.createElement("h3");
            cartFooter.appendChild(shippingHeader);
            shippingHeader.innerText = "Shipping:"
            let shipping = document.createElement("p");
            shipping.className = "shipping";
            cartFooter.appendChild(shipping);
            shipping.innerText = `€${this.shipCost}`
            let totalHeader = document.createElement("h3");
            cartFooter.appendChild(totalHeader);
            totalHeader.innerText = "Total:";
            let total = document.createElement("p");
            cartFooter.appendChild(total);
            total.className = "total-sum";
            total.innerText = `€${this.shipCost + this.sum}`
            let checkoutBtn = document.createElement("button");
            cartFooter.appendChild(checkoutBtn);
            checkoutBtn.classList = "btn checkout-btn";
            checkoutBtn.innerText = "CHECKOUT"
            
        },
        
        colorSelector(){
            let selector = document.querySelector(".color-selector");
            let box = document.querySelector("#t-shirt-box")
            
            selector.addEventListener("change", event =>{
                let color = event.target.value
                console.log(color)
                
                if(color =="B"){
                    box.className = "t-shirt-b"
                }else{
                    box.className = "t-shirt-w"
                }
                
            })
        },
        
        addToCart(){
            let teeShirt = document.querySelector("#t-shirt-box")
            let addToCartBtn = document.querySelector("#add-to-cart-btn")
            let color = "white"
            let noSizePicked = "Please choose a size."
            let cartItems = this.shoppingCart
            
            addToCartBtn.addEventListener("click", event=>{
                let size = document.querySelector("#size-selector").value
                // size = size.value
                if(size =="not"){
                    console.log(noSizePicked)
                }else{
                    let teeText = document.querySelector(".text-box").innerText
                    if(teeShirt.className == "t-shirt-b"){
                        color = "black"
                    }
                    let item = new Tshirt(color, teeText, size)
                    cartItems.push(item)
                    localStorage.setItem("cartContent", JSON.stringify(cartItems))
                    this.updateShoppingCart()
                    console.log(this.shoppingCart)
                }
            })
        }
    }
}

let shop = new Shop();
shop.updateShoppingCart();
shop.colorSelector();
shop.addToCart();