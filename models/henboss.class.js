import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Henboss extends MovableObject{
    // #region ATTRIBUTES
    offset = {
        top: 90,
        right: 35,
        bottom: 40,
        left: 30
    }
    // #endregion

    constructor(){
        super({_xPos: 1600, _yPos: 63, _width: 250, _height: 400, _img: ImageManager.HENBOSS.angry[0], _xSpeed: 10, _ySpeed: 0});
        this.loadImages(ImageManager.HENBOSS.angry);
        IntervalHub.startInterval(this.walk, 200);
    }

    // #region METHODS
    walk = () => {
        super.playAnimation(ImageManager.HENBOSS.angry);
    }
    // #endregion
}