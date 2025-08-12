import { Chicken } from "../models/chicken.class.js";
import { Cloud } from "../models/cloud.class.js";
import { LayerOne, LayerTwo, LayerThree } from "../models/desert.class.js";
import { Hen } from "../models/hen.class.js";
import { Henboss } from "../models/henboss.class.js";
import { Level } from "../models/level.class.js";
import { Sky } from "../models/sky.class.js";

export const level1 = new Level({
    _clouds: [new Cloud(canvas), new Cloud(canvas), new Cloud(canvas), new Cloud(canvas)],
    _enemies: [new Hen(), new Hen(), new Hen(), new Chicken(), new Chicken(), new Henboss()],
    _bg: [new Sky(), new Sky(), new Sky(), new LayerThree(), new LayerTwo(), new LayerOne(), new LayerThree(), new LayerTwo(), new LayerOne()]
})