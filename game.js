import { World } from "./models/world.class.js";

let canvas;
let world;


function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    window.world = world;
    // character.src = '../assets/img/2_character_pepe/1_idle/idle/I-1.png';
    
    // setTimeout(function(){
    //     ctx.drawImage(character, 100 , 250, 100, 200);
    // }, 2000);
}
init();