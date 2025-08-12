import { Background } from "./background.class.js";
import { DrawableObject } from "./drawable-object.class.js";
import { ImageManager } from "./image-manager.class.js";

export class Sky extends Background{
    // #region ATTRIBUTES
    static XPOS = -300;
    // #endregion

    // constructor(canvas){
    //     super(Sky.xPOS, 0, canvas.width, canvas.height, ImageManager.BACKGROUND.air);
    //     Sky.generateNewXPos(canvas.width);
    // }
    constructor(){
        super({_img: ImageManager.BACKGROUND.air, _xPos: Sky.XPOS});
        Sky.generateNewXPos(canvas.width);
    }

    // #region METHODS
    static generateNewXPos(val){
        Sky.XPOS += val;
    }
    // #endregion
}