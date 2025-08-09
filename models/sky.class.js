import { Background } from "./background.class.js";
import { ImageManager } from "./image-manager.class.js";

export class Sky extends Background{
    static xPOS = 0;

    constructor(canvas){
        super(Sky.xPOS, 0, canvas.width, canvas.height, ImageManager.BACKGROUND.air);
        Sky.generateNewXPos(canvas.width);
    }

    static generateNewXPos(val){
        Sky.xPos += val;
    }
}