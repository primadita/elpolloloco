import { ImageManager } from "./image-manager.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject{
    // #region ATTRIBUTES
    // #endregion
    
    constructor({}={}){
        super({_xPos: 50, _yPos: 80, _width: 160, _height: 350, _img: ImageManager.PEPE.walk[0], _xSpeed: 10, _ySpeed: 10})
        // super().loadImage(ImageManager.pepe.idle[0]);

    }

    // #region METHODS
    jump(){

    }

    throwBottle(){

    }
    // #endregion
}