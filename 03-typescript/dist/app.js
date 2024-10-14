"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const hero_sevice_1 = require("./services/hero.sevice");
const hero = (0, hero_sevice_1.findHeroById)(5);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : "not found hero");
