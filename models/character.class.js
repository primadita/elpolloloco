import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject{
    // #region ATTRIBUTES
    world;
    // #endregion
    
    constructor({}={}){
        super({_xPos: 50, _yPos: 85, _width: 160, _height: 350, _img: ImageManager.PEPE.walk[0], _xSpeed: 10, _ySpeed: 10});
        this.currentImage = 0;
        this.imageCache = {};
        this.loadImages(ImageManager.PEPE.walk);
        IntervalHub.startInterval(this.walk.bind(this), 1000/60);
    }

    // #region METHODS
    walk(){
        if(this.world.keyboard.RIGHT){
            this.otherDirection = false;
            super.walk(ImageManager.PEPE.walk);
            this.moveRight();    
        }

        if(this.world.keyboard.LEFT){
            this.otherDirection = true;
            super.walk(ImageManager.PEPE.walk);
            this.moveLeft();
        }
        this.world.cameraXDir = -this.xPos ;
    }

    jump(){

    }

    throwBottle(){

    }
    // #endregion
}