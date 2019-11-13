console.log("checkout complete")
function finish(){
    let finishBtn = document.querySelector(".finish")
    let done = document.querySelector("#done")
    let paymentContainer = document.querySelector("#payment-container")
    let intro = document.querySelector(".intro")
    let cartHeader = document.querySelector("#step2")
    finishBtn.addEventListener("click", event=>{
        done.className ="done"
        paymentContainer.className = "hidden"
        finishBtn.className = "hidden"
        intro.className = "hidden"
        cartHeader.className = "hidden"
    })
}

finish()