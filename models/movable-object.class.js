import { DrawableObject } from "./drawable-object.class.js";

export class MovableObject extends DrawableObject{
    // #region ATTRIBUTES
    xSpeed;
    ySpeed;
    // #endregion
    
    constructor({_xPos, _yPos, _width, _height, _img, _xSpeed, _ySpeed}={}){
        super({_xPos, _yPos, _width, _height, _img});
        this.xSpeed = _xSpeed;
        this.ySpeed = _ySpeed;
    }

    // #region METHODS
    randomizeStartPoint(maxRange){
        this.xPos = this.xPos + Math.random() * maxRange;
    }
    
    moveRight(){

    }

    moveLeft(){
        
    }
    // #endregion
}