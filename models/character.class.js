import { ImageManager } from "./image-manager.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject{
    // #region ATTRIBUTES
    // #endregion
    
    constructor(){
        super().loadImage(ImageManager.pepe.idle[0]);

    }

    // #region METHODS
    jump(){

    }

    throwBottle(){

    }
    // #endregion
}