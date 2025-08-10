import { DrawableObject } from "./drawable-object.class.js";
import { ImageManager } from "./image-manager.class.js";

export class Desert extends DrawableObject {
    // #region ATTRIBUTES
    // static PATHINDEX = 0;
    // static DESERTPATH;
    // #endregion

    constructor(layerImagePath){
        super({_xPos: 0, _yPos: 0, _width: canvas.width, _height: canvas.height, _img: layerImagePath});
    }
    // constructor(){
    //     super({_xPos, _yPos, _width, _height, _img})
    //     Desert.PATHINDEX++;
    //     Desert.changeVersion();
    // }

    // #region METHODS
    // static changeVersion(){
    //     Desert.DESERTPATH = ImageManager.BACKGROUND.thirdLayer.PATHINDEX;
    // }
    // #endregion

}