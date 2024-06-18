import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

const randomName = generateName();
console.log(randomName);

// super Hero
const sprHero = randomSuperhero();
console.log(`I am ${sprHero}`);
