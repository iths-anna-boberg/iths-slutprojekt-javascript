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
        
        updateShoppingCart(){
            let counter = document.querySelector("#counter")
            this.shoppingCart = JSON.parse(localStorage.getItem("cartContent"))
            counter.innerText = this.shoppingCart.length
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