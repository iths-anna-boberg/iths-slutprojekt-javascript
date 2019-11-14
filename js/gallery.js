 export let galleryIndex = 0;
 
 export function gallery(){
    
    let inspirationImgs = [
        "./img/dark_knight@500x500.png",
        "./img/jaws@500x500.png",
        "./img/northanger-abbey@500x500.png",
        "./img/starwars@500x500.png",
        "./img/princess_bride@500x500.png",
        "./img/casablanca@500x500.png",
    ];
    
    if(galleryIndex < inspirationImgs.length){
        document.slider.src = inspirationImgs[galleryIndex];
        galleryIndex++;
        if(galleryIndex > inspirationImgs.length -1){
            galleryIndex = 0;
        }
    }
    
}
