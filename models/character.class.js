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
        top: 150,
        right: 48,
        bottom: 15,
        left: 30
    }
    // acceleration = -10;
    // #endregion
    
    constructor({}={}){
        super({_xPos: 50, _yPos: 5, _width: 160, _height: 350, _img: ImageManager.PEPE.walk[0], _xSpeed: 10, _ySpeed: 5, _acceleration: 5});
        this.loadImages(ImageManager.PEPE.walk);
        this.loadImages(ImageManager.PEPE.jump);
        this.loadImages(ImageManager.PEPE.idle);
        this.loadImages(ImageManager.PEPE.longIdle);
        this.applyGravity();
        // this.getRealFrame();
        // this.drawRealOffset();
        IntervalHub.startInterval(this.action, 1000 / 60);
        IntervalHub.startInterval(this.animations, 50);
        // IntervalHub.startInterval(this.jump.bind(this), 1000/25);
        
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
        if(this.isAboveGround()){
            this.playAnimation(ImageManager.PEPE.jump);
        } else if(this.world.keyboard.LEFT || this.world.keyboard.RIGHT){
            this.playAnimation(ImageManager.PEPE.walk);
        } else {
            this.playAnimation(ImageManager.PEPE.idle);
        }
    }

    // idle(){
    //     if()
    //     super.playAnimation(ImageManager.PEPE.idle)
    // }

    jump(){
        this.ySpeed = 35;
    }

    throwBottle(){

    }

    // drawRealOffset(){
    //     this.rect(this.realX, this.realY, this.realWidth, this.realHeight);
    // }
    
    // getRealFrame(){
    //     this.realX = this.xPos + this.offset.left;
    //     this.realY = this.yPos + this.offset.top;
    //     this.realWidth = this.width - this.offset.left - this.offset.right;
    //     this.realHeight = this.height - this.offset.top - this.offset.bottom;
    // }

    // isColliding(mo){
    //     return this.realX + this.realWidth > mo.realX &&
    //         this.realY + this.realHeight > mo.realY &&
    //         this.realX < mo.realX + mo.realWidth &&
    //         this.realY < mo.realY + mo.realHeight;
    // }
    // #endregion
}