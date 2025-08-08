import { ImageManager } from "./image-manager.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Hen extends MovableObject{
    // #region ATTRIBUTES
    // #endregion
    
    constructor(){
        super().loadImage(ImageManager.hen.walk[0]);
    }

    // #region METHODS
    // #endregion
}