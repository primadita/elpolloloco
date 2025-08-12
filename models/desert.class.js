import { ImageManager } from "./image-manager.class.js";
import { Background } from "./background.class.js";
import { DrawableObject } from "./drawable-object.class.js";

export class Desert extends Background{
    // #region ATTRIBUTES
    static XPOS = -300;
    static INDEX = 0; 
    layerimages;
    // #endregion

    constructor(index){
        super({_img: ImageManager.BACKGROUND.firstLayer[index], _xPos: Desert.XPOS});
        this.loadImages(ImageManager.BACKGROUND.firstLayer);
        Desert.INDEX++;
        Desert.generateNewXPos(canvas.width);
    }


    // #region METHODS
    static generateNewXPos(val){
        Desert.XPOS += val;
    }
    // #endregion

}

// export class DesertFirstLayer extends Desert{
//     constructor(index){
//         super({layer: ImageManager.BACKGROUND.firstLayer, index});
//     }
// }

// export class DesertSecondLayer extends Desert{
//     constructor(index){
//         super({layer: ImageManager.BACKGROUND.secondLayer, index});
//     }
// }

// export class DesertThirdLayer extends Desert{
//     constructor(index){
//         super({layer: ImageManager.BACKGROUND.secondLayer, index});
//     }
// }

// const desert = [new DesertFirstLayer(0),
//     new DesertFirstLayer(1),
//     new DesertSecondLayer(0),
//     new DesertSecondLayer(1),
//     new DesertThirdLayer(0),
//     new DesertThirdLayer(1)
// ]