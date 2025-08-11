import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Hen extends MovableObject{
    // #region ATTRIBUTES
    // xPos;
    // xSpeed;
    // #endregion
    
    constructor(){
        super({_xPos: 200, _yPos:345, _width: 80, _height: 80, _img: ImageManager.HEN.walk[0], _xSpeed: 0.5, _ySpeed: 0});
        this.randomizeStartPoint(500);
        this.randomizedXSpeed();
        this.loadImages(ImageManager.HEN.walk);
        IntervalHub.startInterval(this.walk.bind(this), 200);
        IntervalHub.startInterval(this.moveLeft, 200);
    }

    // #region METHODS
    walk(){
        super.walk(ImageManager.HEN.walk);
    }

    randomizedXSpeed(){
        this.xSpeed = this.xSpeed + Math.random() * 0.8;
    }
    // #endregion
}