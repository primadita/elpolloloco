import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Henboss extends MovableObject{
    // #region ATTRIBUTES
    // #endregion

    constructor(){
        super({_xPos: 1600, _yPos: 45, _width: 250, _height: 400, _img: ImageManager.HENBOSS.angry[0], _xSpeed: 10, _ySpeed: 0});
        this.loadImages(ImageManager.HENBOSS.angry);
        IntervalHub.startInterval(this.walk.bind(this), 450);
    }

    // #region METHODS
    walk(){
        super.playAnimation(ImageManager.HENBOSS.angry);
    }
    // #endregion
}