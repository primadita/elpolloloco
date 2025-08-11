import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject{
    // #region ATTRIBUTES
    // #endregion
    
    constructor({}={}){
        super({_xPos: 50, _yPos: 85, _width: 160, _height: 350, _img: ImageManager.PEPE.walk[0], _xSpeed: 10, _ySpeed: 10});
        this.currentImage = 0;
        this.imageCache = {};
        this.loadImages(ImageManager.PEPE.walk);
        IntervalHub.startInterval(this.walk.bind(this), 200);
    }

    // #region METHODS
    walk(){
        super.walk(ImageManager.PEPE.walk);
    }

    jump(){

    }

    throwBottle(){

    }
    // #endregion
}