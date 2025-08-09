import { ImageManager } from "./image-manager.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Chicken extends MovableObject{
    // #region ATTRIBUTES
    // #endregion
    
    constructor(){
        super({_xPos: 200, _yPos: 372, _width: 55, _height: 50, _img: ImageManager.CHICKEN.walk[0], _xSpeed: 10, _ySpeed: 0})
        this.randomizeStartPoint(500);
    }

    // #region METHODS
    // #endregion
}