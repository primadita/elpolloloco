import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Cloud extends MovableObject{
    // #region ATTRIBUTES
    // #endregion

    constructor(){
        super({_xPos: 10, _yPos: 10, _width: 555, _height: 300, _img: ImageManager.BACKGROUND.clouds[0], _xSpeed: 0.03, _ySpeed: 0})
        this.randomizeStartPoint(100);
        IntervalHub.startInterval(this.moveLeft, 1000 / 60);
    }
    // #region METHODS
    
    // #endregion
}