import { Desert } from "./desert.class.js";
import { DrawableObject } from "./drawable-object.class.js";
import { ImageManager } from "./image-manager.class.js";

export class Background extends DrawableObject{
    // #region ATTRIBUTES
    deserts = [
            new Desert(ImageManager.BACKGROUND.thirdLayer[0]),
            new Desert(ImageManager.BACKGROUND.secondLayer[0]),
            new Desert(ImageManager.BACKGROUND.firstLayer[0])
        ];
    sky;
    // #endregion
    
    constructor({_img, _yPos, _height}={}){
        super({_xPos: 0, _yPos, _width: 720, _height, _img});
        this.addBackgrounds(this.deserts);
    }

    // #region METHODS
    addBackgrounds(){
        for (let i = 0; i < this.deserts.length; i++){
            super.loadImage(this.deserts[i]);
        }

    }
    // #endregion
}