import {Shop} from "./shop.js"
let checkout = new Shop();
checkout.renderCheckoutCart();

function finish(){
    let finishBtn = document.querySelector("#finish")
    let done = document.querySelector("#done")
    let paymentContainer = document.querySelector("#payment-container")
    let cartHeader = document.querySelector("#step2")
    finishBtn.addEventListener("click", event=>{
        done.className ="done"
        paymentContainer.className = "hidden"
        finishBtn.className = "hidden"
        cartHeader.className = "hidden"
        checkout.shoppingCart = [];
        checkout.save()
    })
}

finish()