import { findHeroById } from "./services/hero.sevice";

const  hero = findHeroById(5);
console.log(hero?.name ?? "not found hero");
