import { Keyboard } from "./models/keyboard.class.js";
import { World } from "./models/world.class.js";

let canvas;
let world;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    window.world = world;
}
init();

window.addEventListener("keydown",(e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38){
        keyboard.UP = true;
    }
});
window.addEventListener("keyup",(e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38){
        keyboard.UP = false;
    }
})