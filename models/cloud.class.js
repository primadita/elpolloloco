import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Cloud extends MovableObject{
    // #region ATTRIBUTES
    static XPOS = 10;
    // #endregion

    constructor(canvas){
        super({_xPos: Cloud.XPOS, _yPos: 10, _width: 555, _height: 300, _img: ImageManager.BACKGROUND.clouds[0], _xSpeed: 0.03, _ySpeed: 0})
        this.randomizeStartPoint(10);
        Cloud.generateCloudDistance(canvas.width / 1.5);
        IntervalHub.startInterval(this.moveLeft, 1000 / 60);
    }
    // #region METHODS
    static generateCloudDistance(val){
        Cloud.XPOS += val;
    }
    // #endregion
}