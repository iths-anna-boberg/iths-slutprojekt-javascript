export default class Tshirt{
    constructor(id,color,text,size, qty, price){
        this.id = id;
        this.color = color;
        this.text = text;
        this.size = size;
        this.qty = qty;
        this.price = price;
    }
}


export function Shop(){
    return{
        shoppingCart: JSON.parse(localStorage.getItem("cartContent")) || [],
        shipCost: 6,
        price: 21,
        
        save(){
            localStorage.setItem("cartContent", JSON.stringify(this.shoppingCart));
            
        },
        
        updateShoppingCart(){
            let counter = document.querySelector("#counter");
            // this.shoppingCart = JSON.parse(localStorage.getItem("cartContent"));
            if (!Array.isArray(this.shoppingCart) || !this.shoppingCart.length){
                counter.innerText = 0;
            }else{
                // counter.innerText = this.shoppingCart.length;
                counter.innerText = this.shoppingCartSumItems()
            }            
            let clickArea = document.querySelector(".cart-click-handler");
            clickArea.addEventListener("click", event=>{
                this.showCart(this.shoppingCart)
            })
        },
        
        shoppingCartSumItems(){
            let sum = 0;
            
            for(let item of this.shoppingCart){
                sum = sum + item.qty;
            }
            return sum;
        },
        
        showCart(shoppingCart){
            let price = 0;
            let showShoppingCart = document.querySelector("#cart")
            showShoppingCart.className = "show-cart-contents";
            showShoppingCart.innerHTML = ""
            let yourCart = document.createElement("div");
            showShoppingCart.appendChild(yourCart);
            yourCart.className = "your-cart";
            let closeBtn = document.createElement("button");
            yourCart.appendChild(closeBtn);
            closeBtn.innerText = "X";
            closeBtn.className = "close-btn";
            closeBtn.addEventListener("click", event=>{
                showShoppingCart.className = "hidden-cart"})
                let cartContent = document.createElement("article");
                cartContent.className = "cart-content";
                yourCart.appendChild(cartContent);
                let cartHeader = document.createElement("div");
                cartContent.appendChild(cartHeader);
                cartHeader.className = "cart-header"
                let h2 = document.createElement("h2");
                cartHeader.appendChild(h2);
                h2.innerText = "Your cart";
                for(let item of shoppingCart){
                    let itemContainer = document.createElement("div");
                    cartContent.appendChild(itemContainer);
                    itemContainer.className = "item-container"
                    itemContainer.setAttribute("id", item.id)
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
                    btnMinus.addEventListener("click", event=>{
                        let qtyTarget = event.target.parentNode.parentNode.parentNode;
                        let qtyTargetId = qtyTarget.getAttribute("id");
                        qtyCounter=qtyCounter-1;
                        if(qtyCounter==0){
                            this.removeItem(qtyTargetId);
                            this.updateShoppingCart();
                            showShoppingCart.className = "hidden-cart";
                            this.showCart(this.shoppingCart);
                        }else{
                            this.changeQty(qtyTargetId, qtyCounter);
                            this.updateShoppingCart();
                            showShoppingCart.className = "hidden-cart";
                            this.showCart(this.shoppingCart);
                        }
                    })
                    let itemQty = document.createElement("p");
                    qty.appendChild(itemQty);
                    let qtyCounter = item.qty;
                    itemQty.innerText = qtyCounter;
                    let btnPlus = document.createElement("button");
                    qty.appendChild(btnPlus);
                    btnPlus.className = "count-btn";
                    btnPlus.setAttribute("id", "plus");
                    btnPlus.innerText = "+";
                    btnPlus.addEventListener("click", event=>{
                        let qtyTarget = event.target.parentNode.parentNode.parentNode;
                        let qtyTargetId = qtyTarget.getAttribute("id");
                        qtyCounter = qtyCounter +1;
                        this.changeQty(qtyTargetId, qtyCounter);
                        this.updateShoppingCart();
                        showShoppingCart.className = "hidden-cart";
                        this.showCart(this.shoppingCart);
                    })
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
                    shirtSize.innerText = `Size: ${item.size}`;
                    
                    let ccPrice = document.createElement("div");
                    specifics.appendChild(ccPrice);
                    ccPrice.className = "cc-price";
                    let itemSumContainer = document.createElement("p");
                    ccPrice.appendChild(itemSumContainer);
                    price = item.price * item.qty;
                    itemSumContainer.innerText = `€${price}`;
                    
                    let remove = document.createElement("p");
                    itemContainer.appendChild(remove);
                    remove.className = "remove";
                    remove.innerText = "Remove";
                    remove.addEventListener("click", event=>{
                        let thisTarget = event.target.parentElement;
                        let id = thisTarget.getAttribute("id");
                        this.removeItem(id);
                        this.updateShoppingCart();
                        showShoppingCart.className = "hidden-cart";
                        this.showCart(this.shoppingCart);
                        
                    })
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
                let totalSum = this.updateTotal(shoppingCart);
                total.innerText = `€${totalSum}`
                let checkoutBtn = document.createElement("button");
                cartFooter.appendChild(checkoutBtn);
                checkoutBtn.classList = "btn checkout-btn";
                checkoutBtn.innerText = "CHECKOUT"
            },
            
            removeItem(id){
                let findId = parseInt(id,10);
                let index = this.shoppingCart.findIndex(i=> i.id === findId);
                this.shoppingCart.splice(index,1);
                this.save()
            },
            
            updateTotal(shoppingCart){
                let price = 0;
                for(let item of shoppingCart){
                    price = (item.price * item.qty) + price;
                }
                return price+this.shipCost;
            },
            
            changeQty(id, newQty){
                id = parseInt(id,10);
                let product = this.getProductFromCart(id)
                product.qty = newQty
                this.save()
                this.updateShoppingCart();
            },
            
            getProductFromCart(id){
                return this.shoppingCart.find(product => product.id == id)
            },
            
            colorSelector(){
                let selector = document.querySelector(".color-selector");
                let box = document.querySelector("#t-shirt-box");
                
                selector.addEventListener("change", event =>{
                    let color = event.target.value;                 
                    if(color =="B"){
                        box.className = "t-shirt-b";
                    }else{
                        box.className = "t-shirt-w";
                    }
                })
            },

            editMode(flag){
                let textArea = document.createElement("textarea")
                let textBox = document.querySelector(".text-box");

                if(flag){
                    let sample = textBox.innerText;
                    textBox.innerText = ""
                    textBox.appendChild(textArea);
                    textArea.value = sample;
                    textArea.classList = "roboto";
                    textArea.setAttribute("maxlength", "60")
                    textArea.focus();
                    document.addEventListener("focusout", event=>{
                        textBox.innerText = textArea.value;
                    })
                    textArea.addEventListener("keyup", event=>{
                        if(event.keyCode === "Enter"){ //här är nåt som inte funkar
                            textBox.innerText = textArea.value;
                        }
                    })
                }else{
                    textBox.innerText = textArea.value;
                }
            },

            renderSampleTee(){
                let textBox = document.querySelector(".text-box");
                textBox.innerText = "Click here to create your text";
                textBox.classList ="roboto  text-box";

                textBox.addEventListener("click", ()=>{
                    this.editMode(true);
                })
            },
            
            addToCart(){
                let teeShirt = document.querySelector("#t-shirt-box");
                let addToCartBtn = document.querySelector("#add-to-cart-btn");
                let color = "white";
                let noSizePicked = document.querySelector("#help-size");
                
                addToCartBtn.addEventListener("click", event=>{
                    let size = document.querySelector("#size-selector").value
                    if(size =="not"){
                        noSizePicked.className = "help"
                    }else{
                        let teeText = document.querySelector(".text-box").innerText
                        if(teeShirt.className == "t-shirt-b"){
                            color = "black"
                        }
                        noSizePicked.className = "hidden"
                        let id = Date.now();
                        let item = new Tshirt(id, color, teeText, size, 1, 21);
                        this.shoppingCart.push(item);
                        this.save();
                        this.updateShoppingCart();
                        this.renderSampleTee();
                    }
                })
            },

            init(){
                this.updateShoppingCart();
                this.colorSelector();
                this.addToCart();
                this.renderSampleTee();
            }
        }
    }
    
    // let shop = new Shop();
    // shop.init();
    