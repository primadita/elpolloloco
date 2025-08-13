// import { Desert } from "./desert.class.js";
import { DrawableObject } from "./drawable-object.class.js";
import { ImageManager } from "./image-manager.class.js";

export class Background extends DrawableObject{
    // #region ATTRIBUTES
    static XPOS = -300;
    // #endregion
    
    constructor({_img, _xPos, _width} = {}){
        super({_xPos, _yPos: 0, _width, _height: canvas.height, _img});
    }

    // #region METHODS
    // #endregion
}