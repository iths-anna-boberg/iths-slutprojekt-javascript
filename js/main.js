import Tshirt, {Shop} from "./shop.js"
import {galleryIndex, gallery} from "./gallery.js"

let shop = new Shop();
shop.init();
setInterval(gallery, 6500);