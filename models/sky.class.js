import { Background } from "./background.class.js";
import { DrawableObject } from "./drawable-object.class.js";
import { ImageManager } from "./image-manager.class.js";

export class Sky extends DrawableObject{
    // #region ATTRIBUTES
    // static xPOS = 0;
    // #endregion

    // constructor(canvas){
    //     super(Sky.xPOS, 0, canvas.width, canvas.height, ImageManager.BACKGROUND.air);
    //     Sky.generateNewXPos(canvas.width);
    // }
    constructor(){
        super({_xPos: 0, _yPos: 0, _width: canvas.width, _height: canvas.height, _img: ImageManager.BACKGROUND.air});
    }

    // #region METHODS
    // static generateNewXPos(val){
    //     Sky.xPos += val;
    // }
    // #endregion
}