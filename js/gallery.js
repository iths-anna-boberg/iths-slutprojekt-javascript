let i = 0;

function gallery(){
    
    let inspirationImgs = [
    "./img/casablanca@500x500.png",
    "./img/dark_knight@500x500.png",
    "./img/jaws@500x500.png",
    "./img/northanger-abbey@500x500.png",
    "./img/starwars@500x500.png",
    "./img/princess_bride@500x500.png",
    ];
    // const time = 1000;

    if(i < inspirationImgs.length){
        document.slider.src = inspirationImgs[i];
        i++;
        // setTimeout(gallery, time)
    if(i > inspirationImgs.length -1){
        
        i = 0;
        // setTimeout(gallery, time)

    }


}

}


setInterval(gallery, 5000);
// gallery();
