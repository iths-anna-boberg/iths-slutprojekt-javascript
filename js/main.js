class Tshirt{
    constructor(color,text,size){
        this.color = color;
        this.text = text;
        this.size = size;
    }
}

// let shoppingCart = JSON.parse(localStorage.getItem("cartContent"))




function Shop(){
    return{
        noSizePicked: "Please choose a size.",
        shoppingCart: JSON.parse(localStorage.getItem("cartContent"))
    },

    function updateShoppingCart(){
        this.shoppingCart = JSON.parse(localStorage.getItem("cartContent"))
    },

    function colorSelector(){
        let selector = document.querySelector("#color-selector");
        let box = document.querySelector("#t-shirt-box")
    
        selector.addEventListener("change", event =>{
            let color = event.target.value
            if(color =="B"){
                box.className = "t-shirt-b"
            }else{
                box.className = "t-shirt-w"
            }
    
        })
    },

    function addToCart(){
        let size = document.querySelectorAll("#size-selector").value
        let teeShirt = document.querySelector("#t-shirt-box")
        let addToCartBtn = document.querySelector("#add-to-cart-btn")
        let color = "white"
        let cartItems = []
        
        addToCartBtn.addEventListener("click", event=>{
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
                console.log(shoppingCart)
            }
        })
    }

}
shop = new Shop();
shop();