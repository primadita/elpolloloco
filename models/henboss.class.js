import { ImageManager } from "./image-manager.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Henboss extends MovableObject{
    // #region ATTRIBUTES
    // #endregion

    constructor(){
        super({_xPos: 200, _yPos: 305, _width: 120, _height: 120, _img: ImageManager.HENBOSS.angry[0], _xSpeed: 10, _ySpeed: 0})
    }

    // #region METHODS
    // #endregion
}