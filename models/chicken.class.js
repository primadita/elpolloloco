import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Chicken extends MovableObject{
    // #region ATTRIBUTES
    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 6
    }
    // #endregion
    
    constructor(){
        super({_xPos: 200, _yPos: 392, _width: 55, _height: 50, _img: ImageManager.CHICKEN.walk[0], _xSpeed: 0.1, _ySpeed: 0})
        this.randomizeStartPoint(500);
        this.randomizedXSpeed();
        this.loadImages(ImageManager.CHICKEN.walk);
        IntervalHub.startInterval(this.walk, 100);
        IntervalHub.startInterval(this.moveLeft, 100);
    }

    // #region METHODS
    walk = () => {
        super.playAnimation(ImageManager.CHICKEN.walk);
    }
    
    randomizedXSpeed(){
        this.xSpeed = this.xSpeed + Math.random() * 0.5;
    }
    // #endregion
}