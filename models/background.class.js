// import { Desert } from "./desert.class.js";
import { DrawableObject } from "./drawable-object.class.js";
import { ImageManager } from "./image-manager.class.js";

export class Background extends DrawableObject{
    // #region ATTRIBUTES
    // deserts = [
    //         new Desert(ImageManager.BACKGROUND.thirdLayer[0]),
    //         new Desert(ImageManager.BACKGROUND.secondLayer[0]),
    //         new Desert(ImageManager.BACKGROUND.firstLayer[0])
    //     ];
    // sky;
    static XPOS = 0;
    // #endregion
    
    constructor({_img, _xPos} = {}){
        super({_xPos, _yPos: 0, _width: canvas.width, _height: canvas.height, _img});
        // Background.generateNewXPos(canvas.width);
        // this.addBackgrounds(this.deserts);
    }

    // #region METHODS
    // addBackgrounds(){
    //     for (let i = 0; i < this.deserts.length; i++){
    //         super.loadImage(this.deserts[i]);
    //     }

    // }
    // static generateNewXPos(val){
    //     Background.XPOS += val;
    // }
    // #endregion
}