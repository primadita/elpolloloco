import { ImageManager } from "./image-manager.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject{
    // #region ATTRIBUTES
    world;

    realX;
    realY;
    realWidth;
    realHeight;

    offset = { 
        top: 155,
        right: 55,
        bottom: 15,
        left: 30
    }
    acceleration = 5;
    isjump = false;
    // #endregion
    
    constructor({}={}){
        super({_xPos: 50, _yPos: 5, _width: 160, _height: 350, _img: ImageManager.PEPE.walk[0], _xSpeed: 10, _ySpeed: 5});
        this.loadImages(ImageManager.PEPE.walk);
        this.loadImages(ImageManager.PEPE.jump);
        this.loadImages(ImageManager.PEPE.idle);
        this.loadImages(ImageManager.PEPE.longIdle);
        this.loadImages(ImageManager.PEPE.hurt);
        this.loadImages(ImageManager.PEPE.dead);
        IntervalHub.startInterval(this.action, 1000 / 60);
        IntervalHub.startInterval(this.animations, 50);
        IntervalHub.startInterval(this.applyGravity, 1000 / 25);
    }

    // #region METHODS
    action = () => {
        if(this.world.keyboard.RIGHT && this.xPos < this.world.level.levelEndPos){
            this.moveRight();    
            // this.walking_sound.play();
        }

        if(this.world.keyboard.LEFT && this.xPos > -100){
            this.otherDirection = true;
            this.moveLeft();
            // this.walking_sound.play();
        }

        if(this.world.keyboard.SPACE && !this.isAboveGround()){
            this.jump();
        }
        
        this.world.cameraXDir = -this.xPos + this.width;
    }

    animations = () => {
        if(this.isDead()){
            super.playAnimation(ImageManager.PEPE.dead)
        } else if(this.isAboveGround()){
            this.isjump = true;
            for (let i = 0; i < 1; i++){
                super.playAnimation(ImageManager.PEPE.jump);
            }
        } else if(this.world.keyboard.LEFT || this.world.keyboard.RIGHT){
            this.isjump = false;
            super.playAnimation(ImageManager.PEPE.walk);
        } else {
            this.isjump = false;
            super.playAnimation(ImageManager.PEPE.idle);
        }
        // console.log(this.isjump);
    }

    // playAnimation(){
    //     super.playAnimation(ImageManager.PEPE.ju)
    // }

    // idle(){
    //     if()
    //     super.playAnimation(ImageManager.PEPE.idle)
    // }

    jump(){
        this.ySpeed = 35;
    }

    throwBottle(){

    }
    // #endregion
}