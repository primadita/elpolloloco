import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject{
    // #region ATTRIBUTES
    world;
    // acceleration = -10;
    // #endregion
    
    constructor({}={}){
        super({_xPos: 50, _yPos: 5, _width: 160, _height: 350, _img: ImageManager.PEPE.walk[0], _xSpeed: 10, _ySpeed: 5});
        this.currentImage = 0;
        this.imageCache = {};
        this.loadImages(ImageManager.PEPE.walk);
        this.loadImages(ImageManager.PEPE.jump);
        IntervalHub.startInterval(this.applyGravity, 1000/60);
        IntervalHub.startInterval(this.walk.bind(this), 50);
        IntervalHub.startInterval(this.jump.bind(this), 1000/25);
        
    }

    // #region METHODS
    walk(){
        if(this.isAboveGround()){
            super.playAnimation(ImageManager.PEPE.jump);
        } else {
            if(this.world.keyboard.RIGHT && this.xPos < this.world.level.levelEndPos){
                super.playAnimation(ImageManager.PEPE.walk);
                this.moveRight();    
                // this.walking_sound.play();
            }

            if(this.world.keyboard.LEFT && this.xPos > -100){
                this.otherDirection = true;
                super.playAnimation(ImageManager.PEPE.walk);
                this.moveLeft();
                // this.walking_sound.play();
            }
        }
        this.world.cameraXDir = -this.xPos + this.width;
    }

    // idle(){
    //     if()
    //     super.playAnimation(ImageManager.PEPE.idle)
    // }

    jump(){
        if(this.world.keyboard.SPACE && !this.isAboveGround()){
            this.ySpeed = 35;
        }
    }

    throwBottle(){

    }
    // #endregion
}