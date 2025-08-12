import { ImageManager } from "./image-manager.class.js";
import { Background } from "./background.class.js";
import { DrawableObject } from "./drawable-object.class.js";


export class LayerOne extends Background{
    // #region ATTRIBUTES
    static XPOS = -300;
     
    // #endregion

    constructor(){
        super({_img: ImageManager.BACKGROUND.fullLayer[2], _xPos: LayerOne.XPOS, _width: 2 * canvas.width});
        LayerOne.generateNewXPos(2 * canvas.width);
        // super({_img: ImageManager.BACKGROUND.fullLayer[2], _xPos: Desert.XPOS, _width: 2 * canvas.width});
        // this.loadImages(ImageManager.BACKGROUND.fullLayer);
        // Desert.INDEX++;
        // Desert.generateNewXPos(canvas.width);
    }


    // #region METHODS
    static generateNewXPos(val){
        LayerOne.XPOS += val;
    }
    // #endregion
}

export class LayerTwo extends Background{
    // #region ATTRIBUTES
    static XPOS = -300;
    // #endregion 

    constructor(){
        super({_img: ImageManager.BACKGROUND.fullLayer[1], _xPos: LayerOne.XPOS, _width: 2 * canvas.width});
        LayerTwo.generateNewXPos(2 * canvas.width);
        // super({_img: ImageManager.BACKGROUND.fullLayer[1], _xPos: Desert.XPOS, _width: 2 * canvas.width});
    }
    // #region METHODS
    static generateNewXPos(val){
        LayerTwo.XPOS += val;
    }
    // #endregion
}

export class LayerThree extends Background{
    // #region ATTRIBUTES
    static XPOS = -300;
    // #endregion
    constructor(){
        super({_img: ImageManager.BACKGROUND.fullLayer[0], _xPos: LayerOne.XPOS, _width: 2 * canvas.width});
        LayerThree.generateNewXPos(2 * canvas.width);
    }
    // #region METHODS
    static generateNewXPos(val){
        LayerThree.XPOS += val;
    }
    // #endregion
}

