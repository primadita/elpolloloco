import { ImageManager } from "./image-manager.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Hen extends MovableObject{
    // #region ATTRIBUTES
    // xPos;
    xSpeed;
    // #endregion
    
    constructor(){
        super({_xPos: 200, _yPos:345, _width: 80, _height: 80, _img: ImageManager.HEN.walk[0], _xSpeed: 10, _ySpeed: 0});
        this.randomizeStartPoint(500);
    }

    // #region METHODS
    
    // #endregion
}