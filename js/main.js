class Tshirt{
    constructor(color,text,size){
        this.color = color;
        this.text = text;
        this.size = size;
    }
}

let shoppingCart = []

function colorSelector(){
    let selector = document.querySelector("select");
    let box = document.querySelector("#t-shirt-box")

    selector.addEventListener("change", (event)=>{
        let color = event.target.value
        if(color =="B"){
            box.className = "t-shirt-b"
        }
    })
}

colorSelector();